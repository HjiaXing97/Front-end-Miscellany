const path = require("path");
const CarcoLessPlugin = require("craco-less");

const resolve = (src) => path.resolve(__dirname, src);

module.exports = {
  plugins: [
    {
      plugin: CarcoLessPlugin
    }
  ],
  webpack: {
    alias: {
      src: resolve("src")
    }
  }
};
