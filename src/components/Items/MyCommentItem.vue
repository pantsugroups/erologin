<template>
<div class="mycomment-item">
  <div class="content" v-html="comment.content">

  </div>
  <div class="meta">
  {{ comment.author }} 在 <router-link v-bind:to="comment.origin">{{ comment.originName }}</router-link>评论道
  </div>
</div>
</template>
<script>
export default {
    name: 'MyCommentItem',
    props:{
        comment: {
            default:function(){
                return {
                    content:'<p>强推！</p><p>这书不火我让鳖直播女装！</p>',
                    origin:'/book/1',
                    originName:'《この素晴らしい世界に祝福を！》',
                    author:'Archeb',
                    time:'一百年前',
                    
                }
            }
        }
    }
}
</script>
<style scoped lang="less">
.mycomment-item{
  padding:15px 0;
  margin:15px 0 15px;
  background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  .content{
    
    padding:0px 20px;
    border-radius:3px;
    font-size:14px;
    color:#333;
  }
  .meta{
    padding:0px 15px;
    text-align:right;
    color:#777;
    font-size:13px;
  }
  a{
    color:#1db4ff;
}
}
</style>