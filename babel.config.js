module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // ВАЖЛИВО: react-native-reanimated/plugin має бути ОСТАННІМ у списку плагінів
      "react-native-reanimated/plugin",
    ],
  };
};
