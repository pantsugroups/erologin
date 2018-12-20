<template>
<div class="main padding-limiter">
<div class="login">
<pre>


+-------------------------------------------------------------------------+----------------------------------------------+
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                     LOGIN                    |
|                                                                         |                                              |
|                                                                         |                                              |
|    ███████╗██████╗  ██████╗     ██╗     ██╗ ██████╗ ██╗  ██╗████████╗   |                                              |
|    ██╔════╝██╔══██╗██╔═══██╗    ██║     ██║██╔════╝ ██║  ██║╚══██╔══╝   |     UserName: </pre><pre class="charinput" contenteditable=true></pre><pre>                    </pre><pre>           |
|    █████╗  ██████╔╝██║   ██║    ██║     ██║██║  ███╗███████║   ██║      |               +------------------+           |
|    ██╔══╝  ██╔══██╗██║   ██║    ██║     ██║██║   ██║██╔══██║   ██║      |                                              |
|    ███████╗██║  ██║╚██████╔╝    ███████╗██║╚██████╔╝██║  ██║   ██║      |                                              |
|    ╚══════╝╚═╝  ╚═╝ ╚═════╝     ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝      |     PassWord: </pre><pre class="charinput" contenteditable=true></pre><pre>                    </pre><pre>           |
|                                                                         |               +------------------+           |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
|                                                                         |                                              |
+-------------------------------------------------------------------------+----------------------------------------------+



</pre>
</div>
</div>
</template>

<script>

  export default {
    name: 'LoginView',
    components:{},
    data () {return {}}
  }
</script>

<style scoped lang="less">
pre{
  font-family:'consolas';
  text-align:center;
  display:inline;
  background-color:rgba(255,255,255,0.9)
}
.login{
  line-height:1;
  text-align: center;
}
.charinput{
  width:176px;
  position:absolute;
  margin:0;
  text-align:left;
  height:16px;
  outline:none;
  overflow:hidden;
}
</style>
