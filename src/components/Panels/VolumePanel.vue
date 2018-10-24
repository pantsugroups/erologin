<template>
<div class="panel volume-panel">
                        <div class="panel-title">章节目录</div>
                        <div class="volume-list"> <span class="volume-title">第一卷 啊啊，没用的女神大人</span>

                            <div class="chapter-list">
                                <div class="chapter-item">
                                    <div class="chapter-name">序章</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">和这个自称女神转生到异世界！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">以这只右手偷取宝物（内裤）!</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">在这座湖中加入鲜榨自称女神汁！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">解决这场不像话的战斗！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">终章</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">后记</div>
                                </div>
                            </div> <span class="volume-title">第二卷 中二病也想当魔女</span>

                            <div class="chapter-list">
                                <div class="chapter-item">
                                    <div class="chapter-name">序章</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">与真正的伙伴进行交换！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">让迷宫的主人得到安息！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">向幽灵少女伸出爱之手！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">为美好的店家献上祝福！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">蛮横的要塞燃起终焰！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">终章</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">后记</div>
                                </div>
                            </div> <span class="volume-title">第三卷 你被召唤咯，达克妮丝小姐。</span>

                            <div class="chapter-list">
                                <div class="chapter-item">
                                    <div class="chapter-name">序章</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">为不当审判请求救援！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">让红魔女孩结交朋友！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">为贵族千金促成良缘！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">使面具骑士成为隶属！</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">终章</div>
                                </div>
                                <div class="chapter-item">
                                    <div class="chapter-name">后记</div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<script>
export default {
    name: 'VolumePanel',
    data () {
        return {
            'title':'goushi'
        };
    }
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