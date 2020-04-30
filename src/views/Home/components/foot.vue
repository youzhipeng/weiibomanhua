<template>
<section>
     <!-- 精品佳作 -->
    <div class="recommend_block">
     <div class="home_recommend_header">
      <div  class="home_recommend_title">
        精品佳作
      </div>
      <div class="home_recommend_more">
        更多&gt;
      </div>
     </div>
     <div>
      <div class="home_recommend_comics threeClassic">
       <div class="home_recommend_comic" v-for="(item,index) in info.h5_recommend_male_fine_works" :key="item.info_id" v-show="index < 3">
        <div class="comic_cover_container" style="width: 100%;" >
         <div class="comic_cover" data-src="item.image_ext_url" lazy="loaded" :style="[{backgroundImage:'url('+item.image_ext_url+')' }]"></div>
         <!---->
         <div class="comic_cover_info">
          <div class="comic_cover_titleBox">
           <!---->
           <div class="comic_cover_title" style="font-size: 14px;">
             {{item.extra.name}}
           </div>
           <!---->
          </div>
          <div class="comic_cover_desc" style="font-size: 12px;">
            {{item.extra.watching_focus}}
          </div>
         </div>
        </div>
       </div>
      </div>
      <!---->
     </div>
    </div>
    <!-- 人气作品 -->
   <div class="recommend_block">
     <div class="home_recommend_header">
      <div class="home_recommend_title">
     人气作品
      </div>
     <div class="home_recommend_more">
     更多&gt;
    </div>
     </div>
    <div>
    <div class="home_recommend_comics fourClassic">
     <div class="home_recommend_comic" v-for="(item,index) in info.h5_recommend_male_popular_works" :key="item.info_id" v-show="index < 4">
      <div class="comic_cover_container" style="width: 100%;">
       <div class="comic_cover" data-src="item.image_ext_url" lazy="loaded" :style="[{backgroundImage:'url('+item.image_ext_url+')' }]"></div>
       <!---->
       <div class="comic_cover_info">
        <div class="comic_cover_titleBox">
         <!---->
         <div class="comic_cover_title" style="font-size: 14px;">
           {{item.extra.name}}
         </div>
         <!---->
        </div>
        <div class="comic_cover_desc" style="font-size: 12px;">
          {{item.extra.watching_focus}}
        </div>
       </div>
      </div>
     </div>
    </div>
    <!---->
    </div>
   </div>
   <!-- 最新上架 -->
  <div class="recommend_block">
   <div class="home_recommend_header">
    <div class="home_recommend_title">
     最新上架
    </div>
    <div class="home_recommend_more">
     更多&gt;
    </div>
   </div>
   <div>
    <!---->
    <div class="home_recommend_comics threeColumn">
     <div class="home_recommend_comic" v-for="(item,index) in info.h5_recommend_male_new_arrival" :key="item.info_id" v-show="index < 3">
      <div class="comic_horizontal_container">
       <div class="comic_cover comice_horizontal_cover" data-src="item.image_ext_url" lazy="loaded" :style="[{backgroundImage:'url('+item.image_ext_url+')' }]"></div>
       <div class="comic_cover_horizontal_info">
        <div class="comic_cover_horizontal_title" style="font-size: 16px;">
         {{item.extra.name}}
        </div>
        <div class="comic_cover_horizontal_author" style="font-size: 12px;">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII=" alt="" />
         <i style="padding:0 3px" v-for="list in item.cate_list" :key="list.cate_id"> {{list.cate_cn_name}}</i>
        </div>
        <div class="comic_cover_horizontal_author" style="font-size: 12px;">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC" alt="" /> -冬漫社-
        </div>
       </div>
       <!---->
      </div>
     </div>
    </div>
   </div>
  </div>
  <!-- 热门连载 -->
  <div class="recommend_block">
   <div class="home_recommend_header">
    <div class="home_recommend_title">
     热门连载
    </div>
    <div class="home_recommend_more">
     更多&gt;
    </div>
   </div>
    <div class="home_recommend_comics fourClassic">
     <div class="home_recommend_comic" v-for="(item,index) in info.h5_recommend_male_hot_serial" :key="item.info_id" v-show="index < 2">
      <div class="comic_cover_container" style="width: 100%;">
       <div class="comic_cover" data-src="item.image_ext_url" lazy="loaded" :style="[{backgroundImage : 'url('+item.image_ext_url+')'}]"></div>
       <!---->
       <div class="comic_cover_info">
        <div class="comic_cover_titleBox">
         <!---->
         <div class="comic_cover_title" style="font-size: 14px;">
           {{item.extra.name}}
         </div>
         <!---->
        </div>
        <div class="comic_cover_desc" style="font-size: 12px;">
          <!-- {{irem.extra.watching_focus}} -->
               {{item.extra.watching_focus}}
        </div>
       </div>
      </div>
     </div>
    </div>
    <!---->
  </div>
  <!-- 小编推荐 -->
  <div class="recommend_block">
   <div class="home_recommend_header">
    <div class="home_recommend_title">
     小编推荐
    </div>
    <div class="home_recommend_more">
     更多&gt;
    </div>
   </div>
   <div>
    <div class="home_recommend_comics threeClassic">
     <div class="home_recommend_comic" v-for="(item,index) in info.h5_recommend_male_xiaobian_recommend" :key="item.info_id" v-show="index < 3">
      <div class="comic_cover_container" style="width: 100%;">
       <div class="comic_cover" data-src="item.image_ext_url" lazy="loaded" :style="[{backgroundImage : 'url('+item.image_ext_url+')'}]"></div>
       <!---->
       <div class="comic_cover_info">
        <div class="comic_cover_titleBox">
         <!---->
         <div class="comic_cover_title" style="font-size: 14px;">
           {{item.extra.name}}
         </div>
         <!---->
        </div>
        <div class="comic_cover_desc" style="font-size: 12px;">
          {{item.extra.watching_focus}}
        </div>
       </div>
      </div>
     </div>
    </div>
    <!---->
   </div>
  </div>
  <!-- 本周推荐 -->
  <div class="recommend_block">
   <div class="home_recommend_header">
    <div class="home_recommend_title">
     本周推荐
    </div>
    <div class="home_recommend_more">
     更多&gt;
    </div>
   </div>
   <div>
    <div class="home_recommend_comics threeRow">
     <div class="home_recommend_comic" v-for="(item,index) in info.h5_recommend_male_week_recommend" :key="item.info_id" v-show="index < 3">
      <div class="comic_cover_container" style="width: 100%;">
       <div class="comic_cover" data-src="item.image_ext_url" lazy="loaded" :style="[{backgroundImage : 'url('+item.image_ext_url+')'}]"></div>
       <!---->
       <div class="comic_cover_info">
        <div class="comic_cover_titleBox">
         <!---->
         <div class="comic_cover_title" style="font-size: 14px;">
           {{item.extra.name}}
         </div>
         <!---->
        </div>
        <div class="comic_cover_desc" style="font-size: 12px;">
     {{item.extra.watching_focus}}
        </div>
       </div>
      </div>
     </div>
    </div>
    <!---->
   </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      list: []
    }
  },
  props: {
    info: null
  }
}
</script>

