<template>
<div class="book-item" v-on:click="jump">
  <div class="book-cover" v-bind:style="'background-image:url(' +book.cover+ ')'">
    <div class="book-title">{{ book.title }}</div>
    <div class="book-detailed">
      <div class="book-cover-blur" v-bind:style="'background-image:url(' +book.cover+ ')'"></div>
      <div class="full-title">{{ book.title }}</div>
      <div class="book-info">
        <div class="source"><span class="mdi mdi-calendar-clock"></span>{{ book.update_time }}</div>
        <div class="author"><span class="mdi mdi-account-edit"></span>{{ book.author }}</div>
        <div class="author"><span class="mdi mdi-tag-multiple"></span>{{ book.tags }}</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "BookListItem",
  created () {
    console.log(this.book);
  },

  props: {
    book: {
      default: function () {
        return {
          id: "1",
          title: "胖次群的奇妙日常",
          cover: "/static/bookUndefined.png",
          publisher: "胖次Group",
          author: "Ero Devs",
          update_time: "2018-12-15",
          description: "一群死宅要凉技术宅的日常聊(si)天(bi)",
          tags: "日常 / 女装 / 死宅"

        };
      }
    }
  },
  methods: {
    jump: function () {
      window.location.href = "/book/" + this.book.id;
    }
  }
};
</script>
<style scoped lang="less">
.book-item{
  margin-right:15px;
  font-weight:300;
  margin-bottom:30px;
  &:hover{
    .book-detailed{
      opacity:1;
    }
    .book-title{
      opacity:0;
    }
  }
  .book-cover{
    width:160px;
    height:225px;
    background-size:cover;
    box-shadow:1px 1px 10px rgba(0,0,0,0.3);
    display:flex;
    flex-direction: column-reverse;
  }
  .book-title{
    max-width:160px;
    overflow:hidden;
    padding:8px 5px;
    background: rgba(0, 0, 0, 0.5);
    text-shadow: 1px 1px 8px #222,1px 1px 18px #000;
    color:#ffffff;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align:center;
    transition:all 0.3s;
    font-size:14px;

  }
  .book-detailed{
    opacity:0;
    transition:all 0.3s;
    width: 160px;
    text-shadow: 1px 1px 8px rgba(255,255,255,0.1);
    height: 225px;
    position: absolute;
    overflow:hidden;
    color: #d8d8d8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    .book-cover-blur{
      z-index:0;
      position:absolute;
      filter:blur(10px) brightness(0.4);
      width: 230px;
      height: 310px;
      background-size:cover;
    }
    .full-title{
      text-align:left;
      z-index:1;
    }
    .book-info{
      margin-top:10px;
      z-index:1;
      padding-top:20px;
      border-top:1px solid #969696;
      width:100%;
      text-align: left;
      font-size:13px;
      .mdi{
        border:1px solid #969696;
        border-radius:50%;
        padding:4px 5px;
        width:25px;
        height:25px;
        margin-right:7px;
        margin-top:7px;
      }
    }
  }
  }
</style>
