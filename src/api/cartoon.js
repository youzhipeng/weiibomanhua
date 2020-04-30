import request from '@/utlis/request'

export const getBanner = () => {
  return request({
    url: 'http://localhost:8080/api/wbcomic/home/page_recommend_list',
    method: 'GET',
    params: {
      mca: 'h5_recommend_male',
      _type: 'h5'
    }
  })
}
// http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5
