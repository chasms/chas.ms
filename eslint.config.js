import js from "@eslint/js";
import panda from "@pandacss/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const pandaPluginRecommended = {
  ignores: ["**/*.d.ts", "styled-system"],
  plugins: {
    "@pandacss": panda,
  },
  rules: {
    ...panda.configs.recommended.rules,
  },
};

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  globalIgnores([
    ".react-router/**/*",
    ".netlify/**/*",
    "build/**/*",
    "styled-system/**/*",
    "node_modules/**/*",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  pandaPluginRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "import/consistent-type-specifier-style": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect", // React version. "detect" automatically picks the version you have installed.
        // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
        // Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
        defaultVersion: "", // Default React version to use when the version you have installed cannot be detected.
        // If not provided, defaults to the latest React version.
      },
    },
  },
]);
