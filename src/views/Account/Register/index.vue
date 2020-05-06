<template>
  <div class="pate-register">
  <div class="view_login">
   <div class="nav_layout login_nav">
    <div class="com_nav white_nav">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con" @click="$router.back()"></div>
      </div>
      <div class="nav_middle">
       <!---->
      </div>
      <div class="nav_right">
       <router-link to="./login">
       <span class="reg_btn">我要登入</span>
         </router-link>
      </div>
     </div>
     <div class="nav_middle_title">
      注册
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
     <div class="input_outer input_unfocus vali_input">
      <input type="text" placeholder="请输入验证码" maxlength="6" disabled="disabled" class="comic_input" />
      <div class="vf_btn">
        获取验证码
      </div>
     </div>
     <!---->
     <div class="button_header form_btn disable" type="button">
      <button type="button" class="comic_button btn_log" style="font-size: 14px;">注册</button>
     </div>
    </div>
   </div>
   <div class="service"></div>
  </div>
    </div>
</template>
<script>
export default {
  name: 'Register'
}
</script>
<style lang='scss'>

</style>
