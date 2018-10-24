<template>
<div class="main padding-limiter">
    <BookPanel/>
    <div class="double-column">
        <div class="panel-wide">
            <VolumePanel/>
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
    return {};
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
