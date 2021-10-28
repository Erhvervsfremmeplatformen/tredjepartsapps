const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const options = {
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      scss: {
        sassOptions: {
          outputStyle: 'compressed'
        }
      }
    }
  },
  configureWebpack: {
    output: {
      filename: 'build.js'
    },
    plugins: [
      new LodashModuleReplacementPlugin(),
      //new BundleAnalyzerPlugin()
    ],
    optimization: {
      minimize: true
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  pwa: {
    themeColor: '#ffffff',
    msTileColor: '#ffffff',
    manifestPath: 'manifest.json',
    iconPaths: {
      favicon16: 'img/icons/favicon-16x16.png',
      favicon32: 'img/icons/favicon-32x32.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/maskicon.svg',
      msTileImage: 'img/icons/mstile-144x144.png'
    }
  },
  publicPath: '/',
  outputDir: '../../../build/generated/vue/static',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/global.scss')]
    }
  },
  runtimeCompiler: true
};

if (process.env.VG_VUE_TRANSPILE === 'true') {
  console.log('⚙️ Transpiling Vue applikation ...');
  options.css.extract = false;
}

module.exports = options;