 <template>
  <div class="page-detail">
  <div class="wrap">
      <Mymask v-if="isList"></Mymask>
   <div class="comic" v-if="list.comic">
    <div class="nav_layout comic_nav">
     <div class="com_nav gray_nav">
      <div class="nav_content">
       <div class="nav_left">
        <div class="back_btn l_con" @click="$router.back()"></div>
       </div>
       <div class="nav_middle">
        <span class="nav_title">{{list.comic.name}}</span>
       </div>
       <div class="nav_right">
        <div>
         <div class="com_fav">
          <span class="add_fav_btn"></span>
         </div>
         <!---->
        </div>
        <div class="share_btn comic_share"></div>
       </div>
      </div>
      <!---->
     </div>
    </div>
    <div class="comic_content">
     <div>
      <!---->
      <div class="comic_info h_comic_info">
       <div class="comic_cover" lazy="loaded" :style="`background-image: url(https://img.manhua.weibo.com/${list.comic.hcover});`"></div>
       <div class="mask"></div>
       <div class="comic_article ">
        <div class="comic_name">
         <span class="name">{{list.comic.name}}</span>
         <span class="pay_icon label_red_pay"></span>
        </div>
        <div class="comic_tags_hot">
         <div class="comic_tags">
          <span class="tags" v-for="(item,index) in list.comic_cate" :key="item.cate_id" :class="index + 1 === list.wbcomic_cate.length ? 'tags_last' : ''"> {{item.cate_name}} </span>
         </div>
         <div class="comic_hot">
          <span class="hot_icon"></span>
          <span>热度值：</span>
          <span class="hot_num">{{list.comic.comic_hot_value_text}}</span>
         </div>
        </div>
       </div>
       <div class="comic_irregular_bg"></div>
      </div>
     </div>
     <div class="last_time_chapter">
      <span class="looking_chapter" style="font-size:16px">暂未阅读</span>
      <div class="button_header" fontsize="24">
       <button type="button" class="comic_button" style="width: 88px; height: 36px; font-size: 14px;">开始阅读</button>
      </div>
     </div>
     <div class="comic_intro">
      <div class="menu_nav">
       <div class="menu_detail " :class="isShow === true ? 'cur_menu' :''" @click="isShow =true">
        详情
       </div>
       <div class="menu_catelog " :class="isShow === false ? 'cur_menu' :''" @click="isShow = false">
        目录
       </div>
       <!---->
      </div>
     </div>
     <div class="comic_bottom_content" v-show="isShow">
      <div class="detail_wrap">
       <div class="details">
        <div class="bold">
         简介
        </div> {{list.comic.description}}
       </div>
       <div class="author">
        <span class="bold">作者：{{list.comic.sina_nickname}}</span>
        <div class="author_item">
         <div class="avatar component_avatar author_avatar">
          <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png" />
          <img src="http://tvax4.sinaimg.cn/crop.23.26.146.146.180/006YV3nyly8fuxgfshzivj305k05kwep.jpg" />
         </div>
         <span class="author_name">-冬漫社-</span>
        </div>
       </div>
      </div>
     </div>
     <div class="catalog_wrap"  ref="mulu" v-show="!isShow">
      <div>
       <!---->
       <ul class="catalog_list row_catalog_list">
        <li chapter_id="407097" class="catalog_ceil" v-for="item in list.chapter_list" :key="item.chapter_id">
         <div class="chapter_name lock">
          <div class="name-box">
           <p class="name">{{item.chapter_name}}</p>
          </div>
          <span></span>
         </div></li>
       </ul>
       <!---->
       <!---->
      </div>
     </div>
     <div class="comment_box" v-show="isShow">
      <div class="comment-area">
       <div class="comment-title">
         热门评论
       </div>
       <div class="comment-list">
        <div class="comment-item">
         <div class="avatar-outer">
          <div class="avatar component_avatar">
           <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png" />
           <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/W9cJDBeSoib2IpQ6ibrwo3bfCKYY5OlaZ5UWibvJh5ic0X96DaDVuHUPmGK0glhytVyn7dicFAkG9WBKo8H0YlfmPmQ/132" />
          </div>
         </div>
         <div class="comment-item-content">
          <div class="comment-nickname comment-line content-line">
           <div class="bold">
            蜡笔小新5710010054
           </div>
           <div class="comment-time comment-line">
            2019-04-07
           </div>
          </div>
          <div class="comment-content comment-line content-line">
            无缘无故咋亲上你了？哈哈哈，天上情侣，早点成对，早点成对
          </div>
          <div class="reply-list-box">
           <div class="reply-list">
            <div class="reply-item-box comment-line content-line">
             <span class="rep-user">半仙家的柠檬茶:</span>
             <span class="rep-content">女主她妈是沐清婉，他爸是东方战，他是全世界最有钱的人，请看后续，你就会发现我说的是真的</span>
            </div>
            <div class="reply-item-box comment-line content-line">
             <span class="rep-user">孤独的少年666:</span>
             <span class="rep-content">秀………儿</span>
            </div>
            <div class="reply-item-box comment-line content-line">
             <span class="rep-user">AA555154995697:</span>
             <span class="rep-content">一会儿容轩来了</span>
            </div>
           </div>
           <div class="showMore comment-line">
             共3条回复
           </div>
          </div>
         </div>
        </div>
        <div class="comment-item">
         <div class="avatar-outer">
          <div class="avatar component_avatar">
           <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png" />
           <img src="https://img.manhua.weibo.com/wbcomic/user/2020/202003/202026/1585200356fSZsheZU.jpg" />
          </div>
         </div>
         <div class="comment-item-content">
          <div class="comment-nickname comment-line content-line">
           <div class="bold">
            柠檬茶101579851
           </div>
           <div class="comment-time comment-line">
            2020-04-25
           </div>
          </div>
          <div class="comment-content comment-line content-line">
          </div>
          <!---->
         </div>
        </div>
        <div class="comment-item">
         <div class="avatar-outer">
          <div class="avatar component_avatar">
           <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png" />
           <img src="https://img.manhua.weibo.com/wbcomic/user/2020/202004/202019/1587272008t3EEaIP5.jpg" />
          </div>
         </div>
         <div class="comment-item-content">
          <div class="comment-nickname comment-line content-line">
           <div class="bold">
            多宝喵C院K系37169
           </div>
           <div class="comment-time comment-line">
            2020-04-23
           </div>
          </div>
          <div class="comment-content comment-line content-line">
            女主的妹妹好丑啊！一身绿色的头发。果然配当绿茶
          </div>
          <div class="reply-list-box">
           <div class="reply-list">
            <div class="reply-item-box comment-line content-line">
             <span class="rep-user">令狐夜云:</span>
             <span class="rep-content">你说的不对，是绿茶味的白莲</span>
            </div>
            <div class="reply-item-box comment-line content-line">
             <span class="rep-user">甜甜的初恋:</span>
             <span class="rep-content">没错</span>
            </div>
            <div class="reply-item-box comment-line content-line">
             <span class="rep-user">多宝喵J院B系36810:</span>
             <span class="rep-content">我知道了知道了</span>
            </div>
           </div>
           <div class="showMore comment-line">
             共3条回复
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="comment_more">
        <button class="moreComment">更多精彩评论</button>
       </div>
       <!---->
      </div>
      <!---->
     </div>
    </div>
    <!---->
   </div>
   <!---->
   <!---->
  </div>
    </div>
