<template>
    <div class="pate-liebiao">
 <div class="view-more">
   <div class="nav_layout">
    <div class="com_nav border">
     <div class="nav_content">
      <div class="nav_left">
          <router-link to="./home">
       <div class="back_btn l_con"></div>
          </router-link>
      </div>
      <div class="nav_middle">
       <span class="nav_title">{{title}}</span>
      </div>
      <div class="nav_right"></div>
     </div>
     <!---->
    </div>
   </div>
   <myMask v-if="list.length === 0"></myMask>
   <div class="list_loaded scroll" >
    <div class="com-item" v-for="item in list" :key='item.info_id' @click="getCanshu(item.object_id)">
     <div class="item-cover">
 <div class="comic_cover" data-src="item.image_ext_url" lazy="loading" :style="[{backgroundImage : 'url('+item.image_ext_url+')'}]"></div>
     </div>
     <div class="item-info">
      <p class="info-title">{{item.extra.name}}</p>
      <p class="info-author"><span class="author-name">{{item.extra.sina_nickname}}</span></p>
      <p class="info-content">{{item.extra.watching_focus}}</p>
     </div>
    </div>
   </div>
   <!---->
  </div>
    </div>
</template>
<script>
// 引入遮罩层
import myMask from '@/components/Mymask'
// 引入代理请求
import { getBanner } from '@/api/cartoon.js'
export default {
  name: 'Liebiao',
  components: {
    myMask
  },
  data () {
    return {
      title: this.$route.query.title,
      type: this.$route.query.type,
      list: []
    }
  },
  created () {
    const data = this.type
    getBanner()
      .then(res => {
        if (res.code === 1) {
          this.list = res.data[data]
        } else {
          alert('网络有误')
        }
      })
      .catch(err => {
        console.log(err)
        alert('网络请求失败，请稍后重试')
      })
  },
  methods: {
    getCanshu (id, number) {
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
  flex-direction: column;
}

.view-more .list_loaded {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: auto;
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
  flex-shrink: 0;
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
  overflow: hidden;
}

.com-item .item-info .info-title {
  line-height: 28px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}
.com-item .item-info .info-author,
.com-item .item-info .info-content {
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.com-item .item-info .info-content {
  font-size: 14px;
  margin-top: 10px;
}
.view-more .list_loaded .com-item .item-info .info-title {
  font-size: 14px;
}
</style>
