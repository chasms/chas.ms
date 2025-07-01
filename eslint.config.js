import { default as defaultConfig } from "@epic-web/config/eslint";
import js from "@eslint/js";
import panda from "@pandacss/eslint-plugin";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

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
  defaultConfig,
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
]);
