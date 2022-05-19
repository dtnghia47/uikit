import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {
    "prop-types": [
      "number",
      "string",
      "bool",
      "array",
      "func",
      "any",
      "oneOf",
      "node",
      "object",
      "arrayOf",
      "oneOfType",
    ],
    "react-is": [
      "isElement",
      "ForwardRef",
      "isForwardRef",
      "isValidElementType",
    ],
  },
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: "./dist/bundle.js",
      format: "umd",
      name: "uikit",
    },
    {
      file: "./dist/bundle.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    json(),
    typescript(),
    commonjs(commonjsOptions),
    babel({ babelHelpers: "bundled" }),
    resolve({
      // pass custom options to the resolve plugin
      // customResolveOptions: {
      //   moduleDirectory: 'node_modules'
      // },
      browser: true,
    }),
  ],
  watch: {
    chokidar: {
      // if the chokidar option is given, rollup-watch will
      // use it instead of fs.watch. You will need to install
      // chokidar separately.
      //
      // this options object is passed to chokidar. if you
      // don't have any options, just pass `chokidar: true`
    },

    // include and exclude govern which files to watch. by
    // default, all dependencies will be watched
    exclude: ['node_modules/**']
  }
};
