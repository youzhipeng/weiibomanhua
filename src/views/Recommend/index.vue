<template>
    <div class="pate-liebiao">
 <div class="view-more">
   <div class="nav_layout">
    <div class="com_nav border">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con"></div>
      </div>
      <div class="nav_middle">
       <span class="nav_title">人气作品</span>
      </div>
      <div class="nav_right"></div>
     </div>
     <!---->
    </div>
   </div>
   <div class="list_loaded scroll">
    <div class="com-item">
     <div class="item-cover">
 <div class="comic_cover" data-src="https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg" lazy="loading" style="background-image: url(&quot;https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg&quot;);"></div>
     </div>
     <div class="item-info">
      <p class="info-title">追我吧，阴阳官！</p>
      <p class="info-author"><span class="author-name">作者：创易漫画</span></p>
      <p class="info-content">冤魂爱上阴阳官</p>
     </div>
    </div>
    <div class="com-item">
     <div class="item-cover">
      <div class="comic_cover" data-src="https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg" lazy="loading" style="background-image: url(&quot;https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg&quot;);"></div>
     </div>
     <div class="item-info">
      <p class="info-title">美人老矣</p>
      <p class="info-author"><span class="author-name">作者：春风画社</span></p>
      <p class="info-content">毒医妖女重生复仇丫鬟</p>
     </div>
    </div>
    <div class="com-item">
     <div class="item-cover">
      <div class="comic_cover" data-src="https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg" lazy="loading" style="background-image: url(&quot;https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg&quot;);"></div>
     </div>
     <div class="item-info">
      <p class="info-title">香水汪星人</p>
      <p class="info-author"><span class="author-name">作者：無二_东东东东啌</span></p>
      <p class="info-content">金毛犬变成金发帅哥</p>
     </div>
    </div>
    <div class="com-item">
     <div class="item-cover">
      <div class="comic_cover" data-src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg" lazy="loading" style="background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"></div>
     </div>
     <div class="item-info">
      <p class="info-title">万里雪歌</p>
      <p class="info-author"><span class="author-name">作者：二斯特洛夫斯基</span></p>
      <p class="info-content">女装大佬，同游江湖</p>
     </div>
    </div>
    <div class="com-item">
     <div class="item-cover">
      <div class="comic_cover" data-src="https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg" lazy="loading" style="background-image: url(&quot;https://img.manhua.weibo.com/client/2019/02/12/c0C6DGjZ.jpg&quot;);"></div>
     </div>
     <div class="item-info">
      <p class="info-title">美人老矣</p>
      <p class="info-author"><span class="author-name">作者：春风画社</span></p>
      <p class="info-content">毒医妖女重生复仇丫鬟</p>
     </div>
    </div>
   </div>
   <!---->
  </div>
    </div>
</template>
<script>
export default {
  name: 'Liebiao'
}
</script>
<style lang="scss">
.pate-liebiao {
  height: 100%;
}
.view-more {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.view-more .list_loaded {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: auto
}
.com-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 8px 8px 8px 16px;
}

.com-item .item-cover {
    margin-right: 8px;
    width: 128px;
    height: 72px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.com-item .item-info {
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
    overflow: hidden
}

.com-item .item-info .info-title {
    line-height: 28px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all
}
.com-item .item-info .info-author,.com-item .item-info .info-content {
    font-size: 12px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all
}

.com-item .item-info .info-content {
    font-size: 14px;
    margin-top: 10px
}
.view-more .list_loaded .com-item .item-info .info-title {
    font-size: 14px;
}
</style>
