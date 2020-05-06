<template>
  <div class="load_state">
   <img src="@/assets/icon/16.png" alt="" />
   <p>页面加载中~</p>
   <!---->
  </div>
</template>

<script>
export default {
  name: 'myMask'
}
</script>

<style lang="scss">
.load_state {
  height: 100%;
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
}

.load_state img {
  width: 184px;
  height: 184px;
}

.load_state p {
  margin-bottom: 22px;
  color: #999;
  font-size: 14px;
}
</style>
