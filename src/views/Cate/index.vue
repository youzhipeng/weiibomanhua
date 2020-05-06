<template>
    <!-- <div class="pate-cate"> -->
  <div class="category">
   <div class="nav_layout">
    <div class="com_nav">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con" @click="bank"></div>
      </div>
      <div class="nav_middle">
       <span class="nav_title">分类</span>
      </div>
      <div class="nav_right"></div>
     </div>
     <!---->
    </div>
   </div>
   <div class="cate_list filter_list highList">
    <div class="cate_list_item filter_item "
    :class="{'filter_active_item_red': cateNum === item.cate_id}"
    @click="cateNum = item.cate_id, cateClick()"
     v-for="item in cateList.cate_list" :key="item.cate_id" >
      {{item.cate_cn_name}}
    </div>
   </div>
   <div class="showFilterLayout">
    <div class="show_filter">
     <div class="end_status_list filter_list">
      <div class="end_status_list_item filter_item"
      :class="{'filter_active_item_red':cateNum2 === item.end_status}"
      @click="cateNum2 = item.end_status,cateClick()"
      v-for="item in cateList.end_status_list" :key="item.end_status">
        {{item.end_status_name}}
      </div>
     </div>
     <div class="pay_status_list filter_list">
      <div class="pay_status_list_item filter_item "
      :class="{'filter_active_item_red': cateNum3 === item.comic_pay_status}"
      @click="cateNum3 = item.comic_pay_status,cateClick()"
      v-for="item in cateList.comic_pay_status_list" :key="item.comic_pay_status">
      {{item.comic_pay_status_name}}
      </div>
     </div>
    </div>
   </div>
   <!---->
   <Mymask v-if="cateList.length === 0"></Mymask>
   <div class="category_loaded pt60" >
    <div class="loadMoreWraper scroll" ref="cateScoll" @scroll="getMore($event)">
     <div class="loadMore">
      <div class="category_comic_container" >
       <div class="comic_cover_container" style="width: 175px;" v-for="item in cateData" :key="item.item" @click="detilClick(item.comic_id)">
        <div class="comic_cover" data-src="item.comic_hcover" lazy="loaded" style='width: 175px;height: 105px' :style="[{backgroundImage : 'url('+item.comic_hcover+')'}]"></div>
        <!---->
        <div class="comic_cover_info">
         <div class="comic_cover_titleBox">
          <!---->
          <div class="comic_cover_title" style="font-size: 14px;">
            {{item.comic_name}}
          </div>
          <!---->
         </div>
         <div class="comic_cover_desc" style="font-size: 12px;">
           {{item.comic_desc}}
         </div>
        </div>
       </div>
      </div>
      <div class="list_notdone">
       <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/circle.88c279ba.png" alt="" />
       <p>正在加载...</p>
      </div>
      <!---->
     </div>
    </div>
   </div>
   <!---->
  </div>
    <!-- </div> -->
</template>
<script>
import { getCate, getCateType } from '@/api/cartoon.js'
// 引入加载图片
import Mymask from '@/components/Mymask'
export default {
  name: 'Cate',
  components: {
    Mymask
  },
  data () {
    return {
      cateList: [],
      // id
      cateNum: 0,
      // 完结
      cateNum2: 0,
      // 免费
      cateNum3: 0,
      // 第几页
      pageNum4: 1,
      // 详细列表数据
      cateData: []
    }
  },
  methods: {
    detilClick (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },
    bank () {
      this.$router.back()
    },
    head () {
      return getCate()
        .then(res => {
          if (res.code === 1) {
            this.cateList = res.data
          } else {
            alert('网络有误')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络请求失败，请稍后重试')
        })
    },
    main (cateNum, cateNum2, cateNum3, pageNum4) {
      getCateType(cateNum, cateNum2, cateNum3, pageNum4)
        .then(res => {
          if (res.code === 1) {
            this.cateData = res.data.data
          } else {
            alert('网络有误')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络请求失败，请稍后重试')
        })
    },
    cateClick () {
      this.pageNum4 = 1
      this.main(this.cateNum, this.cateNum2, this.cateNum3, this.pageNum4)
    },
    getMore (e) {
      if (this.$refs.cateScoll.scrollHeight - this.$refs.cateScoll.scrollTop - this.$refs.cateScoll.clientHeight < 50) {
        getCateType(this.cateNum, this.cateNum2, this.cateNum3, this.pageNum4)
          .then((res) => {
            if (res.data.data.length > 0) {
              this.pageNum4 += 1
              this.cateData.push(...res.data.data)
            }
          })
      }

      // }
    }
  },
  async created () {
    await this.head()
    this.main()
    // this.dom = this.$refs.cateScoll.scrollTop
  }
}
</script>
<style lang="scss">
// .pate-cate {
//   height: 100%;
  .category {
    height: 100%;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    .highList {
      height: auto;
    }
  }
// }
.highList,
.category .lowList {
  -webkit-transition-property: height;
  transition-property: height;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.category,
.category .filter_list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: normal;
}
.category .filter_list .filter_item {
  height: 30px;
  width: 60px;
  line-height: 30px;
  font-size: 14px;
  color: #ccc;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.category .filter_list .filter_active_item_red {
  color: #fff;
  background: #f75d79;
  height: 24px;
  line-height: 24px;
  border: 1px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 54px;
  border-radius: 2px;
  margin-top: 3px;
}

.category .filter_list {
  padding: 0 7px 0 8px;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.category .showFilterLayout {
  position: relative;
}
.category .show_filter {
  height: 60px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.category .hide_filter,
.category .show_filter {
  position: absolute;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  overflow: hidden;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.category .pt60 {
  padding-top: 70px;
}
.loadMoreWraper {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: auto;
}
.category .category_loaded {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: auto;
  padding: 70px 8px 0 8px;
}

.category .category_loaded .comic_cover,
.category .category_loaded .comic_cover_container {
  width: 175.5 !important;
}
.category .category_comic_container {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.category .category_comic_container,
.category .filtered_list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.comic_cover_author,
.comic_cover_desc {
  color: #999;
  margin-bottom: 0.375rem;
}
// logd
.list_notdone {
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
  height: 36px;
  font-size: 12px;
  color: #ccc;
  margin-bottom: 6px;
}

.list_notdone img {
  width: 36px;
  -webkit-animation: circle 1s linear 1s infinite;
  animation: circle 1s linear 1s infinite;
}
</style>
