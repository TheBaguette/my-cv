module.exports = {
  chainWebpack: (config) => {
    config.plugin("VuetifyLoaderPlugin").tap((args) => [
      {
        progressiveImages: true,
      },
    ]);
  },
  configureWebpack: {
    devtool: "source-map",
  },
  transpileDependencies: ["vuetify"],
};
