<template>
<div class="navbar padding-limiter">
    <div class="navbar-group">
        <div class="navbar-logo navbar-item navbar-item-withicon"><span class="mdi mdi-book-open-variant"></span>Ero Light</div>
        <div class="navbar-item">首页</div>
        <div class="navbar-item">发现</div>
    </div>
    <div class="navbar-group">
        <div class="navbar-item" v-on:click="testnotify">登录</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
      return {};
  },
  methods:{
      testnotify:function(){
          this.$Notify('测试','测试Notify!','background-color:#9d5321');
      }
  }
}
</script>

<style scoped lang="less">
.navbar{
    top:0;
    z-index:10;
    left:0;
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
