<template>
    <div class="pate-login">
  <div class="view_login">
   <div class="nav_layout login_nav">
    <div class="com_nav white_nav">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con"></div>
      </div>
      <div class="nav_middle">
       <!---->
      </div>
      <div class="nav_right">
          <router-link to="./register">
       <span class="reg_btn">立即注册</span>
         </router-link>
      </div>
     </div>
     <div class="nav_middle_title">
      登录
     </div>
    </div>
   </div>
   <div class="form_bg">
    <div class="form_logo"></div>
    <div class="form_outer">
     <div class="input_outer input_unfocus">
      <input type="number" placeholder="请输入手机号" class="comic_input" />
     </div>
     <div class="input_outer input_unfocus">
      <input type="password" placeholder="请输入密码(8-16位数字or英文)" maxlength="16" class="comic_input" />
     </div>
     <!---->
     <div class="reset_btn">
      <span>忘记密码?</span>
     </div>
     <div class="button_header form_btn disable" type="button">
      <button type="button" class="comic_button btn_log" style="font-size: 14px;">登录</button>
     </div>
    </div>
   </div>
   <div class="third">
    <p class="third_title"> 其他登录方式 </p>
    <div class="third_login">
     <span class="weibo"></span>
     <span class="qq"></span>
    </div>
   </div>
  </div>
    </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style lang="scss">
a{
    text-decoration: none;
}
.view_login {
  position: relative;
  width: 100%;
  height: 100%;
}

.view_login .login_nav .com_nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.view_login .login_nav .com_nav .nav_right {
  padding-right: 20px;
  font-size: 14px;
}

.view_login .third {
  overflow: hidden;
}

.view_login .third_title {
  margin-top: 16px;
  line-height: 24px;
  font-size: 14px;
  color: #999;
  text-align: center;
}

.view_login .third_login {
  margin: 14px 0 30px;
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
}

.view_login .third_login span {
  margin-left: 36px;
  width: 48px;
  height: 48px;
  border-radius: 5px;
  background-size: cover;
}

.view_login .third_login .wechat {
  background-image: url(~@/assets/icon/2.png);
}

.view_login .third_login .weibo {
  margin-left: 0;
  background-image: url(~@/assets/icon/9.png);
}

.view_login .third_login .qq {
  background-image: url(~@/assets/icon/10.png);
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
.com_recored .feed_btn,
.form_bg {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.form_bg {
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  background-image: url(~@/assets/icon/6.png);
  background-size: cover;
}

.form_bg .form_logo {
  margin-top: 54px;
  width: 182px;
  height: 182px;
  background-image: url(~@/assets/icon/7.png);
  background-size: cover;
}

.form_bg .form_outer {
  padding: 20px 32px 24px;
  border-radius: 6px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px 0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  overflow: hidden;
}

.form_bg .input_outer {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.form_bg .input_outer .comic_input {
  font-size: 14px;
  height: 44px;
  line-height: 22px;
}

.form_bg .vali_input .comic_input {
  max-width: 150px;
}

.form_bg .vf_btn {
  line-height: 24px;
  font-size: 14px;
  color: #999;
  text-align: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  white-space: nowrap;
}

.form_bg .active .vf_btn {
  color: #634fa4;
}

.form_bg .reset_btn {
  margin-top: 8px;
  padding-right: 8px;
  line-height: 24px;
  font-size: 14px;
  color: #634fa4;
  text-align: right;
}

.form_bg .form_btn {
  margin: 1rem auto 0;
}
.input_outer {
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
  margin-top: 16px;
  padding: 0 8px;
  width: 231px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 4px;
  overflow: hidden;
}

.input_outer input::-webkit-input-placeholder {
  color: #ccc;
}

.input_outer input:-moz-placeholder,
.input_outer input::-moz-placeholder {
  color: #ccc;
}

.input_outer input:-ms-input-placeholder {
  color: #ccc;
}

.input_outer textarea::-webkit-input-placeholder {
  color: #ccc;
}

.input_outer textarea:-moz-placeholder,
.input_outer textarea::-moz-placeholder {
  color: #ccc;
}

.input_outer textarea:-ms-input-placeholder {
  color: #ccc;
}

.input_outer input {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 48px;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
}

.input_outer input:disabled {
  background: transparent;
}
.form_bg .reset_btn {
  margin-top: 8px;
  padding-right: 8px;
  line-height: 24px;
  font-size: 14px;
  color: #634fa4;
  text-align: right;
}
.form_bg .form_btn {
  margin: 16px auto 0;
}
button {
  display: block;
  margin: 0 auto;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  white-space: nowrap;
  background: #f75d79;
}

.disable button {
  background: #ccc;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  box-shadow: 0 0.2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.btn_log {
  width: 231px;
  height: 48px;
  font-size: 14px;
  border-radius: 4px;
  background: #f75d79;
}
// 上面文字处理
.com_nav,
.com_nav .nav_content,
.gray_nav,
.gray_nav .nav_content,
.white_nav,
.white_nav .nav_content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   -webkit-box-orient: horizontal;
  //   -webkit-box-direction: normal;
  //   -webkit-box-pack: center;
  //   -ms-flex-pack: center;
  //   justify-content: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   align-items: center;
}

.com_nav .nav_content,
.gray_nav .nav_content,
.white_nav .nav_content {
  flex-direction: row;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  z-index: 1;
}
.nav_middle_title {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  color: #333;
  line-height: 44px;
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
  width: 44px;
  height: 44px;
}

.l_con.back_btn {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAv5JREFUeAHt3EGO0zAYgNEpGtE79EbdDTfgAt3DirJj3wtwA5a9UcUVyqbYTKpJM44dpG76+yEhEjeN5OdP0CGeeXryiwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAncQWN3hHqFvsd/vP55Op++r1epznujlcvm52Wy+pfE/ESf+HHFS95rTbrdbpxh+pfttUwjX235JY/n463Ug0p8fIk3mnnPJMZzP538xTO97/dtiOh7hXBCFVazFULg81JAgJsu5JIb8OWLytjCnghgt5ZIY0uXH/KFy9LZQh77KGJZzaQzr9frT4XA4h6pgNBlBJAwxvBXRfRBieIshH3UdhBhuY+g6CDG8j6HbIMRQjqHLIMQwH0N3QYihHkNXQYihHUM3QYhhWQxdBCGG5TGED0IM/xdDvjrsw62802luP8OI6Rj92cRorosOwwaRt70lgW1FQQwFnLBBNHY1iaEQQx4KG8TMfA03BMIG0djVtM2fL/KHzoZPdy+HDWLY1XSsrKgoCjihH3/7srOw4o2h0EHkuYuiUcDk5fBBiGKy4o3TLoIQRaOC0cvdBCGK0apXDrsKQhSVEoaXugtCFPUougxCFPNRdBuEKMpRdB2EKN5H0X0QoriNQhCDh//RfIUI+3Drtvv2Wf6O7rx7Kl3ZfCCWd2O17/iYVwhitG5Loxh2Y43eGedQEJO1XBJFYzfW5I6PdSqIwnotiaLwthBDgphZxloUjd1YM3d8jGFBVNYpR5F2Xr2kS36kfyZ+59/5OPLPmKpweIkAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLLBf4CxpJVWJk5/7sAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.white_nav .nav_left .l_con.back_btn {
  background-image: url(~@/assets/icon/8.png);
}
.white_nav div,
.white_nav span {
  color: #fff;
}
</style>
