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

module.exports = function (app) {
    app.use(
      "/db/items",
      createProxyMiddleware({
        target: "https://hansei-project.herokuapp.com",
        changeOrigin: true,
      })
    );
  };