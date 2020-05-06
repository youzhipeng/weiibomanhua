<template>
    <div class="pate-daypub">
       <myMask v-if="daypubList.length === 0"></myMask>
  <div class="release" >
   <div class="nav_layout">
    <div class="com_nav">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con" @click="path"></div>
      </div>
      <div class="nav_middle">
       <span class="nav_title">放送表</span>
      </div>
      <div class="nav_right"></div>
     </div>
     <!---->
    </div>
   </div>
   <div class="release_date" >
    <p class="release_date_day"
    :class="{'active' : index === list}"
    @click="headClick(item,index)"
    v-for="(item,index) in daypubList" :key="item.pub_day">{{item.pub_name}} </p>
   </div>
   <!---->
   <div class="load_state">
    <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/play-loading.83412bf6.png" alt="" />
    <p>今日的漫画还在绘制中</p>
    <!---->
   </div>
  </div>
    </div>
</template>
<script>
// 引入加载图片
import myMask from '@/components/Mymask'
// 引入数据
import { getDaypub } from '@/api/cartoon.js'
export default {
  name: 'Daypub',
  components: {
    myMask
  },
  data () {
    return {
      daypubList: [],
      list: 0
    }
  },
  created () {
    getDaypub()
      .then((res) => {
        this.daypubList = res.tab_list
        console.log(res.pub_day)
      })
  },
  methods: {
    headClick (item, index) {
      this.list = index
    },
    path () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
.pate-daypub{
    height: 100%;
}
.release {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.release .release_date {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-shadow: inset 0 -1px 0 0 #efefef;
  box-shadow: inset 0 -1px 0 0 #efefef;
  margin-bottom: 8px;
}

.release .release_date,
.release .release_date_day {
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.release .release_date_day {
  font-size: 14px;
  color: #b3b3b3;
  position: relative;
}

.release .release_date_day.active {
  color: #333;
}

.release .release_date_day.active:before {
  position: absolute;
  width: 100%;
  height: 2px;
  content: "";
  background: #f75d79;
  bottom: 0;
  left: 0;
}

.release .release_loaded {
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
  padding: 0 16px;
}

.release .release_loaded .comic_cover {
  border-radius: 8px;
}

.release .release_loaded .comic_cover_info {
  margin: 8px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.release .release_loaded .comic_cover_info .comic_cover_titleBox {
  margin: 0;
}

.release .release_loaded .comic_cover_info .comic_cover_desc {
  text-align: right;
  line-height: 22px;
}

.release .release_list_done {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 60px;
}

.release .release_list_done img {
  width: 95px;
}

.release .release_list_done p {
  font-size: 12px;
  color: #999;
}

.release .load_state {
  color: #ccc;
  font-size: 12px;
}
.load_state {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.load_state img {
    width: 184px;
    height: 184px
}

.load_state p {
    margin-bottom: 22px;
    color: #999;
    font-size: 14px
}
</style>
