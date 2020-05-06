<template>
  <div class="pate-search">
  <div id="search_">
   <div class="search_header">
    <form method="get" action="javascript:void(0);">
     <div class="search_ferame">
      <span class="search_ferame_icon"></span>
      <input placeholder="请输入搜索关键字"  v-model="search" @keyup.enter="up"/>
      <span class="search_clear_cion" v-if="search" @click="del"></span>
     </div>
    </form>
    <div class="search_fix_btn">
     <span v-if="!search" @click="$router.back()">取消</span>
     <span v-else @click="clickData">搜索</span>
     <!---->
    </div>
   </div>
   <div style="display: none;">
    <!---->
   </div>
   <Node  v-show="nodes"></Node>
   <div class="search_footer" v-show="!isShow">
    <div class="search_page" style="">
     <div class="hot_search">
      <div class="hot_serch_header">
       <div class="search_title">
        热门搜索
       </div>
       <div class="search_icon refresh" @click="getClick"></div>
      </div>
      <ul class="hot_search_conent">
       <li class="search_label" v-for="(item,index) in clickList" :key="index" v-show="index < 12"><a href="javascript:;" @click="clickDetail(item.object_id)" class="">{{item.title}} </a></li>
        <!-- <li class="search_label"><a href="/c/71806" class=""> 悬疑猫——大叔深夜故事集 </a></li> -->
      </ul>
     </div>
    </div>
    <div class="hot_search hosity">
     <div class="hot_serch_header" v-show="keyVal2.length">
      <div class="search_title">
       搜索历史
      </div>
      <div class="search_icon clear" @click="delt"></div>
     </div>
     <ul class="hot_search_conent">
       <li class="search_label" v-for="item in keyVal2" :key="item.name" @click="clickSend(item.name)">
         <span class="search_label_text">{{item.name}}</span>
         </li>
     </ul>
    </div>
   </div>
   <!---->
  <div class="search_result" v-show="isShow" >
   <div class="loadMoreWraper scroll" @scroll="scl($event)" ref="box">
    <div class="loadMore">
     <div class="search_list" v-for="(item,index) in data" :key="index">
      <a href="javascript:;" @click="skip(item.comic_id)" class="">
       <div class="searchList">
        <div class="search_list_img">
         <div class="comic_cover" data-src="item.cover" lazy="loaded" :style="[{backgroundImage : 'url('+item.cover+')'}]"></div>
        </div>
        <div class="search_list_delete">
         <h4 class="sarchList_title"><font color="red"></font>{{item.name}}</h4>
         <div class="sina_nickname">
          <font color="red"></font>{{item.sina_nickname}}
         </div>
         <div class="sina_nickname">
          <span v-for="(list,index) in item.cates" :key="list.cate_id" v-show="index < 3">{{list.cate_name}} \</span>
         </div>
        </div>
       </div></a>
     </div>
     <div class="load_more" style="" v-show="data.length < 1">
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/circle.88c279ba.png" alt="" />
      <p style="font-size:16px">正在加载...</p>
      <!---->
     </div>
    </div>
   </div>
  </div>
  </div>
    </div>
