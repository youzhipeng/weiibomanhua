<template>
  <div class="pate-home">
   <div class="com_nav border">
    <div class="nav_content">
     <div class="nav_left">
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/icon.b72a7a04.png" alt="" />
     </div>
      <span class="nav_title"></span>
     </div>
     <div class="nav_right">
      <div class="nav_switch_gender male_btn"></div>
      <div class="nav_serach" @click="$router.push({path:'/search'})"></div>
      <div to="/mine" class="nav_mine" @click="$router.push({path:'/my'})"></div>
     </div>
    <!---->
  </div>
  <!-- 身体 -->
    <myMask v-if="footLint.length === 0"></myMask>
   <div class="home_content_loaded scroll">
     <!-- 轮播图 -->
   <Swiper v-if="bannerList.length > 0">
     <SwiperS v-for="item in bannerList" :key="item.object_id"  >
        <img :src="item.image_ext_url" alt="" />
     </SwiperS>
   </Swiper>
    <!-- 导航 -->
    <Head></Head>
    <!--身体 -->
    <Foot :info="footLint"></Foot>
  </div>
  </div>
</template>
<script>
import { Swiper, SwiperS } from '@/components/Swiper'
import { getBanner } from '@/api/cartoon.js'
import Head from './components/head.vue'
import Foot from './components/foot.vue'
// 引入遮罩层
import myMask from '@/components/Mymask'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperS,
    Head,
    Foot,
    myMask
  },
  data () {
    return {
      bannerList: [],
      footLint: []
    }
  },
  created () {
    getBanner()
      .then(res => {
        if (res.code === 1) {
          //  this.bannerList=res.data[4]
          this.bannerList = res.data.h5_recommend_male_rotation_map
          this.footLint = res.data
        } else {
          alert('NO')
        }
      })
      .catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
  }
}
</script>
<style lang="scss">
@import "@/assets/style/mixins.scss";
.pate-home {
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  height: 100%;
  // 头部
  .com_nav {
    @include border-bottom;
    width: 100%;
    height: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav_content {
      width: 103px;
      height: 24px;
      .nav_left img {
        width: 87px;
        height: 24px;
        padding-left: 16px;
      }
    }
    .nav_right {
      width: 132px;
      height: 44px;
      display: flex;
      .nav_switch_gender {
        background-image: url(~@/assets/icon/1.png);
        background-size: 100%, 100%;
        width: 44px;
        height: 44px;
      }
      .nav_serach {
        background-image: url(~@/assets/icon/2.png);
        background-size: 100%, 100%;
        width: 44px;
        height: 44px;
      }
      .nav_mine {
        background-image: url(~@/assets/icon/3.png);
        background-size: 100%, 100%;
        width: 44px;
        height: 44px;
      }
    }
  }
}

</style>
