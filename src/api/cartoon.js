import request from '@/utlis/request'
// 首页请求数据
// http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5
export const getBanner = () => {
  return request({
    url: '/api/wbcomic/home/page_recommend_list',
    method: 'GET',
    params: {
      mca: 'h5_recommend_male',
      _type: 'h5'
    }
  })
}

// 放送列表数据
// http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5
export const getDaypub = () => {
  return request({
    url: '/api/wbcomic/comic/daypub_list',
    method: 'GET',
    params: {
      pub_day: '',
      page_num: 1,
      rows_num: 20,
      _type: 'h5'
    }
  })
}

// http://manhua.weibo.cn/wbcomic/comic/filter_list?_type=h5
// 分类数据
export const getCate = () => {
  return request({
    url: '/api/wbcomic/comic/filter_list',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

// 分类数据详情
// http://manhua.weibo.cn/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5
// cate_id: 0 id 第一个全部
// end_status: 0 第二个全部
// comic_pay_status: 0 第三个全部
// page_num: 2 下面共几页
// rows_num: 20
// order:
// _type: h5
export const getCateType = (cate_id = 0, end_status = 0, comic_pay_status = 0, page_num = 1) => {
  return request({
    url: '/api/wbcomic/comic/filter_result',
    method: 'GET',
    params: {
      cate_id,
      end_status,
      comic_pay_status,
      page_num,
      rows_num: 20,
      order: '',
      _type: 'h5'
    }
  })
}

// http://manhua.weibo.cn/wbcomic/comic/comic_show?comic_id=68798&create_source=h5&_=1588403254818&_type=h5
// 详情页数据
export const getDetil = (id) => {
  return request({
    url: '/api/wbcomic/comic/comic_show',
    method: 'GET',
    params: {
      comic_id: id,
      create_source: 'h5',
      _: new Date().getTime(),
      _type: 'h5'
    }
  })
}

// http://manhua.weibo.cn/wbcomic/home/rank?_type=h5
// http://manhua.weibo.cn/wbcomic/home/rank_read?_type=h5
// 排行榜
export const getRank = () => {
  return request({
    url: '/api/wbcomic/home/rank_read',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}
// http://manhua.weibo.cn/wbcomic/home/rank_share?_type=h5
// 新排行榜
export const getRank2 = () => {
  return request({
    url: '/api/wbcomic/home/rank_share',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}
// http://manhua.weibo.cn/wbcomic/home/rank?_type=h5
// 综合
export const getRank3 = () => {
  return request({
    url: '/api/wbcomic/home/rank',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

// 完结
// http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5
export const getComic = () => {
  return request({
    url: '/api/wbcomic/home/recommend_list',
    method: 'GET',
    params: {
      location_en: 'ending_works_list',
      _type: 'h5'
    }
  })
}

// http://manhua.weibo.cn/wbcomic/home/hot_words?_type=h5
// 搜索页面
export const getSearch = () => {
  return request({
    url: '/api/wbcomic/home/hot_words',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

// 搜索页面的详细内容
// http://manhua.weibo.cn/wbcomic/home/search?word=%E9%98%BF&page_num=1&_type=h5
export const getSearch2 = (word, page_num = 1) => {
  return request({
    url: '/api/wbcomic/home/search',
    method: 'GET',
    params: {
      word: word,
      page_num: page_num,
      _type: 'h5'
    }
  })
}
