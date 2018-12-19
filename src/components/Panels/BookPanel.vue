<template>
<div class="panel book-panel">
    <div class="book-cover">
        <img src="../../assets/book3.jpg">
    </div>
    <div class="book-info">
        <div class="content">
            <div class="title-container">
                <div class="title">{{ book.title }}
                    <div class="author">{{ book.publisher }} · {{ book.author }}</div>
                </div>
                <div class="rate"></div>
            </div>
            <div class="description" v-html="book.description">
            </div>
            
        </div>
        <div class="action">
            <div class="tags">{{ book.tags }}</div>
            <a class="read"><span class="mdi mdi-play"></span> 立即阅读</a>
            <a class="read push"><span class="mdi mdi-download"></span> 下载 / 推送</a>
            <a class="read favourite"><span class="mdi mdi-cards-heart"></span> 收藏订阅</a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'BookPanel',
    props:{
        book: {
            default:function(){
                return {
                    title:'胖次群的奇妙日常',
                    cover:'/static/bookUndefined.png',
                    publisher:'胖次Group',
                    author:'Ero Devs',
                    description:'一群死宅要凉技术宅的日常聊(si)天(bi)',
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