<template>
    <div class="pate-my">
  <div class="com-mine">
   <div class="nav_layout">
    <div class="com_nav white_nav">
     <div class="nav_content">
      <div class="nav_left">
       <div class="back_btn l_con"></div>
      </div>
      <div class="nav_middle">
       <span class="nav_title"></span>
      </div>
      <div class="nav_right"></div>
     </div>
     <!---->
    </div>
   </div>
   <div class="banner">
    <div class="avatar component_avatar mine-avatar">
     <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/avatar.78577bb7.png" />
     <!---->
    </div>
    <p class="mine-nickname"> ink娘U院N系97351 </p>
    <p class="mine-vcoin"> 我的墨币: 0 </p>
   </div>
   <div class="mine-list">
    <div class="mine-item">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEUAAACZmZmfn5+ZmZmampqioqKcnJyZmZmampqZmZmampqampqampqZmZmampqZmZmampqioqKampqampqZmZmampqampqbm5uZmZmbm5uampqampr///+ZmZnMzMzb29vf39/KysqgoKCcnJz8/PywsLDs7OzQ0NC8vLy1tbWoqKjGxsazs7Pv7+/V1dX19fXCwsKioqLo6Oi+vr65ubn39/fh4eHx8fHi4uItiChUAAAAHHRSTlMAgBn5Ywsg2WqUe04x776JcAjmxKqkm1lLPLWxvtaxEAAAAjxJREFUaN7t19tyqjAYhuEUsVr3Veum5RVRURS12trN/V/ZkhmcRWXj/MXpeJDnIMNRPgn5klFpmqZpmqb9mXuzcpegYt6rayg+kOqheIX5S2Qo5U94AJbOKIGzDN4h9/oDtpXCBvJ+BxOWVqolmDkDKuCnB/hQufU3uPwNbn0XXezB7Tc5+yzSou6H1b7ZqlRaZr86vOriPNbKvUapwA+FUqNXrj3mn3zQ7BRIVeg0BzlCDPMlMvnePXg733H8nXdw95GQF9NQv1HtEFp5i+/NzPphtvleeCtCnap8bbrh5M7nh5Xq49MJQ7rSlXoGpuvtl3XR13Y9BZ6VSBnwwp9+2asHlEUBbfAtgR20lcAQ9jNJwGwCQ9kKeZaIJ1ujFuxkATtoCQL64EZuRjsYx+PY83E8WUNf0mGYvkZuXjtpXARj6HUqvJ0b4FihEYwSxs00EuBAQ3ZOwGR2HjCZRwNccKObSHhalGB7FhAk/A9YwHRzCthCSYmrvIoFMDmcngML62QlLPJRsQ7jWABEno9rGBpDvaiEmrA+CzhMIPEN1tCU3zYFmJ/tovmEpG8wh4KhxJ7g/XybBgnxXfQOT0quFpTtUg9OJaupkLRsF5r8GSvZr8pm2yknkh0vmbxsmeIlk5ctW7xk8rJlipdMXrZs8ZLJy5YpXjJ52TLESyYvG29WhjdiJZPpwj4j4W0PXZWHUQdcf5TId4G6oXKptcnUrqmcjF7WH5CeofIzBq27RK2BoTRN0zRN0/7IP1Wf11KaXo8YAAAAAElFTkSuQmCC" class="m-item-icon" />
     <span class="m-item-title">墨币充值</span>
     <span class="m-item-nav"></span>
    </div>
    <div class="mine-item">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAxlBMVEUAAACZmZmamprAwMCampqampqampqampqampqZmZmampqampqdnZ2enp6ZmZmampqbm5ubm5uZmZmampqampqampqbm5ubm5ubm5ugoKCampqcnJyjo6OqqqqZmZmampqZmZmcnJyampr///+ZmZnz8/OcnJz39/erq6ujo6PX19fT09PLy8vq6uqlpaX29vbm5ubj4+O+vr60tLSoqKigoKD5+fn7+/vHx8fFxcXDw8O6urqzs7Ovr6/u7u7b29vZ2dnPz88dCgzZAAAAI3RSTlMA+0gD+KSaU/TYzbAkHuVzQDjsknlrYlpOFL8zDgnexbcqlAYekaAAAAJzSURBVGje7ddpctpAEIbhEZvBbMEGsxkv6VdiBwNmx9v9L5WxTGGoshIrIyV/9Bygv5qqnp4eFYlEIpFIJPIftCrJZKWlQpO/QcvkVEji57jO4yocV+D0+w5cqVDEM/Am8gaZcI5wBvOFyGIOZyoM5zAQbQDnKgQxcNqitR2IqeA1YC2uNTRU4Erg2OKyHSipoGVhKntTyKqA3QPPsvcM3KtgJWErB1tIqkDlLRjKwRCsvArMdbN6BzM5MoO7avPaeDjkYsVUo4DrQY5McBUaqWIs93eDI1fOZiw+PcmJJz5ZmWwx73tyJjhwOtvBqy0n7NfBtuMchVR9XiuLd6PZpj+xxZM96W9mI1wlv9eq8zJcyrcshy9Pfq9eAYbigw03yo8MTMSHB78BKejaPg7QhZTyo34BI9tP/Qufjfoj/f0EewTpH0oZJIRQXyck4PEbCfYjJHR9/2LvCWP5g/F7ff1EGySEVV+rWdBpy2+0O2DVDHatzwTv+noLM00Irb5WtWAqHqbumDZ0CSvxsILLINaJnnjoQTKIlffBe4aar8HxBCzEwwIScWUmB13x1IWcMlODmXiaQU2ZKcNaPK2hHEYTebeReRONxwG3URracrAcOM5gKQdtSBtu1SdN1OuidXsnbZQ3/fntZG/SYa8zkb2d6X+wCBtxDXdohaurAtpuKK4NFJWJFPRFs6do6XJLqVY5jTa1RevDzwAC2isHsC7rylW/tABntRDpmc7TCsx7gzlaNnc0QLJo80F/DhVlol7gw21JnSjd8uHC8B/VvEDLnH3xmmbc+k3jH2AxlarFv5zkZ6lkpa4ikUgkEolE/olfOX7VdZNusD8AAAAASUVORK5CYII=" class="m-item-icon" />
     <span class="m-item-title">我的关注</span>
     <span class="m-item-nav"></span>
    </div>
    <div class="mine-item">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAb1BMVEUAAACZmZmsrKyZmZmZmZmampqZmZmampqbm5uampqbm5ucnJyampqampqZmZmampqbm5ubm5v///+ZmZnMzMzb29vIyMirq6vDw8Obm5v4+Pjx8fH9/f29vb3z8/O1tbWvr6+lpaXf39/R0dGdnZ0z8l+BAAAAEnRSTlMAgAjzw6xzaFlMPTXPi5R8YyFZQJSJAAAB30lEQVRo3uzTyY6DMBBF0SYJhJC5LraZIcP/f2MLhFBAnYUJvYjkswTpPUyVfxzHcRzHWdb1cvZ658t18fjViZHTauH8AxOH1VLRURh4Xptf67in67bB84Iw+rRm56/pKXmh6K393Qfx+w2DWkZqBpv93PwtLVNqbUDLiAajdWlobeflH4FU55Il6d8nSJNMcp0Cx7nf31Qi+e39DG65SNXMO8MeKAuRrM03ZrpF/bNbJlKUgP0cNtAUIpLAU0lhmDCFqCckIlI0sLHeT0grEclSUG1IwkjSlitIMxGpUrDdVr/fmzsY6eQqHqhcOgbu/U75lvd3DV3IAxJ5K4FHVw5ruzsdgZFWDLG8Nbw1EFkVhFDaFJQQWhUEoG0KNARWBR7ENgUxeK7g3wtU/EItX6AYUd9XMPlF3zhkV/DbjhmjAAgDQbCxs5MU1vr/PwrhmOaigQ0YCDsP8EAUZnb+Af9o01/RAl+RD6x2APHquynipagjdp3BrlFHSX7pgwx9gPwK+k7htKBw0HclQKLRzpI4o9EIEC2hojIzVCYJJUbgUTs5E518EIFqxtYT110S91UfT8aqId6DENenhC+YEsbGkPICY8jInNNn28cHqTYMUuOTWpOY1IwxxhhjfuEBfGy3xe1x36QAAAAASUVORK5CYII=" class="m-item-icon" />
     <span class="m-item-title">浏览历史</span>
     <span class="m-item-nav"></span>
    </div>
    <div class="mine-item">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAZlBMVEUAAACZmZmZmZmZmZmampqZmZmbm5uZmZmZmZmdnZ2enp7///+ZmZnNzc2enp7CwsL5+fn29vbb29usrKylpaXy8vLl5eXe3t63t7egoKDs7OzX19fHx8e/v7+xsbGrq6vn5+e4uLjc1+EFAAAAC3RSTlMAgPrhmHNSDxQqFWkHK6MAAAE9SURBVGje7dfZasMwEIVh70k6x5LlJXH25P1fsi4tHjBtI8miCDrfnSHk12KDlAghhBBCCBG7TVWm1spqk7jZFhmcZMU2cbDL4SzfOYw/B9Dp2pruPgr2cygA1ZKTVgGF9f5mQEuOWiCz3ekK6MhZB1SWgRLQ5EwDpWUgBWqa1Eo39FKj1eevgdQxoIB+Ty/se0B5BmpMLs2vw79g4jsDOhwB3E/0o9MdwPFAvgEy4zzApXmKoyHvwOSsANwG+sZwA6DORKsC/DdsmfYPLBeC8eKtD/BWMt7+9QF+Ga/N/HzlF3htgD8n/ur4IVCAB60NkdE8nVABXnb0PXhDwgbIPPHlaShkgD1GBajxQRQ6wIaBWMgAk4AE/kfA/+AVy9HR//Aby/E9efO8gMRzhfK7BMZ1jRVCCCGEEOLPvQOPbmLBbAoRSQAAAABJRU5ErkJggg==" class="m-item-icon" />
     <span class="m-item-title">意见反馈</span>
     <span class="m-item-nav"></span>
    </div>
    <div class="mine-item">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAQlBMVEUAAACZmZmampqbm5ubm5ukpKT///+ZmZnMzMy9vb38/Pzf39+rq6vv7++enp7T09P19fXY2Ninp6ekpKSampru7u4FSgE5AAAABnRSTlMAgKRmLg69rKroAAABBElEQVRo3u2Y0QqCQBBFU2uvq5al9v+/GjiEwpKsWze07nmYh14OnNCROQghhBDibY5FFkFxPKRxyhFJfkoS5IgmT+oDDL6MwA9ASqUC8C4KDxQJggwo4wQlkP21AItIYAL3Agm+L6hrmyxBDdxskgQ3oK9scgRVD7Q2OQLXAp1NkqDq0NgkCdy1vdrc63MgwQ8vnAX28FWxfwFm3J1riH/y+ENJFTTOnXnfRdUFOI+NatKrwj8bed7St0YX1k6eGhEEQSOCIGj0OUHYiCAIGhEE80YEQdCIIJg1IgiCRpylb42IO9kaEQXWSEt/vWCLB6l1J7UtHgVXnTW3eZgVQgghxMQDgTdCUXNnEAEAAAAASUVORK5CYII=" class="m-item-icon" />
     <span class="m-item-title">已购作品</span>
     <span class="m-item-nav"></span>
    </div>
    <div class="mine-item">
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAQlBMVEUAAACZmZmampqbm5ubm5ukpKT///+ZmZnMzMy9vb38/Pzf39+rq6vv7++enp7T09P19fXY2Ninp6ekpKSampru7u4FSgE5AAAABnRSTlMAgKRmLg69rKroAAABBElEQVRo3u2Y0QqCQBBFU2uvq5al9v+/GjiEwpKsWze07nmYh14OnNCROQghhBDibY5FFkFxPKRxyhFJfkoS5IgmT+oDDL6MwA9ASqUC8C4KDxQJggwo4wQlkP21AItIYAL3Agm+L6hrmyxBDdxskgQ3oK9scgRVD7Q2OQLXAp1NkqDq0NgkCdy1vdrc63MgwQ8vnAX28FWxfwFm3J1riH/y+ENJFTTOnXnfRdUFOI+NatKrwj8bed7St0YX1k6eGhEEQSOCIGj0OUHYiCAIGhEE80YEQdCIIJg1IgiCRpylb42IO9kaEQXWSEt/vWCLB6l1J7UtHgVXnTW3eZgVQgghxMQDgTdCUXNnEAEAAAAASUVORK5CYII=" class="m-item-icon" />
     <span class="m-item-title">自动购买管理</span>
     <span class="m-item-nav"></span>
    </div>
   </div>
   <!---->
  </div>
    </div>
