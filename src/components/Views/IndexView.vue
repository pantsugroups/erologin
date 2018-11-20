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
    
    <br>
    <div class="panel indexlist-panel">
    <div class="indexlist-title">首页推荐</div>
    <div class="book-list">
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
    </div>
    <div class="indexlist-title">最近更新</div>
    <div class="book-list">
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
    </div>
    <div class="indexlist-title">自暴自弃</div>
    <div class="book-list">
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
      <BookListItem />
    </div>

    </div>
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
import BookListItem from '../Items/BookListItem.vue'
import 'swiper/dist/css/swiper.css'

  export default {
    name: 'IndexView',
    components:{swiper, swiperSlide,IndexPersonalPanel,BookListItem},
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
    .swiper-button-next , .swiper-button-prev{
      opacity:0;
      transition:opacity 0.5s;
    }
    &:hover{
      .swiper-button-next , .swiper-button-prev{
        opacity:0.8;
      }
    }
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
.book-list{
margin-top:20px;
  display:flex;
  padding-left:10px;
  flex-wrap:wrap;
  .book-item{
    margin-right:10px;
  }
}
</style>
