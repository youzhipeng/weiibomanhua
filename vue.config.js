module.exports = {
  devServer: {
    // http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5
    proxy: {
      '/api': {
        target: 'http://manhua.weibo.cn',
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