</template>
<script>
export default {
  name: 'My'
}
</script>
<style lang="scss">
.pate-my {
  height: 100%;
}
.com-mine {
  overflow: hidden;
}

.com-mine .com_nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.com-mine .banner {
  -webkit-box-sizing: border-box;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 68px 40px 0;
  height: 224px;
  box-sizing: border-box;
  background-image: url(~@/assets/icon/14.png);
  background-repeat: no-repeat;
  // background-size: 100% 100%
}

.com-mine .banner .mine-avatar {
  width: 88px;
  height: 88px;
}
.component_avatar {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.component_avatar img {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
}

.com-mine .banner .mine-nickname {
  line-height: 40px;
}

.com-mine .banner .mine-nickname,
.com-mine .banner .mine-vcoin {
  width: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  font-size: 16px;
}

.com-mine .banner .mine-vcoin {
  line-height: 18px;
  font-size: 14px;
}

.com-mine .banner:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 20px;
  left: 0;
  bottom: -1px;
  background-image: url(~@/assets/icon/14.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.com-mine .mine-list {
  margin-top: 8px;
}

.com-mine .mine-list .mine-item {
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
  padding-left: 16px;
  height: 54px;
  -webkit-box-shadow: #efefef 0 -1px 0 0 inset;
  box-shadow: inset 0 -1px 0 0 #efefef;
}
.com-mine .mine-list .mine-item .m-item-title {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  line-height: 54px;
  font-size: 14px;
  color: #666;
}

.com-mine .mine-list .mine-item .m-item-nav {
  width: 44px;
  height: 44px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAvBJREFUeAHt3EFu2kAYgNFQifYkSHCU7NIb5BjdVV31Gr1Bs8tRQOIkDQs6v2IiM8mMHSmRYOZ1A2OIhZ8/jSa1yc2NfwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEPgAgcUH7OMid3E8Hr/udrtf6fE+PuBisfizXq9/pseni/zAF/Khmg1iu93+TjH8yJwfl8vl99Vq9S/bbjgIfGlV4jQzZMd3ezgc/u73+2/ZdsNBoNkgKmdYFBWcZoOINUPluEVRwGl2DRGLyrSOeEjHfVs49thsTZHhtDxDPMUCMk56dszjoZlirJGeNztDnI4zFpCxkExjM8UJpfLYfBBx7KKoFJC91EUQosjOemXYTRCiqFQweqmrIEQxOvOFp90FIYpCCcPmLoMQRTmKboMQxdtRdB2EKF5H0X0QojiPQhCDh/+8eoZo9lrGeffTo7hpZu61j7hwNr3H63yHIEbnbW4UcWve6MeaeiqI7HTOiaJwN1a2p+scCuI6z9unfWpBZLRzFpcTd2Nle7yuod8yRudrTgzp7Y+bzeau1dv5zRBDEHNjiN9EWo0hKMwQCeE9MbT+nY7ugxDDMEUOD10HIYbzGGLUbRBieB1Dt0GI4e0YugxCDOUYugtCDPUYugpCDNMxdBOEGObF0EUQYpgfQ/NBiOF9McS7m72WEXc1+ZKvIF4EhruafOP7RWTek5ZniPsKgT8UUsBpNojC8cZmMVRwmg2icFeTGCoxxEvNXtyKRaU/XDpx9r1MgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBzxL4D6+HWOsjVYVmAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.com-mine .signout {
  margin: 30px 0;
}
.com-mine .banner:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 20px;
  left: 0;
  bottom: -1px;
  background-image: url(~@/assets/icon/15.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.com-mine .mine-list {
  margin-top: 8px;
  .mine-item {
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
    padding-left: 16px;
    height: 54px;
    -webkit-box-shadow: #efefef 0 -1px 0 0 inset;
    box-shadow: inset 0 -1px 0 0 #efefef;
    .m-item-icon {
      margin-right: 6px;
      width: 32px;
      height: 32px;
    }
    // .m-item-title {
    //   -webkit-box-flex: 1;
    //   -ms-flex: 1;
    //   flex: 1;
    //   line-height: 54px;
    //   font-size: 14px;
    //   color: #666;
    // }
  }
}
</style>