<style lang="scss">
// 精品佳作
.home_recommend_comic,
.home_recommend_header {
  background: #fff;
}
.recommend_block {
  border-radius: 8px;
  .home_recommend_header {
    padding: 0 16px;
    height: 44px;
    margin-top: 8px;
    line-height: 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .home_recommend_header .home_recommend_title {
    font-size: 18px;
    color: #666;
    padding-left: 26px;
    position: relative;
  }

  .home_recommend_header .home_recommend_title:before {
    position: absolute;
    top: 11px;
    left: 0;
    content: "";
    width: 22px;
    height: 22px;
    background: url(~@/assets/icon/5.png);
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .home_recommend_header .home_recommend_more {
    font-size: 12px;
    color: #fff;
    width: 42px;
    height: 20px;
    text-align: center;
    line-height: 22px;
    background: #4a90e2;
    border-radius: 10px;
  }
}
.home_recommend_comics {
  padding: 0 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  height: 100%;
}

.home_recommend_comics .home_recommend_comic {
  margin-bottom: 8px;
}
.home_recommend_comics.threeClassic .home_recommend_comic {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 40%;
  flex: 1 0 40%;
  overflow: hidden;
  max-width: 167px;
}

.home_recommend_comics.threeClassic .home_recommend_comic .comic_cover {
  height: 90px;
}

.home_recommend_comics.threeClassic .home_recommend_comic:first-child {
  max-width: 100%;
  width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
}

.home_recommend_comics.threeClassic
  .home_recommend_comic:first-child
  .comic_cover {
  height: 215px;
}

.home_recommend_comics.threeClassic .home_recommend_comic:nth-child(2) {
  margin-right: 8px;
}

.home_recommend_comics.fourClassic .home_recommend_comic {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 40%;
  flex: 1 0 40%;
  overflow: hidden;
  max-width: 167.5px;
}

.home_recommend_comics.fourClassic .home_recommend_comic .comic_cover {
  height: 105px;
}

.home_recommend_comics.fourClassic .home_recommend_comic:nth-child(odd) {
  margin-right: 8px;
}

.home_recommend_comics.threeRow {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.home_recommend_comics.threeRow .home_recommend_comic {
  width: 109px;
  margin-left: 8px;
}

.home_recommend_comics.threeRow .home_recommend_comic .comic_cover {
  height: 150px;
}

.home_recommend_comics.threeRow .home_recommend_comic:first-child {
  margin-left: 0;
}

.home_recommend_comics.threeRow .comic_cover_info {
  text-align: center;
}

.home_recommend_comics.threeColumn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 0;
}

.home_recommend_comics.threeColumn .home_recommend_comic {
  margin-bottom: 16px;
  height: 90px;
  width: 100%;
}

.home_recommend_comics.threeColumn .home_recommend_comic .comic_cover {
  width: 160px !important;
  height: 90px;
}

.home_recommend_comics.threeColumn .home_recommend_comic:first-child {
  margin-left: 0;
}
.comic_cover {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}

// .comic_cover[lazy="error"],
// .comic_cover[lazy="loading"] {
//   background-color: #f7f7ff;
//   background-image: url(~@/assets/icon/16.jpg) ;
//   background-size: 44px 32px;
//   background-position: 50%;
// }
.comic_cover_author,
.comic_cover_desc {
  color: #999;
  margin: 3px 0 6px 0;
}
.comic_cover_container .comic_cover {
  border-radius: 8px;
}

.comic_cover_info {
  margin: 0 8px 0 0;
}

.comic_cover_titleBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 8px 0 0 0;
}
//  最新上架
.comic_horizontal_container {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  padding: 0 16px 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
// 小图标
.comic_cover_horizontal_info .comic_cover_horizontal_author {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 16px;
}
.comic_cover_horizontal_info .comic_cover_horizontal_title {
  margin-top: 4px;
  color: #333;
  line-height: 24px;
  padding-bottom: 8px;
}
.comic_cover_horizontal_info .comic_cover_horizontal_author img {
  float: left;
  width: 16px;
  height: 16px;
}
.comic_cover_desc,
.comic_cover_horizontal_info .comic_cover_horizontal_author,
.comic_cover_horizontal_info .comic_cover_horizontal_title,
.comic_cover_title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 1px;
}
.comic_horizontal_container .comice_horizontal_cover {
  margin-right: 0.25rem;
  border-radius: 0.25rem;
}
.comic_cover_horizontal_info .comic_cover_horizontal_author:nth-child(2) {
  padding-bottom: 8px;
}
</style>
