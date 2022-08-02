const path = require("path");
const { PuppeteerRenderer } = require("prerender-spa-plugin");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  },
  plugins: [
    new PrerenderSPAPlugin({
      // Absolute path to compiled SPA
      staticDir: path.join(__dirname, 'dist'),
      // List of routes to prerender
      routes: ['/', '/servicos/padrao-entrada', '/servicos/projetos-eletricos', '/servicos/automacao', '/servicos/emergencia'],
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      },
      //é preciso declarar uma nova instância do Pupeeter sem o plugin
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 4,
        renderAfterElementExists: "#app"
        // o mesmo elemento #app onde o vue monta a aplicação
      })
    }
    )
  ]
}
