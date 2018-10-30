<template>
<div class="main padding-limiter">
    <swiper :options="swiperOption">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

  export default {
    name: 'IndexView',
    components:{swiper, swiperSlide},
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
.swiper-container{
    box-shadow: 0 3px 10px rgba(36, 37, 38, 0.08);
    border-radius:3px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    height:500px;
  
}
.slide-1{
    background-image:url('../../assets/bg2.jpg');
  }
  .slide-2{
    background-image:url('../../assets/single-bg2.jpg');
  }
</style>
