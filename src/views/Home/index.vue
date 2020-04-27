<template>
    <div class="pate-home">
        <!-- 头部 -->
    <div class="nav_layout home_nav">
   <div class="com_nav border">
    <div class="nav_content">
     <div class="nav_left">
      <div class="l_con"></div>
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/icon.b72a7a04.png" alt="" />
     </div>
     <div class="nav_middle">
      <span class="nav_title"></span>
     </div>
     <div class="nav_right">
      <div class="nav_switch_gender male_btn"></div>
      <div class="nav_serach"></div>
      <div to="/mine" class="nav_mine"></div>
     </div>
    </div>
    <!---->
   </div>
  </div>
    </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss">
.com_nav .nav_content,
.gray_nav .nav_content,
.white_nav .nav_content {
  flex-direction: row;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  z-index: 1;
}

.com_nav div,
.com_nav span,
.gray_nav div,
.gray_nav span,
.white_nav div,
.white_nav span {
  color: #333;
}

.border.gray_nav,
.border.white_nav,
.com_nav.border {
  border-bottom: 1px solid #e6e6e6;
}

.nav_left {
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
}

.l_con,
.nav_left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.l_con {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
}

.l_con.back_btn {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAv5JREFUeAHt3EGO0zAYgNEpGtE79EbdDTfgAt3DirJj3wtwA5a9UcUVyqbYTKpJM44dpG76+yEhEjeN5OdP0CGeeXryiwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAncQWN3hHqFvsd/vP55Op++r1epznujlcvm52Wy+pfE/ESf+HHFS95rTbrdbpxh+pfttUwjX235JY/n463Ug0p8fIk3mnnPJMZzP538xTO97/dtiOh7hXBCFVazFULg81JAgJsu5JIb8OWLytjCnghgt5ZIY0uXH/KFy9LZQh77KGJZzaQzr9frT4XA4h6pgNBlBJAwxvBXRfRBieIshH3UdhBhuY+g6CDG8j6HbIMRQjqHLIMQwH0N3QYihHkNXQYihHUM3QYhhWQxdBCGG5TGED0IM/xdDvjrsw62802luP8OI6Rj92cRorosOwwaRt70lgW1FQQwFnLBBNHY1iaEQQx4KG8TMfA03BMIG0djVtM2fL/KHzoZPdy+HDWLY1XSsrKgoCjihH3/7srOw4o2h0EHkuYuiUcDk5fBBiGKy4o3TLoIQRaOC0cvdBCGK0apXDrsKQhSVEoaXugtCFPUougxCFPNRdBuEKMpRdB2EKN5H0X0QoriNQhCDh//RfIUI+3Drtvv2Wf6O7rx7Kl3ZfCCWd2O17/iYVwhitG5Loxh2Y43eGedQEJO1XBJFYzfW5I6PdSqIwnotiaLwthBDgphZxloUjd1YM3d8jGFBVNYpR5F2Xr2kS36kfyZ+59/5OPLPmKpweIkAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLLBf4CxpJVWJk5/7sAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.nav_middle {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
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
  text-align: center;
  line-height: 2.75rem;
}

.nav_middle .nav_title {
  font-size: 1.125rem;
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
  min-width: 2.75rem;
  height: 2.75rem;
}

.nav_right div {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
</style>
