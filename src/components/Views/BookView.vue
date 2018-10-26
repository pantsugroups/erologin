<template>
<div class="main padding-limiter">
    <BookPanel v-bind:book="book"/>
    <div class="double-column">
        <div class="panel-wide">
            <VolumePanel v-bind:volumes="volumes"/>
            <CommentPanel/>
        </div>
        <div class="panel-narrow">
            <RecommendPanel/>
        </div>
    </div>
</div>
</template>

<script>
import BookPanel from '../Panels/BookPanel.vue'
import VolumePanel from '../Panels/VolumePanel.vue'
import RecommendPanel from '../Panels/RecommendPanel.vue'
import CommentPanel from '../Panels/CommentPanel.vue'
export default {
name: 'BookView',
components:{BookPanel,VolumePanel,RecommendPanel,CommentPanel},
data () {
    return {
        book:{
            title:'胖次群的奇妙日常',
            coverimg:'/static/bookUndefined.png',
            publisher:'胖次Group',
            author:'Ero Devs',
            description:'一群死宅要凉技术宅的日常聊(si)天(bi)',
            tags:'日常 / 女装 / 死宅'
        },
        volumes:[]
        };
},
created(){
    fetch(this.$config.api_base+'/novel/detail/'+this.$route.params.id).then(data=>data.json()).then(data=>{
      data.data.tags=data.data.tags.join(" / ");
      this.book=data.data;
    })
    fetch(this.$config.api_base+'/novel/volumes/'+this.$route.params.id).then(data=>data.json()).then(data=>{
      this.volumes=data.data;
    })
}
}
</script>

<style scoped lang="less">
.navbar{
    top:0;
    width:100%;
    background-color:rgba(255,255,255,0.8);
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:fixed;
    color:#333;
    overflow:hidden;
    box-shadow:1px 1px 10px rgba(0,0,0,0.15);
    .navbar-group{
        display: flex;
        align-items: center;
        
        .navbar-item{
            text-shadow:1px 1px 10px rgba(255,255,255,0.3);
            margin: 0;
            padding:20px 30px;
            border-bottom:2px solid transparent;
            transition:border-color 0.5s;
            cursor:pointer;
            &:hover{
                border-color:#333;
            }
        }
        .navbar-logo{
            padding:0px;
            border-color:transparent!important;
            font-size:1.3em;
            margin-top:-3px;
            margin-right:15px;
        }
        .navbar-item-withicon{
            display:flex;
            align-items: center;
            .mdi{
                margin-right:6px;
                font-size:1.5em;
            }
        }
    }
}
</style>
