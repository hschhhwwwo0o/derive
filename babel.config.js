module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            components: "./components",
            types: "./types",
            screens: "./screens",
            layouts: "./layouts",
            router: "./router",
            styles: "./styles",
            libs: "./libs",
            sql: "./sql",
            config: "./config-app",
          },
        },
      ],
    ],
  };
};
