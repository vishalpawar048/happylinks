/**
 * @type {import('next').NextConfig}
 */
const path = require("path");
const nextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  rules: [
    {
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    },
  ],
};

module.exports = nextConfig;
