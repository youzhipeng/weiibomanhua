<template>
    <div class="pate-rank">
  <div class="rank_list">
   <div class="rank_list_nav">
    <div class="nav_layout">
     <div class="com_nav">
      <div class="nav_content">
       <div class="nav_left">
        <div class="back_btn l_con" @click="$router.back()"></div>
       </div>
       <div class="nav_middle">
        <span class="nav_title">排行榜</span>
       </div>
       <div class="nav_right"></div>
      </div>
      <!---->
     </div>
    </div>
    <div class="rank_list_title">
     <div class="list_title_item" :class="{'list_title_color':num === 0}"  @click="num = 0 ,getRank()">
       阅读榜
     </div>
     <div class="list_title_item" :class="{'list_title_color':num === 1}" @click="num = 1 ,getRank2()">
       新作榜
     </div>
     <div class="list_title_item" :class="{'list_title_color':num === 2}" @click="num = 2 ,getRank3()">
       综合榜
     </div>
    </div>
   </div>
   <Ranks :list = "list"></Ranks>
   <!---->
  </div>
    </div>
</template>
<script>
import { getRank, getRank2, getRank3 } from '@/api/cartoon.js'
import Ranks from './components/rank.vue'
export default {
  name: 'Rank',
  components: {
    Ranks
  },
  data () {
    return {
      list: [],
      num: 0
    }
  },
  methods: {
    getRank () {
      getRank()
        .then(res => {
          if (res.code === 1) {
            this.list = res.data.week
          } else {
            alert('网络请求失败')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络请求失败，请稍后重试')
        })
    },
    getRank2 () {
      getRank2()
      getRank2()
        .then(res => {
          if (res.code === 1) {
            this.list = res.data.week
          } else {
            alert('网络请求失败')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络请求失败，请稍后重试')
        })
    },
    getRank3 () {
      getRank3()
        .then(res => {
          if (res.code === 1) {
            this.list = res.data.week
          } else {
            alert('网络请求失败')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络请求失败，请稍后重试')
        })
    }
  },
  created () {
    this.getRank()
    // this.getRank2()
  }
}
</script>
<style lang="scss">
.pate-rank {
  height: 100%;
}
.rank_list {
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.rank_list,
.rank_list_title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.rank_list_title {
  margin-bottom: 8px;
  -webkit-box-shadow: inset 0 -1px 0 0 #efefef;
  box-shadow: inset 0 -1px 0 0 #efefef;
}

.rank_list_title .list_title_item {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 375px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  text-align: center;
  color: #b3b3b3;
}

.rank_list_title .list_title_color {
  color: #666;
  position: relative;
}

.rank_list_title .list_title_color:before {
  position: absolute;
  content: "";
  width: 44px;
  height: 2px;
  background: #f75d79;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
</style>
