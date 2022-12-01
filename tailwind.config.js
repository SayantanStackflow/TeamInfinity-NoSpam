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
        Inter: "Inter, sans-serif"  
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}