import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-no-undef': 'warn',
      'react/no-unused-state': 'warn',
      "react/prop-types": "off",
      'react/react-in-jsx-scope': 'off',
      "react/no-unescaped-entities": "off"
    },
  },
];