</template>

<script>
import { getDetil } from '@/api/cartoon.js'
// 引入图片加载
import Mymask from '@/components/Mymask'
export default {
  name: 'Detail',
  components: {
    Mymask
  },
  data () {
    return {
      detailId: this.$route.query.id,
      list: {},
      // 控制目录
      isShow: true,
      // 控制图片加载
      isList: true
    }
  },
  methods: {
    getDetil (id) {
      getDetil(id)
        .then((res) => {
          if (res.code === 1) {
            this.list = res.data
            this.isList = false
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
    this.getDetil(this.detailId)
  }
}
</script>

<style lang='scss'>
.page-detail {
  width: 100%;
}
.wrap {
  height: 100%;
}
.gray_bg {
  background: #f7f7f7;
}

.comic {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.comic .comic_content {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.comic .comic_bottom_content {
  padding: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #f8f8f8;
}

.comic .play_recommend,
.comic .play_recommend .home_recommend_comics {
  background: #f8f8f8;
}

.comic .play_recommend .home_recommend_comic {
  margin-bottom: 8px;
}

.comic .paddingBottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.comic .play_recommend_title {
  padding-left: 16px;
  font-size: 18px;
  color: #666;
  line-height: 44px;
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
}

.comic .titleIcon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(~@/assets/icon/1.png);
  background-size: cover;
  border-radius: 12px;
}

.comic .bold {
  font-weight: 500;
}

.comic .comment-area {
  background: #fff;
}

.comic .close_banner {
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.comic_nav .nav_content {
  overflow: hidden;
}
.account_nav,
.com-mine .nav_layout,
.view_login .nav_layout,
[isApp] .nav_layout {
  height: 0 !important;
}

.view_account .nav_layout,
.view_account .nav_layout .com_nav,
.view_login .com_nav {
  background: transparent !important;
}

.comic_play .nav_layout .com_nav {
  background: #333;
}

.rank_list_nav {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.about {
  opacity: 0.95;
  background: #2f2f2f;
}

.nav_layout {
  width: 100%;
  height: 44px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  z-index: 1000;
}

.nav_layout .com_nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
}

.comic_nav .nav_content .nav_middle {
  line-height: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: hidden;
  min-width: 0;
}

.comic_nav .nav_content .nav_middle .nav_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}
.nav_left {
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
}
.nav_right {
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
  min-width: 44px;
  height: 44px;
}

.nav_right div {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.com_fav {
  width: 60px;
  height: 24px;
}

.com_fav span {
  display: block;
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/icon/17.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.com_fav span.remove_fav_btn {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABICAMAAABoQy9iAAAAVFBMVEUAAADNzc3Nzc3MzMzNzc3Nzc3Ozs7Pz8/Nzc3MzMz////5+fns7Oz19fXj4+PT09PQ0NDb29vv7+/e3t7p6en8/PzX19fg4ODy8vLV1dXm5ub39/dONxCEAAAACXRSTlMA8+7YwJpDJT1W3Y10AAADBUlEQVRo3u2b23KDIBBAbdO0XbyAKBf1//+zAmkiW6CZaahhxvMUGDOeLLeVYGV5P59e4Ol5OZ3fq28+3qAY3j6c8+crFMTrp41zUc6rtYl1QX3D8baOQSiO9+oMxXGuTlAcp6qA+RnzUkGBHNIRDulDOsEhnUmagYeScAe0k3AnGaR7LZhnQ4jg4MNn8JE1IRzupvotAGkmQGiCbj+uFRo5r5cw2MLEehV9lPRA0nTBLwxwQ5gycl5ZJsA/rdlNGpq1dtNBlCmCx7QQU9mjTkTEftJglLhXGsGHcWIYcPiHR/XpIY4OS/dbIeXijumIQaFv6YdIp2mC0i5oCzjq9fMca8EWOn7FVNxKEyByS1MhZgaWORxoF9nW/L4IPVjyS2uShCNrDfmkpVKKZpA2ZJJ2auqh0qwd4QKV35iBKOQV9l/STbvFjrQt49WZEP1Diq2X14DILo0x0hBCuwXxGaVZdImjthHE9ITSk52sw3BnnVm6bUIsCen0Cjc665zSUVLSKpm2zXapfzppozVCynqA/aV7H20i3SO21gNklp5pDHZLiO+AAkaF53Waa/Zw/FF6JkGmJ5WmTyDNRg9BLK1fyzbXi6Vj+0pjJHEIBhE6NI/TnCsihkXzC61Ts96CJmr2n9K17mg40HJKNLTNRGEvadN5g4HmbrVu400x7iYdulfjQuz2jRYWm2umvaSpCWYoHWquz9wLDWdMLewl3Ru/wE5M7UyV/SwBYZug2026w/safe2lnR0xNOznOihYRunRDqoY2n9ynjgxCInWaaF+BLqBjNKd2ywMQq0S9ZTxA6ASxNAOKOGgOaUHF6o6hNMBC1MtseAY0ku9mOkm0PyXTYfpT9JQkzQzGEZBHMsQT+X4rSjzSveCpNCXq1ypVhBAXuyaa6A15JUG2rQx74UP20dsbZWj2oK5fFB8D96mjkLT0g+CtXPyRpJfEyTWafgTFfwbEzyG48/PKIf0IZ3gkC5XusgjbkUeJizy2GaRB2SLPIpc5qHvIo/Xl/kiQ3mvjHwBkrHhnv1ldTUAAAAASUVORK5CYII=);
}

.com_fav_no_text {
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
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.com_fav_no_text img {
  width: 24px;
}

.com_fav_no_text span {
  font-size: 12px;
  color: #666;
  margin-top: 7px;
}
.share_btn {
  width: 44px;
  height: 44px;
  background-image: url(~@/assets/icon/18.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.gray_nav div,
.gray_nav span {
  color: #999;
}
.comic_info {
    position: relative;
    color: #fff;
    height:210px;
}

.comic_info .comic_name {
    font-size: 20px;
    line-height: 26px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.comic_info .comic_name .name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.comic_info .comic_article {
    position: absolute;
    bottom: 40px;
    width: 100%;
    z-index: 2
}

.comic_info .comic_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 16px
}

.comic_info .tags:after {
    content: "|";
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom:1;*display: inline;
    vertical-align: top;
    height: 16px;
    margin: 0;
    font-size: 12px;
    font-family: serif
}

.comic_info .tags_last:after {
    content: ""
}

.comic_info .comic_irregular_bg {
    background-image: url(~@/assets/icon/19.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 20px;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    z-index: 3;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg)
}

.v_comic_info .comic_article .comic_cover {
    height: 132px
}

.v_comic_info .cover {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 96px;
    height: 132px;
    margin-right: 16px
}

.v_comic_info .article {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden
}

.v_comic_info .comic_hot,.v_comic_info .comic_tags {
    font-size: 16px;
    line-height: 18px;
    margin-top: 8px
}

.h_comic_info .comic_cover {
    height: 210px
}

.h_comic_info .comic_name {
    padding: 0 16px
}

.h_comic_info .mask {
    bottom: 0;
    position: absolute;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100px;
    background: -webkit-gradient(linear,0 0,0 bottom,from(transparent),to(rgba(0,0,0,.6)))
}

.h_comic_info .comic_article {
    padding: 16px 0 0
}

.h_comic_info .comic_tags_hot {
    padding: 0 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.h_comic_info .comic_hot {
    text-align: right
}

.h_comic_info .comic_hot,.h_comic_info .comic_tags {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-size: 16px;
    line-height: 18px;
    margin-top: 8px
}
.last_time_chapter {
    background: #fff;
    color: #666;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px 16px 4px 16px
}
.comic_intro {
    background: #f7f7f7
}

.looking_chapter {
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.menu_nav {
    font-size: 18px;
    color: #ccc;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 4px 16px;
    height: 44px;
    background: #fff
}
.menu_catelog, .menu_detail {
    width: 68px;
}
.cur_menu {
    color: #666;
}
.detail_wrap {
    background: #fff;
    padding: 11px 8px;
    font-size: 14px;
    color: #666;
    line-height: 24px;
    border-radius: 4px
}
.catalog_wrap {
    background: #f7f7f7;
    padding: 10px 8px;
}
ol,ul {
    list-style: none;
}
.catalog_list {
    color: #666;
    background: #f7f7f7;
}
.catalog_ceil {
    background: #fff;
    border-radius: 4px;
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
    margin-bottom: 6px;
    text-indent: 0
}

.row_catalog_list .catalog_ceil {
    height: 48px;
    padding: 0 8px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}
.chapter_name {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    width: 96%;
}
.chapter_name .name-box {
    text-align: left;
    overflow: hidden
}

.chapter_name .name-box .wait-text {
    font-size: 12px;
    line-height: 12px;
    color: #f75d79;
    padding-top: 4px
}

.squared_catalog_list .chapter_name {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.row_catalog_list .chapter_name,.squared_catalog_list .chapter_name {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.row_catalog_list .chapter_name {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.name{
  font-size: 16px
}
.comment-area .comment-title {
    padding-left: 8px;
    line-height: 44px;
    font-size: 18px;
    color: #666;
    background: #fff
}
.comment-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 8px 16px 0
}

.comment-item .avatar-outer {
    width: 32px;
    height: 32px;
    border: 1px solid #fff;
    border-radius: 50%;
    overflow: hidden
}

.comment-item .comment-item-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden
}

.comment-item .comment-item-content .comment-line {
    padding: 0 8px
}

.comment-item .comment-item-content .content-line {
    margin-top: 4px;
    line-height: 24px;
    font-size: 14px
}

.comment-item .comment-item-content .comment-nickname {
    margin-bottom: 5px;
    color: #666;
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
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.comment-item .comment-item-content .comment-nickname .bold {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 1px
}

.comment-item .comment-item-content .comment-content {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 16px;
    color: #666
}

.comment-item .comment-item-content .showMore {
    margin: 7px 0 9px 0;
    line-height: 12px;
    font-size: 14px;
    color: #666
}

.comment-item .comment-item-content .comment-time {
    line-height: 24px;
    font-size: 12px;
    color: #ccc;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.comment-item .comment-item-content .reply-list-box {
    background: #efefef;
    border-radius: 4px;
    overflow: hidden
}

.comment-item .comment-item-content .reply-list-box .rep-user {
    margin-right: 8px;
    color: #634fa4
}

.comment-item .comment-item-content .reply-list-box .rep-content {
    word-break: break-all;
    color: #2a2a2a
}
.comment-area .comment_more {
    padding: 16px 0;
    padding-bottom: 9px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.comment-area .moreComment {
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 22px;
    text-align: center;
    outline: none;
    height: 36px;
    width: 116px;
    font-size: 14px;
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
    color: #666
}
.hot_icon:before {
    content: " ";
    background-image: url(~@/assets/icon/20.png);
    width: 8px;
    height: 10px;
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom:1;*display: inline;
    margin-right: 6px;
    margin-bottom: 2px
}
.hot_icon:before,.label_red_pay {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.label_red_pay {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAMAAACVQ462AAAAh1BMVEX3XXr3Xnn/ZID3XnoAAAD3XXn////4do73Yn3+7PD5ip795ur7t8T6nq/6mKr80tr6q7r5k6b6pLP++vv+9/j+8/X7wcz7u8f3ZoD5j6L5hpv3aoT+/f396u38ztf7sb74gpj8ytP4fJP4cYn3ZH/94OX6p7f91978xM/3bYb94+j93OL5h5wo6z5YAAAABXRSTlPmphztAPMTpaIAAAF9SURBVEjHzdXrboMgAIZh2u2jUBRxQD1rPfS07f6vb2KyzZjM2pkse38Qfj0iUSDP2w3BLyOb7TPZPmFFT1uywao2hGBVhGBl/xFIGDCUJR2+ChvgmCwB2vwMDO3pDq5d2GfrMAy4m2V3gEpnE0CKvtwKYbUQBT3OA8xeMQGGeAVEJ6C9B0h6nAKs4JznhnOj+8kdoCsoYOh3DGioTN91lKZ1kfbFs8CBUkD6Qx5Vvg/Az5WqaK3Um1WubAZIqFvBdBMPh4Ox/SDcUNL2ZyCz5YsDGjYGgFtN9xg2kWVKs5+BnYgdkJnrCIj9UvM9+qoA0hT+3B60cAAkffkG2KnkkfdVcudLHABEeTN6hZi+Bp+ZaBHAxCsbAxJAMqxdLANwLHZT4FI+AoBhAjCjHgIwAjqeAFXepB1wqZYDyehnYufca40uZYyFwFmdT5ah7xb6XqC1x8DCWuvAjxcBV87fJFyZ4Zfo88mdLO1tFgD780N1pUBWX22rL9fV1/sH/WY6/XsZ8QAAAAAASUVORK5CYII=)
}

.hot_icon:before,.label_red_pay {
    background-repeat: no-repeat;
    background-size: 100% 100%
}
.label_pay,.label_red_pay,.label_white_pay {
    display: inline-block;
    vertical-align: middle;
    vertical-align: auto;
    vertical-align: top;
    margin: 4px 0 0 4px;
    width: 32px;
    height: 16px;
}

</style>
