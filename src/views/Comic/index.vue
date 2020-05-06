<template>
   <div class="pate-comic">
   <div class="end_list">
   <div class="nav_layout">
    <div class="com_nav">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con" @click="$router.back()"></div>
      </div>
      <div class="nav_middle">
       <span class="nav_title">完结</span>
      </div>
      <div class="nav_right"></div>
     </div>
     <!---->
    </div>
   </div>
   <Mymask v-if="list.length === 0 "></Mymask>
   <div class="end_list_box scroll">
    <div class="end_list_item" v-for="item in list" :key="item.info_id" @click="comicClick(item.object_id)">
     <div class="comic_cover_container" style="width: 100%;">
      <div class="comic_cover" data-src="item.extra.hcover" lazy="loaded" style="width:100%;height:211px" :style="[{backgroundImage:'url('+item.extra.hcover+')' }]"></div>
      <!---->
      <div class="comic_cover_info">
       <div class="comic_cover_titleBox">
        <div class="comic_cover_label">
         <div class="works_label label_bg_orange">
          <span class="works_label_text">{{item.cate_list[0].cate_cn_name}}</span>
         </div>
        </div>
        <div class="comic_cover_title" style="font-size: 16px;">
          {{item.extra.name}}
        </div>
        <!---->
       </div>
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
import Mymask from '@/components/Mymask'
import { getComic } from '@/api/cartoon.js'
export default {
  name: 'Comic',
  components: {
    Mymask
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    comicClick (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    },
    getComic () {
      getComic()
        .then(res => {
          if (res.code === 1) {
            this.list = res.data.ending_works_list
            console.log(res.data.ending_works_list)
          } else {
            alert('网络有误')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络有误，请稍后重试')
        })
    }
  },
  created () {
    this.getComic()
  }
}
</script>
<style lang="scss">
.pate-comic {
  height: 100%;
}
.end_list {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.nav_middle .nav_title {
  font-size: 18px;
}
.end_list_item .comic_cover_container .comic_cover_titleBox {
  margin-left: 8px;
}
.end_list_item .comic_cover_container {
  margin-bottom: 8px;
}
.label_bg_green,
.label_bg_orange {
  border-radius: 2px;
  width: 32px;
  height: 16px;
  line-height: 16px;
  border: 1px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 10px;
  color: #efefef;
  text-align: center;
}

.label_bg_orange {
  background: #fc7933;
}
.label_bg_green {
  background: #34b6a3;
}
.label_bg_blue,
.label_bg_yellow {
  border-radius: 2px;
  width: 32px;
  height: 16px;
  line-height: 16px;
  border: 1px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 10px;
  color: #efefef;
  text-align: center;
}

.label_bg_blue {
  background: #4a90e2;
}
.label_bg_black {
  background: #535353;
}

.label_bg_black,
.label_bg_pink {
  border-radius: 2px;
  width: 32px;
  height: 16px;
  line-height: 16px;
  border: 1px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 10pxm;
  color: #efefef;
  text-align: center;
}
.label_bg_yellow {
  background: #f2c900;
}

.label_bg_blue,
.label_bg_yellow {
  border-radius: 2px;
  width: 32px;
  height: 16px;
  line-height: 16px;
  border: 1px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 10pxm;
  color: #efefef;
  text-align: center;
}
.comic_cover_label {
  margin-right: 4px;
}
</style>
