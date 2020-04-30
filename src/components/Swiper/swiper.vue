<template>
     <!-- 轮播图 -->
    <div class="swipeContainer" ref="swp">
     <div class="swipe_wrap">
      <div class="swiper-container">
       <div class="swiper-wrapper">
           <slot></slot>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
      </div>
     </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  mounted () {
    /*eslint-disable*/
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss">
// 轮播图
.home_content_loaded {
  flex: 1;
  overflow-y: auto;
  .swipeContainer {
    padding-top: 8px;
    background: #fff;
    .swipe_wrap {
    //   height: 214px;
      margin: 0 16px 0 16px;
      background: #fff;
      .swiper-container {
        // height: 222px;
        .swiper-wrapper {
          width: 100%;
          height: 214px;
          img {
            border-radius: 8px;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
