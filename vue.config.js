const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"/portpolio3",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})
