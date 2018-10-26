<template>
<div class="panel volume-panel">
  <div class="panel-title">章节目录</div>
  <div class="volume-list"> 
    <div class="volume-item" v-for="volume in volumes">
      <span class="volume-title">{{ volume.title }}</span>
      <div class="chapter-list">
        <div class="chapter-item" v-for="chapter in volume.chapters">
          <div class="chapter-name">{{chapter}}</div>
        </div>
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
    
    .volume-list{
        color:#666;
        padding:10px 0;
        .volume-title{
            font-size: 14px;
            margin: 10px 0 -16px 30px;
            padding:0 5px;
            background: #ffffff;
        }
        .chapter-list{
            display:flex;
            flex-wrap:wrap;
            counter-reset: chapter-count;
            margin-bottom:30px;
            justify-content: space-between;
            border:1px dashed #dadada;
            padding:10px 10px 15px 20px;
            margin-top:-8px;
            border-radius:12px;
            .chapter-item{
                background-color: #eaeaea;
                padding: 5px 8px;
                border-radius: 100px;
                font-size: 14px;
                color: #333;
                align-items: center;
                transition:all 0.3s;
                width: 235px;
                margin-top: 15px;
                cursor: pointer;
                margin-right: 15px;
                display: flex;
                &:before {
                    counter-increment: chapter-count;
                    content: counter(chapter-count);
                    padding: 2px;
                    transition:all 0.3s;
                    border-radius: 50%;
                    width: 23px;
                    text-align: center;
                    flex-shrink: 0;
                    height: 23px;
                    background-color: #dfdfdf;
                    color: #555;
                }
                &:hover{
                    background-color:#64b399;
                    color:#fafafa;
                    box-shadow: 0 6px 15px rgba(36,37,38,0.1),inset 0 0 15px transparent;
                    &:before{
                        background-color:#508f7a;
                        color:#dfecd6;
                    }
                }
                &:active{
                    box-shadow: 0 6px 15px transparent,inset  0 0 15px rgba(36,37,38,0.2);
                }
                .chapter-name{
                    font-size:13px;
                    overflow:hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding:0 7px 2px;
                }
            }
        }
    }
}
</style>