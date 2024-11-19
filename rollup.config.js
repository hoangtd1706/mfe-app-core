import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

const getPluginsConfig = (prod) => {
  if (prod) {
    console.log("Build!");
    return [
      del({ targets: ["dist/*"] }),
      typescript("./tsconfig.json"),
      image(),
    ];
  } else {
    console.log("Watch!");
    return [typescript("./tsconfig.json"), image()];
  }
};

export default (CLIArgs) => {
  const prod = !!CLIArgs.prod;
  const bundle = {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
  };

  bundle.plugins = getPluginsConfig(prod);
  return bundle;
};
