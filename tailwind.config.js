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
        Inter: "Inter, sans-serif",
        Sarabun: "Sarabun, sans-serif",
        Poppins: "Poppins, sans-serif",
        GothicA1: "Gothic A1, sans-serif"
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}