<template>
<div class="book-item">
  <div class="book-cover" v-bind:style="'background-image:url(' +book.cover+ ')'">
    <div class="book-title">{{ book.title }}</div>
    <div class="book-detailed">
      <div class="book-cover-blur" v-bind:style="'background-image:url(' +book.cover+ ')'"></div>
      <div class="edit"><span class="mdi mdi-pencil"></span></div>
      <div class="delete" ><span class="mdi mdi-close" @onClick="deleteClick"></span></div>
      <div class="full-title">{{ book.title }}</div>
      <div class="book-info">
        <div class="source"><span class="mdi mdi-calendar-clock"></span>2018-12-15</div>
        <div class="author"><span class="mdi mdi-account-edit"></span>{{ book.author }}</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: 'BookManagementItem',
    props:{
        book: {
            default:function(){
                return {
                    id:0,
                    title:'胖次群的奇妙日常',
                    cover:'/static/bookUndefined.png',
                    publisher:'胖次Group',
                    author:'Ero Devs',
                    description:'一群死宅要凉技术宅的日常聊(si)天(bi)',
                    tags:'日常 / 女装 / 死宅'
                    
                }
            }
        }
    },
    methods:{
    deleteClick(){
let jwt = localStorage.getItem("jwt");
        if (jwt == null){
            localStorage.setItem("nickname",null);
            location.href = '/';
        }
         fetch(this.$config.api_base+'novel/subscribe/'+book.id,{method: 'delete',credentials:"include",
         headers: {
    "Authorization": "Bearer "+jwt}}).then(data=>data.json()).then(data=>{
      if (data.status===0){
        this.$Notify('登陆成功',data.msg,'background-color:#9d5321');
       
      }
    })
    
      }
    }
}
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
    .edit{
      z-index:1;
      position:absolute;
      left:0;
      top:0;
      width:40px;
      height:40px;
      padding:5px 7px;
      clip-path: ellipse(100% 100% at 0 0);
      background-color:rgba(0,0,0,0.2);
      transition:background-color 0.5s;
      cursor:pointer;
      &:hover{
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .delete{
      z-index:1;
      position:absolute;
      right:0;
      top:0;
      width:40px;
      height:40px;
      padding:4px 15px;
      font-size:18px;
      clip-path: ellipse(100% 100% at 100% 0);
      background-color:rgba(0,0,0,0.2);
      transition:background-color 0.5s;
      cursor:pointer;
      &:hover{
        background-color: rgba(0,0,0,0.5);
      }
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