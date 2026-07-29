const nextESLint = require("eslint-config-next/core-web-vitals");

module.exports = [
  nextESLint,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
    },
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "next-env.d.ts",
    ],
  },
];