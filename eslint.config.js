import js from "@eslint/js";
import panda from "@pandacss/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const pandaPluginRecommended = {
  ignores: [
    "**/*.d.ts",
    "styled-system",
    // Ignore panda errors cause that's what we're here for
    // 'src/App.tsx',
  ],
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
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [".react-router/*"],
  },
  {
    rules: {
      "import/consistent-type-specifier-style": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  eslintPluginPrettierRecommended,
  pandaPluginRecommended,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
  },
  {
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
