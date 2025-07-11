import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// We will add our new rule object to this array
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // ---- ADD THIS OBJECT TO THE ARRAY ----
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  // ------------------------------------
];

export default eslintConfig;
