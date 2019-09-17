const {
  override,
  disableEsLint,
  addBabelPresets,
  addWebpackAlias,
  addWebpackResolve,
} = require("customize-cra");
const path = require("path");

const aliases = {
  "@components": path.resolve(__dirname, "components"),
  "@containers": path.resolve(__dirname, "containers"),
  "@hooks": path.resolve(__dirname, "hooks"),
  "@utils": path.resolve(__dirname, "utils"),
  "@layout": path.resolve(__dirname, "containers/layout"),
};

module.exports = override(
  // disable eslint in webpack
  disableEsLint(),

  ...addBabelPresets(
    [
      "@emotion/babel-preset-css-prop",
      {
        "autoLabel": true,
        "labelFormat": "[local]"
      }
    ],
    "@babel/preset-env",
    "@babel/preset-react",
  ),

  /**
   * add path alias
   */
  addWebpackAlias(aliases),

  /**
   * resolve extention
   */
  addWebpackResolve(
    {
      extensions: ['.js', '.jsx', '.css']
    }
  ),
);