</template>
<script>
// 引入加载图片
import Node from '@/components/Node'
import { getSearch, getSearch2 } from '@/api/cartoon.js'
export default {
  components: {
    // Mymask,
    Node
  },
  data () {
    return {
      list: [],
      clickList: [],
      num: 12, // 一开始的显示的条数
      search: '', // model数据
      data: [], // 详细页面数据
      keyVal: [],
      keyVal2: this.searchLog2(),
      isShow: false,
      nodes: false,
      pages: 1, // 滑动的具体页数
      history: false // 控制历史记录的显示隐藏
    }
  },
  name: 'Search',
  methods: {
    // 当我点击搜索历史内容的时再次发送请求
    async clickSend (name) {
      this.search = name
      await this.getSearch2(name, this.pages)
      if (this.data.length === 0) {
        this.isShow = false
        this.nodes = true
      } else {
        this.isShow = true
        this.nodes = false
      }
    },
    // 清除localStorage
    delt () {
      window.localStorage.removeItem('search')
      this.keyVal2 = []
    },
    // 定义一个方法，拿出localstorng里面的数据
    searchLog2 () {
      // const tmp = localStorage.getItem('search')
      // if (!tmp) {
      //   return []
      // }
      // return JSON.parse(tmp)
      return localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search')) : []
    },
    // 存储localStorng
    searchLog () {
      const tmp = this.keyVal2.findIndex(item => {
        return item.name === this.keyVal
      })
      if (tmp !== -1) return
      this.keyVal2.unshift({ name: this.keyVal })
      localStorage.setItem('search', JSON.stringify(this.keyVal2))
    },
    // 点击每一个时，跳转到详细页面
    skip (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },
    // 滚动再次发送请求
    scl (e) {
      if (
        this.$refs.box.scrollHeight -
          this.$refs.box.scrollTop -
          this.$refs.box.clientHeight <
        50
      ) {
        getSearch2(this.search, this.pages)
          .then(res => {
            if (res.data.data.length > 0) {
              this.pages += 1
              this.data.push(...res.data.data)
            }
          })
          .catch(err => {
            console.log(err)
            alert('网络请求失败，请稍后重试')
          })
      }
    },
    del () {
      this.search = ''
      if (this.data) {
        this.isShow = false
      }
    },
    // 点击搜索的时候，再次发送请求
    async clickData () {
      this.history = true
      this.keyVal = this.search
      await this.getSearch2(this.search, this.pages)
      if (this.data.length === 0) {
        this.isShow = false
        this.nodes = true
      } else {
        this.isShow = true
        this.nodes = false
      }
      this.searchLog()
    },
    async up (e) {
      this.isShow = true
      this.history = true
      if (e.keyCode === 13) {
        this.keyVal = e.target.value
        // this.keyVal.push(value)
        // console.log(this.keyVal)
        await this.getSearch2(this.search, this.pages)
        if (this.data.length === 0) {
          this.isShow = false
          this.nodes = true
        } else {
          this.isShow = true
          this.nodes = false
        }
        this.searchLog()
      }
    },
    getSearch () {
      getSearch()
        .then(res => {
          if (res.code === 1) {
            this.list = res.data
            this.clickList = this.list.slice(0, 12)
          } else {
            alert('网络有误')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络有误，请稍后重试')
        })
    },
    // 详细数据
    getSearch2 (word, page) {
      return getSearch2(word, page)
        .then(res => {
          if (res.code === 1) {
            this.data = res.data.data
            // console.log(res.data.data)
          } else {
            alert('网络错误')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络出错，请稍后重试')
        })
    },
    // 点击刷新按钮切换不同的热门搜索
    getClick () {
      this.clickList = this.list.slice(this.num, this.num + 12)
      this.num += 12
      if (this.num >= this.list.length) {
        this.num = 0
      }
    },
    clickDetail (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  },
  created () {
    this.getSearch()
  }
}
</script>
<style lang="scss">
.pate-search {
  height: 100%;
}
#search_ {
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

#search_,
#search_ .search_header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#search_ .search_header {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 16px 16px 0;
}

#search_ .search_header .search_ferame {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 288px;
  height: 44px;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 12px 0 rgba(0, 0, 0, 0.1);
}

#search_ .search_header .search_ferame input::-webkit-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame input:-moz-placeholder,
#search_ .search_header .search_ferame input::-moz-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame input:-ms-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame textarea::-webkit-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame textarea:-moz-placeholder,
#search_ .search_header .search_ferame textarea::-moz-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame textarea:-ms-input-placeholder {
  color: #ccc;
}

#search_ .search_header .search_ferame input {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: none;
  outline: none;
  border: 0;
  padding-top: 4px;
  width: 206px;
  height: 22px;
  line-height: normal;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}

