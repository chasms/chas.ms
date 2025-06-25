import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import panda from "@pandacss/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

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

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  pandaPluginRecommended,
  eslintPluginPrettierRecommended,
];

export default eslintConfig;
