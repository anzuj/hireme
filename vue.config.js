module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  publicPath: process.env.NODE_ENV === 'production'
    ? '/hireme/'
    : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
