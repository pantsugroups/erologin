<template>
<div class="main padding-limiter">
    <BookPanel v-bind:book="book"/>
    <div class="double-column">
        <div class="panel-wide">
            <VolumePanel v-bind:volumes="volumes"/>
            <CommentPanel v-bind:comments="comments"/>
        </div>
        <div class="panel-narrow">
            <RecommendPanel/>
        </div>
    </div>
</div>
</template>

<script>
import BookPanel from '../components/Panels/BookPanel.vue'
import VolumePanel from '../components/Panels/VolumePanel.vue'
import RecommendPanel from '../components/Panels/RecommendPanel.vue'
import CommentPanel from '../components/Panels/CommentPanel.vue'

export default {
  name: 'BookView',
  components: { BookPanel, VolumePanel, RecommendPanel, CommentPanel },
  data (){
    return {
      book:{
          title:'胖次群的奇妙日常',
          coverimg:'/static/bookUndefined.png',
          publisher:'胖次Group',
          author:'Ero Devs',
          description:'一群死宅要凉技术宅的日常聊(si)天(bi)',
          tags:'日常 / 女装 / 死宅'
      },
      volumes: [],
      comments: [
        {
          'avatar':'https://qwq.moe/img/avatar.jpg',
          'author':'Archeb',
          'bio':'Poi.',
          'floor':'#1',
          'content':'<p>强推！</p><p>这书不火我让鳖直播女装！</p>'
        },
        {
          'avatar':'https://secure.gravatar.com/avatar/c004f07e4aeea5ada1cc18fa390f6e09?s=55&amp;r=G&amp;d=',
          'author':'⑨BIE',
          'bio':'我要女装！',
          'style':'background-color:#f58d8d',
          'floor':'#2',
          'content':'<p>吼啊<br>...⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄....</p>'
        }
      ]
    }
  },
  created(){
      fetch(this.$config.api_base+'/novel/detail/'+this.$route.params.id).then(data=>data.json()).then(data=>{
        data.data.tags=data.data.tags.join(" / ");
        this.book=data.data;
        document.title=data.data.title + ' · Ero Light';
      })
      fetch(this.$config.api_base+'/novel/volumes/'+this.$route.params.id).then(data=>data.json()).then(data=>{
        this.volumes=data.data;
      })
  }
}
</script>

<style scoped lang="less">
.double-column{
    align-items:flex-start;
}
</style>
