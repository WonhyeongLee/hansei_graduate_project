const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/db",
    createProxyMiddleware({
      target: "https://hansei-project.herokuapp.com",
      changeOrigin: true,
    })
  );
};