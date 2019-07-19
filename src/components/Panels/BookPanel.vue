<template>
<div class="panel book-panel">
    <div class="book-cover">
        
        <img v-bind:src="book.cover" />
    </div>
    <div class="book-info">
        <div class="content">
            <div class="title-container">
                <div class="title">{{ book.title }}
                    <div class="author">{{ book.author }}</div>
                </div>
                <div class="rate"></div>
            </div>
            <div class="description" v-html="book.description">
            </div>
            
        </div>
        <div class="action">
            <div class="tags">{{ book.tags }}</div>
            <a class="read"><span class="mdi mdi-play"></span> 立即阅读</a>
            <a class="read push"><span class="mdi mdi-download"></span> 推送</a>
            <a class="read favourite" v-on:click="subscribe"><span class="mdi mdi-cards-heart" ></span> {{this.is_subscribe}}</a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            is_subscribe:"订阅",
        }
    },
    
    created(){
        fetch(this.$config.api_base+"light/novel/is_subscribe/"+this.$route.params.id,{credentials:"include"}).then(data=>data.json()).then(data=>{
            if (data.code === 0){
                if (data.data.is_subscribe === 1){
                    this.is_subscribe = "取消订阅"
                } 
            }
        })
    },
    name: 'BookPanel',
    
    methods:{
        subscribe:function(){
            fetch(this.$config.api_base+"light/novel/subscribe/"+this.$route.params.id,{credentials:"include"}).then(data=>data.json()).then(data=>{
                if(data.code===0){
                    if (this.is_subscribe == "订阅"){
                        this.$Notify('成功','订阅成功!','background-color:#green');
                        this.is_subscribe = "取消订阅"
                    }else{
                        this.$Notify('成功','取消订阅成功!','background-color:#green');
                        this.is_subscribe = "订阅"
                    }
                    
                }else{
                    this.$Notify('失败','失败！','background-color:#red');
                }
            }).catch(data=>{
                this.$Notify('错误','未知错误','background-color:#red');
            })
        }
    },
    props:{
        book: {
            default:function(){
                return {
                    title:'加载中...',
                    cover:'/static/bookUndefined.png',
                    publisher:'加载中...',
                    author:'Ero Devs',
                    description:'加载中...',
                    tags:'日常 / 女装 / 死宅'
                    
                }
            }
        }
    }
}
</script>

<style scope lang="less">
.book-panel{
    
    margin-top:50px;
    padding:20px;
    display:flex;
    .book-cover{
        img{
            margin-top:-80px;
            width:258px;
            margin-left:-30px;
            margin-bottom:-80px;
            box-shadow:0 6px 15px rgba(36, 37, 38, 0.2);
        }
    }
    .book-info{
        margin-left:35px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        .title-container{
            display:flex;
            justify-content: space-between;
        }
        .title{
            padding:5px 0;
            font-size:25px;
            color:#333;
            font-weight:300;
            white-space:none;
            .author{
                margin-top:-3px;
                margin-left:3px;
                color:#969696;
                font-size:15px;
            }
        }
        .description{
            font-size:15px;
            margin-top: 5px;
            line-height:1.5;
        }
        .rate{
            font-size:30px;
        }
        .tags{
            margin-bottom:25px;
            font-size:14px;
            color:#969696;
        }
        .action{
            padding:0 0 15px;
            .read{
                cursor:pointer;
                padding:10px 20px 12px;
                background-color:#2196F3;
                border-radius:500px;
                color:#fafafa;
                transition:all 0.3s;
                text-shadow:1px 1px 8px rgba(0,0,0,0.15);
                margin-right:10px;
                .mdi{
                    margin-right:5px;
                }
                &:hover{
                    box-shadow:1px 1px 30px rgba(0,0,0,0.1),0 6px 15px rgba(36, 37, 38, 0.1),inset 5px 5px 15px transparent;
                }
                &:active{
                    box-shadow:1px 1px 30px transparent,0 6px 15px transparent,inset 0 0 15px rgba(36, 37, 38, 0.2);
                }
            }
            .favourite{
                background-color:rgb(255, 118, 118);
            }
            .push{
                background-color:#00c6ef;
            }
        }
    }
}
</style>