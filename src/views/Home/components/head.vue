<template>
    <div class="home_menu">
    <router-link to="./Daypub">
     <div class="home_menu_item">
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/daypub.7d71503a.png" alt="" />
      <p>放送表</p>
     </div>
    </router-link>
    <router-link to="./Cate">
     <div class="home_menu_item">
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/catelog.3cfb4bb6.png" alt="" />
      <p>分类</p>
     </div>
    </router-link>
    <router-link to="./Rank">
     <div class="home_menu_item">
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/rank.bfd0ebb0.png" alt="" />
      <p>榜单</p>
     </div>
    </router-link>
    <router-link to="./Comic">
     <div class="home_menu_item">
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/ending.932e7864.png" alt="" />
      <p>完结</p>
     </div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style lang="scss">
  // 导航
 .home_menu {
    padding: 16px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .home_menu .home_menu_item img {
    width: 60px;
  }

  .home_menu .home_menu_item p {
    line-height: 24px;
    font-size: 14px;
    text-align: center;
    color: #333;
  }
</style>
