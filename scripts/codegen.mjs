#!/usr/bin/env node

import * as t from "@babel/types";
import { transform } from "@svgr/core";
import { ZipFS } from "@yarnpkg/libzip";
import { optimize } from "svgo";

import { removeDirectory, writeFile } from "./utils.mjs";

const zipFile = process.argv[2];
const zipFS = new ZipFS(zipFile);

await removeDirectory("./src/icons");

const names = [];
for (const fileName of await zipFS.readdirPromise(".")) {
  if (fileName.endsWith(" Icon.svg")) {
    const name = fileName.slice(0, -4).replaceAll(" ", "");
    const content = await zipFS.readFilePromise(fileName, "utf-8");
    names.push(name);

    const svg = optimize(content, {
      multipass: true,
      plugins: [
        "preset-default",
        { name: "removeAttrs", params: { attrs: "fill" } },
      ],
    }).data;

    writeFile(`./src/icons/${name}.svg`, svg);

    writeFile(
      `./src/icons/${name}.tsx`,
      (
        await transform(
          optimize(svg, {
            plugins: ["removeXMLNS", "removeDimensions"],
          }).data,
          {
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

writeFile(
  "./src/icons/index.ts",
  names
    .slice()
    .sort()
    .map((name) => `export * from "./${name}";\n`)
    .join(""),
);
