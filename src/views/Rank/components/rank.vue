<template>
  <div class="rank_list">
      <Mymask v-if="list.length === 0"></Mymask>
   <div class="rank_list_box scroll">
    <div>
     <div class="rank_list_con" v-for="item in list" :key="item.comic_id" @click="rankClick(item.comic_id)">
      <div class="comic_horizontal_container" >
       <div class="comic_cover comice_horizontal_cover" data-src="item.hcover" lazy="loaded" style="width:144px ; height:81px" :style="[{backgroundImage : 'url('+item.hcover+')'}]"></div>
       <div class="comic_cover_horizontal_info">
        <div class="comic_cover_horizontal_title" style="font-size: 16px;">
         {{item.name}}
        </div>
        <div class="comic_cover_horizontal_author" style="font-size: 12px;">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII=" alt="" />
         <i class="" v-for="(data,index) in item.cate_list" :key="data.cate_id" v-show="index < 3  ">{{data.cate_cn_name}}/</i>
        </div>
        <div class="comic_cover_horizontal_author" style="font-size: 12px;">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC" alt="" /> {{item.sina_nickname}}
        </div>
       </div>
       <div class="comic_cover_horizontal_rank">
          <div class="rank_num" v-if="item.rank_no > 3">
        {{item.rank_no}}
        </div>
        <!---->
       </div>
      </div>
     </div>
    </div>
   </div>
   <!---->
  </div>
</template>

<script>
import Mymask from '@/components/Mymask'
export default {
  name: 'Ranks',
  components: {
    Mymask
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    rankClick (id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss">
.rank_list_box {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: auto;
}

.rank_list_box .rank_list_con:first-child .comic_cover_horizontal_rank,
.rank_list_box .rank_list_con:first-child .comic_cover_rank {
  background-image: url(~@/assets/icon/11.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.rank_list_box .rank_list_con:nth-child(2) .comic_cover_horizontal_rank,
.rank_list_box .rank_list_con:nth-child(2) .comic_cover_rank {
  background-image: url(~@/assets/icon/12.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.rank_list_box .rank_list_con:nth-child(3) .comic_cover_horizontal_rank,
.rank_list_box .rank_list_con:nth-child(3) .comic_cover_rank {
  background-image: url(~@/assets/icon/13.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.rank_list_box .comic_cover_horizontal_rank {
  margin-top: 19px;
}
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

.comic_horizontal_container .comice_horizontal_cover {
  margin-right: 4px;
  border-radius: 4px;
}
.comic_cover_horizontal_rank {
  width: 40px;
  height: 45px;
}
.rank_list_box .comic_cover_horizontal_rank {
  margin-top: 19px;
}
.comic_cover_horizontal_rank .rank_num {
  padding-top: 20px;
  font-size: 18px;
  color: #666;
  text-align: center;
  line-height: 18px;
}
.comic_cover_horizontal_info {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
