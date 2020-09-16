module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      stage: 3,
      autoprefixer: {
        flexfox: "no-2009",
      },
      features: {
        "custom-properties": false,
      },
    },
  },
};