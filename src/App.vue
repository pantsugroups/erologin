<template>
  <div id="app">
    <NavBar/>
    <div class="single-bg"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{}
}
</script>

<style lang="less">

@bg:url('../img/bg2.jpg');
* {
  font-family: "Microsoft YaHei","Segoe UI", "Lucida Grande", Helvetica, Arial, FreeSans, Arimo, "Droid Sans","wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans","wenquanyi micro hei","Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;
  box-sizing: border-box;
}

.mdi{
    display: inline-block;
    font-family:"Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
}

code,code *{
  font-family:  Consolas, "Microsoft YaHei Light";
}

a {
  text-decoration: none;
  color: inherit;
}

*,*:before,*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}

body {
    margin:0;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#fafafa;
}
.padding-limiter{
    padding-left:15%;
    padding-right:15%;
}
@media(max-width:1440px){
    .padding-limiter{
        padding-left:9%;
        padding-right:9%;
    }
}
@media(max-width:800px){
    body{
        display:none;
    }
    html:after{
        content:'网站升级维护中，造成不便敬请谅解...';
        font-size:20pt;
    }
}
.single-bg{
    background-image:url('assets/single-bg1.jpg');
    background-color:white;
    background-size:cover;
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    z-index:-1;
    &:after{
        content:'';
        position:fixed;
        width:100vw;
        height:100vh;
        top:0;
        left:0;
        background:rgba(246, 246, 246, 0.9);
    }
}
.panel{
    box-shadow: 0 6px 15px rgba(36,37,38,0.1);
    padding:30px;
    border-radius:3px;
    background-color:rgba(255,255,255,0.9);
    .panel-title {
        text-align: center;
        position: relative;
        font-size: 20px;
        color: #555;
        padding: 0 0 10px;
        &:after,&:before {
            content: "";
            width: 34%;
            height: 1px;
            position: absolute;
            top: 40%;
        }
        &:after {
            background: linear-gradient(to right, #bfbfbf, #eee);
            right: 2px;
        }
        &:before {
            background: linear-gradient(to left, #bfbfbf, #eee);
            left: 2px;
        }
    }

}
.panel-wide{
    width:~'calc(100% - 400px)';
}
.panel-narrow{
    width:400px;
}
.double-column{
    display:flex;
    width:100%;
    align-items: baseline;
    flex-wrap:wrap;
}
.main{
    padding-top:120px;
    padding-bottom:40px;
}
</style>