#search_ .search_header .search_ferame .search_ferame_icon {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAATlBMVEUAAADc3NzNzc3Nzc3Nzc3R0dHNzc3Ozs7Nzc3Pz8/Nzc3MzMzNzc3V1dXNzc3Nzc3MzMzNzc3Ozs7Nzc3MzMzMzMzOzs7Nzc3Nzc3MzMwpeB3gAAAAGXRSTlMAB+u20iLdblxAQOOFDMuYv513VzwtH5Rn8Ph9LwAAAb5JREFUeNrs1Q2OgyAQBeAnCojVqvWnnftfdFMhIZutyiZAm2a+E7xk5s2AMcYYY4wxxhhjjLFvseh+UIJIqKHXC96gGQX9IsYGeU2KXlAT8mmutOPaIA9Z0oFSIgMj6JAwSO5BXtXWRnadNHVbkfdAYnefQEvAk9rnuCMln+FS44/6kiOFn8WtwAvFLcNEDFlixo5ZkGWQiBRuG1bsWiuXUyKN0mXocKBzKUok0dBGrDi0Cto0SMHd6hknZnfBkcDkeoFTriMT4lP2PhQ4Vdh7oWDF34gaAepUWzHaZiCIbciI2OzOawTRtkeIbKGNRBBJmwVxaT+N8HloxNXTU4tALT31iGvw3Qjvx4C41P9+o0lyKYTby0AyST1o0yFQR5tvDPER4/iIxfxpz45tGIZhIIqSIFJJSOrsv2gygcWG9i/+m+AAwxJ1RPyiiMMKcWwjLjDEVc4YahDjHWLQZYz8iMcP4xmIeBAzqgFEScKoixjFWWSrQvzEyXyZ+q2Mg6la+d4UryKkuFo1vM8p5pcuWY0U0+unborBRdwpxTxTmKKVYkffWIoVT8oChIisxz/HX+61doYkSZIkSZLafn8rXwYRltTWAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#search_ .search_header .search_ferame .search_clear_cion {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin: 12px 18px 12px 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAATlBMVEUAAADNzc3Nzc3Pz8/MzMzNzc3Nzc3MzMzMzMzNzc3Nzc3MzMzMzMzPz8/Ozs7MzMzb29vMzMz////w8PD6+vrOzs7y8vLn5+fl5eXo6Oj0tA+zAAAAEXRSTlMAxfoXoHFH8Ozfs6Z5QD4KB1znN2YAAAFBSURBVEjHnNPdbsMgDIZh2xDyn/RL2Lrd/42uqiK5C9SFvOePsCxD+dYwee47ka5nP4WVinMNC/4l3LgiugyCTDIsH+nMeBvP9sAjzEZj+NDiQ214ZxsU1GTpzaMof0utYxTGLnmXURyf3/aoyBu7qtxaQGVBrWtrcatLG1HdSEczLjQfmK9gPv4gLrU88YBT9xjveO3rN8YfnBqeq5az3R7tr/Z7e3TW4nL3ETfVareYuxROsWq1KWaiVZCMrVptMjZkzV3mrlrtnrvRCYY2LSbysLRl4YlhacuCqYehTYueOhjatOhIYGjTQv5Kr5MaAAAYBIIfHODfKw74jIAmTQ9YqJjapoHZqv6R9FWHzpMeg15SxIBkiARQpJdEX+yGjE4slsxdsEKARlCKIE7wUcAVkFlgXWKCBhSPRh7KKA4Of+C7Vk03XIMAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#search_ .search_header .search_fix_btn {
  width: 44px;
  height: 24px;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 10px 0 10px 11px;
  font-size: 14px;
  color: #666;
}
a {
  text-decoration: none;
  color: inherit;
}
.refresh {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAXVBMVEUAAAB1dXVmZmZmZmZnZ2dmZmZnZ2dmZmZnZ2dqamppaWlnZ2dmZmZmZmZpaWloaGhnZ2dnZ2dnZ2dnZ2dnZ2dpaWlmZmZvb29lZWVnZ2dnZ2dnZ2dmZmZpaWlmZmYZ+JDUAAAAHnRSTlMABvfls+nWm18gEce9cU0uF+6rlIZJHgvCqHxoUD+cjiP4AAAA6UlEQVRYw+3Wyw6CMBCFYVqgIPf7nb7/YxpKNErFzcyCkPMtZ/FHh0DrAAAAAMDttEHsS+nHQctZfTSufnObB1c3lfqLTFmyXaItScewhn0LZZ3lUZRndbnvg7yOSG0dPxSvgQj9baIiSjVPKtP1is9p4W2zWBDCShvBcR5s05AQ1oZn/TbhsYQH+0/3lRwFOawXh5verexh8/jd2WHXp1NWOHA3RTalPX92ds27zt5d9Y49vNDDYpRVb08Hcjg8+WzSwycfekNRVhGfHU2qSvLrHab/jv/rXlh+XrGufik8XGMBAAAA4G6ebC0hKTa9ORIAAAAASUVORK5CYII=);
}

