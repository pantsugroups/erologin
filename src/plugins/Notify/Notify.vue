<template>
<div class="notify-container">
    <div class="notify" v-for="notification in notifications" v-bind:style="notification.style">
        <div class="title">{{ notification.title }}</div>
        <div class="content">{{ notification.content }}</div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Notify',
    props:['notifications'],
    created:function(){
        this.notifications=[];
    }
}
</script>
<style lang="less">
.notify-container{
    position: fixed;
    display: flex;
    top:0;
    left:0;
    padding: 0 20px;
    align-items: flex-end;
    flex-direction: column-reverse;
    width: 100vw;
    z-index: 11;
    pointer-events: none;
    transition:all 0.5s;
    height: 100vh;
    .notify{
        background-color:rgba(15,15,15,0.6);
        animation:notify-show-hide 5s ease-in-out;
        border-right:7px solid rgba(0,0,0,0.4);
        animation-fill-mode:forwards;
        transition:all 0.5s;
        color:white;
        box-shadow:1px 1px 15px rgba(0,0,0,0.15);
        margin-bottom:15px;
        padding:13px 15px;
        height:72px;
        .title{
            font-size:17px;
            
        }
        .content{
            margin-top:5px;
            color:#eee;
            font-size:14px;
        }
    }
}
@keyframes notify-show-hide{
    0%{
        opacity:0;
        transform:translate(100vw,0);
        margin-bottom:15px;
    }
    15%{
        opacity:1;
        transform:translate(0,0);
        margin-bottom:15px;
    }
    85%{
        opacity:1;
        transform:translate(0,0);
        margin-bottom:15px;
    }
    100%{
        opacity:0;
        margin-bottom:-72px;
        display:none;
    }
}
</style>