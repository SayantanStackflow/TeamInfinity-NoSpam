module.exports = {
  content: [
      "./templates/**/*.html",
      "./static/src/**/*.js",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Bebas: "Bebas Neue, cursive",
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}