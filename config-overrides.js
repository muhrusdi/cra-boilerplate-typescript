const {
  override,
  disableEsLint,
  addBabelPresets,
  addWebpackAlias,
  addBabelPlugins,
  addWebpackResolve,
} = require("customize-cra");
const path = require("path");

const aliases = {
  "@components": path.resolve(__dirname, "src/components"),
  "@containers": path.resolve(__dirname, "src/containers"),
  "@hooks": path.resolve(__dirname, "src/hooks"),
  "@utils": path.resolve(__dirname, "src/utils"),
  "@layout": path.resolve(__dirname, "src/containers/layout"),
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
  ...addBabelPlugins(
    "react-hot-loader/babel"
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
      extensions: [".ts", ".js", ".tsx", ".css"]
    }
  ),
);