.clear,
.refresh {
  /* background-repeat:no-repeat; */
  background-size: 100% 100%;
}

.clear {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAOVBMVEUAAABmZmZnZ2dnZ2doaGhnZ2dnZ2dmZmZoaGhnZ2dpaWlra2uAgIBmZmb///93d3fv7+/U1NSSkpJ7sC4kAAAADXRSTlMA4/OSF73VyGVZSSsGgaH6GgAAAMFJREFUWMPt1tsKwjAQRdHJrbf0mLb//7GOVESsoWBSsXjW0zxtQkhChIiIiOjbomusbVyUukaHOzdW7QY8hJplhydOqolQpve+N1Cx6oKNF+VN1SU3WuvXsdexkVqs1vw6eh2tlBkMdphBPmGwy/xW+LCtuIG6vAEliuF/D88pzYeEE5AOCUMxzPD2uJ3rgpzvrThH2Gpg2nan4m9Lq4Vl2nQXAK2U6JDVSZGAjCBlfMh0vZTqWosXtu2EiIiIiHKu8PUwR0U39xcAAAAASUVORK5CYII=);
}
.hot_search {
  padding: 16px 16px 24px;
}

.hot_search .hot_serch_header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.hot_search .hot_serch_header .search_title {
  font-size: 18px;
  color: #666;
  letter-spacing: 0;
  line-height: 44px;
  font-weight: 700;
}

.hot_search .hot_serch_header .search_icon {
  width: 44px;
  height: 44px;
}

.hot_search .hot_search_conent .search_label {
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom: 1;
  *display: inline;
  background: #efefef;
  border-radius: 2px;
  margin-right: 16px;
  margin-bottom: 8px;
  padding: 0 17px;
  height: 44px;
  line-height: 44px;
  color: #666;
  font-size: 14px;
}

.hot_search .hot_search_conent .search_label a {
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 44px;
  line-height: 44px;
}
#search_ .search_header .search_fix_btn,
#search_ .search_result {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

#search_ .search_result {
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-top: 24px;
  overflow: auto;
}
.view-buy .list_loaded .loadMoreWraper {
  width: 100%;
}
.loadMoreWraper {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: auto;
}
#search_ .search_list {
  margin: 0 16px 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#search_ .search_list .searchList {
  width: 343px;
  height: 96px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

#search_ .search_list .searchList .search_list_img {
  width: 72px;
  height: 96px;
}

#search_ .search_list .searchList .search_list_delete {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 8px;
  height: 96;
}

#search_ .search_list .searchList .search_list_delete .sarchList_title {
  height: 24px;
  font-size: 14px;
  color: #666;
  letter-spacing: 0;
  line-height: 24px;
}

#search_ .search_list .searchList .search_list_delete .sina_nickname {
  height: 24px;
  font-size: 12px;
  color: #999;
  letter-spacing: 0;
  line-height: 24px;
}
a {
  text-decoration: none;
}
#search_ .load_more {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

#search_ .load_more img {
  width: 36px;
  -webkit-animation: circle 1s linear 1s infinite;
  animation: circle 1s linear 1s infinite;
}
</style>
