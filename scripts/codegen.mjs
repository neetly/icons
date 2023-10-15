#!/usr/bin/env node

import { createRequire } from "node:module";

import { removeDirectory, t, writeFile } from "@neetly/codegen-utils";
import { transform } from "@svgr/core";
import { ZipFS } from "@yarnpkg/libzip";
import { optimize } from "svgo";

const require = createRequire(import.meta.url);

const zipFile = process.argv[2];
const zipFS = new ZipFS(zipFile);

await removeDirectory("./src/icons");

const names = [];
for (const fileName of await zipFS.readdirPromise(".")) {
  if (fileName.endsWith(" Icon.svg")) {
    const name = fileName.slice(0, -4).replaceAll(" ", "");
    const content = await zipFS.readFilePromise(fileName, "utf8");
    names.push(name);

    const svg = optimize(content, {
      multipass: true,
      plugins: [
        "preset-default",
        { name: "removeAttrs", params: { attrs: "fill" } },
      ],
    }).data;

    await writeFile(`./src/icons/${name}.svg`, svg);

    await writeFile(
      `./src/icons/${name}.tsx`,
      (
        await transform(
          optimize(svg, {
            plugins: ["removeXMLNS", "removeDimensions"],
          }).data,
          {
            plugins: [require.resolve("@svgr/plugin-jsx")],
            svgProps: {
              "aria-hidden": "{true}",
            },
            typescript: true,
            template: (variables, { tpl }) => {
              const svgName = name.slice(0, 1).toLowerCase() + name.slice(1);
              return tpl`
                import type { SVGAttributes } from "react";
                /* empty-line */
                const ${name} = (props: SVGAttributes<SVGSVGElement>) => {
                  return ${variables.jsx};
                };
                /* empty-line */
                const ${svgName} = ${t.stringLiteral(svg)};
                /* empty-line */
                export { ${name} as ${name}, ${svgName} as ${svgName} };
              `;
            },
          },
        )
      ).replaceAll("/* empty-line */", ""),
    );
  }
}

await writeFile(
  "./src/icons/index.ts",
  names
    .slice()
    .sort()
    .map((name) => `export * from "./${name}";\n`)
    .join(""),
);
