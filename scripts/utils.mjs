import fs from "node:fs/promises";
import path from "node:path";

import prettier from "prettier";

const writeFile = async (fileName, content) => {
  await fs.mkdir(path.dirname(fileName), { recursive: true });
  await fs.writeFile(
    fileName,
    prettier.format(content, {
      filepath: fileName,
      ...(await prettier.resolveConfig(fileName)),
    }),
  );
};

const removeDirectory = async (directory) => {
  await fs.rm(directory, { recursive: true, force: true });
};

export { removeDirectory, writeFile };
