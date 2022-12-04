module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],

    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            "~/shared": "./src/shared",
            "~/infra": "./src/infra",
            "~/domain": "./src/domain",
            "~/main": "./src/main",
            "~/assets": "./assets"
          },
        },
      ],
    ],
  };
};
