<template>
<div class="panel volume-panel">
  <div class="volume-list"> 
    <div class="volume-item">
      <div class="volume-cover"><img src="../../assets/volumes/volume1.jpg" /></div>
      <div class="volume-info">
        <span class="volume-title">第11卷 大魔法师的妹妹</span>
        <span class="volume-updtime">更新日期：2018/11/08</span>
      </div>
    </div>
    <div class="volume-item">
      <div class="volume-cover"><img src="../../assets/volumes/volume3.jpg" /></div>
      <div class="volume-info">
        <span class="volume-title">第14卷 红魔的试练</span>
        <span class="volume-updtime">更新日期：2018/12/01</span>
      </div>
    </div>
    <div class="volume-item">
      <div class="volume-cover"><img src="../../assets/volumes/volume2.jpg" /></div>
      <div class="volume-info">
        <span class="volume-title">第15卷 邪教综合征</span>
        <span class="volume-updtime">更新日期：2018/12/18</span>
      </div>
    </div>
    
  </div>
</div>
</template>
<script>
export default {
    name: 'VolumePanel',
    props:['volumes']
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
        padding:10px 0;
        .volume-item:nth-child(2n){
            width:~'calc(50% - 10px)';
            margin-left:10px;
            margin-right:0;
        }
        .volume-item{
            margin-bottom:20px;
            display:flex;
            width:~'calc(50% - 10px)';
            margin-right:10px;
            box-shadow:0 6px 15px rgba(36, 37, 38, 0.08);
            transition:all 0.5s;
            &:hover{
                box-shadow: 5px 12px 20px rgba(36,37,38,0.1);
            }
            
            .volume-info{
                width:100%;
                display:flex;
                flex-direction:column;
                background-color: rgba(255, 255, 255, 0.9);
            }
            .volume-title{
                font-size: 16px;
                padding:8px 10px;
            }
            .volume-cover{
                max-height:130px;

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
        }
    }
}
</style>