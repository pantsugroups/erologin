<template>
<div class="panel volume-panel">
  <div class="volume-list" > 
    
    <div class="volume-item" v-for="volume in volumes" :key="volume">
      <div class="volume-cover"><img v-bind:src="volume.cover" /></div>
      <div class="volume-info">
        <span class="volume-title">{{volume.title}}</span>
        <span class="volume-updtime">{{volume.update_time}}</span>
        <div class="volume-actions">
          <a class="btn" v-on:click="download(volume.vid)" ><span class="mdi mdi-download"></span></a>
          <a class="btn"><span class="mdi mdi-sync"></span></a>
          <a class="btn"><span class="mdi mdi-bug"></span></a>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
    name: 'VolumePanel',
    props:['volumes'],
    methods:{
      download:function(vid){
          fetch(this.$config.api_base+"light/stream/download/"+vid,{credentials:"include"}).then(data=>data.json()).then(data=>{
            if(data.code === 0){
              this.$Notify('成功','正在开始下载!','background-color:#green');
              window.location.href=this.$config.api_base+"light/stream/"+data.downloads.file+"?token="+data.downloads.token+"&hash="+data.downloads.hash+"&name="+data.downloads.name;

            }else{
              this.$Notify('失败',data.msg,'background-color:#green');
            }
          }).catch(data=>{
            this.$Notify('错误','未知错误!','background-color:#green');
          })
      }
    }
}
</script>

<style scope lang="less">
.volume-panel{
    margin-top:100px;
    padding:0;
    background-color:transparent;
    box-shadow:none;
    .volume-list{
        color:#666;
        display:flex;
        flex-wrap:wrap;
        .volume-item:nth-child(3n){
            width:~'calc(33.3% - 14px)';
            margin-left:10px;
            margin-right:0;
        }
        .volume-item:nth-child(3n-1){
            width:~'calc(33.3% - 14px)';
            margin-left:10px;
            margin-right:10px;
        }
        .volume-item:nth-child(3n-2){
            width:~'calc(33.3% - 14px)';
            margin-right:10px;
            margin-left:0;
        }
        .volume-item{
            padding:10px;
            margin-bottom:20px;
            border-radius:3px;
            display:flex;
            overflow:hidden;
            margin-right:5px;
            box-shadow:0 6px 15px rgba(36, 37, 38, 0.08);
            background-color: rgba(255, 255, 255, 0.9);
            transition:all 0.5s;
            &:hover{
                box-shadow: 5px 12px 20px rgba(36,37,38,0.1);
            }
            
            .volume-info{
                width:100%;
                display:flex;
                flex-direction:column;
            }
            .volume-title{
                font-size: 16px;
                padding:4px 0px 4px 10px;
            }
            .volume-cover{
                height:90px;
                width:70px;
                box-shadow:0px 2px 15px rgba(36, 37, 38, 0.2);
            }
            
            .volume-cover img{
                height:100%;
            }
            .volume-updtime{
                font-size:13px;
                padding:8px 10px;
                color:#999;
                border-top:1px dashed #ccc;
            }
            .volume-actions{
              padding:0 10px;
              display:flex;
              .btn{
                cursor:pointer;
                display:flex;
                align-items:center;
                
                justify-content:center;
                width:22px;
                height:22px;
                font-size:16px;
                border:1px dashed #cacaca;
                border-radius:50%;
                color:#666;
                transition:all 0.3s;
                text-shadow:1px 1px 8px rgba(0,0,0,0.15);
                margin-right:8px;
                &:hover{
                    //box-shadow:1px 1px 30px rgba(0,0,0,0.1),0 6px 15px rgba(36, 37, 38, 0.1),inset 5px 5px 15px transparent;
                    background-color:#dadada;
                    //color:#fafafa;
                }
                &:active{
                    box-shadow:1px 1px 30px transparent,0 6px 15px transparent,inset 0 0 15px rgba(36, 37, 38, 0.2);
                }
              }
            }
        }
    }
}
</style>