<template>
<div class="main padding-limiter">
  <div class="double-column">
    <div class="panel-wide">
      <swiper :options="swiperOption">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
    <div class="panel-narrow">
      <IndexPersonalPanel />
    </div>
  </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import IndexPersonalPanel from '../Panels/IndexPersonalPanel.vue'
import 'swiper/dist/css/swiper.css'

  export default {
    name: 'IndexView',
    components:{swiper, swiperSlide,IndexPersonalPanel},
    data () {return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
            }
  }
</script>

<style scoped lang="less">
.double-column{
  align-items:start;
}
.swiper-container{
    box-shadow: 0 6px 15px rgba(36, 37, 38, 0.1);
    border-radius:3px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    height:350px;
  
}
.slide-1{
    background-image:url('../../assets/bg2.jpg');
  }
  .slide-2{
    background-image:url('../../assets/single-bg2.jpg');
  }
</style>
