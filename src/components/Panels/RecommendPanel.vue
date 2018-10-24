<template>
<div class="panel recommend-panel">
                        <div class="panel-title">同类推荐</div>
                        <div class="recommend-list">
                            <div class="recommend-item">
                                <div class="cover">
                                    <img src="../../assets/book6.jpg">
                                </div>
                                <div class="info">
                                    <div class="title">期待在地下城邂逅有错吗</div>
                                    <div class="author">GA文库 · 大森藤野</div>
                                    <div class="description">迷宫都市欧拉丽——这是一座拥有雄伟地下迷宫（通称「地下城」）的巨大都市。名为未知的兴奋、光辉显赫的荣耀，以及与可爱女孩的罗曼史。在这人们的梦想与欲望伺机而动的城市里，少年遇见了一位小小的「神仙」。吃遍所有【眷族】的闭门羹、矢志成为冒险者的少年，与成员零名的神仙，发生了一场命运的邂逅。这是少年的轨迹、女神的纪录。</div>
                                </div>
                            </div>
                            <div class="recommend-item">
                                <div class="cover">
                                    <img src="../../assets/book7.jpg">
                                </div>
                                <div class="info">
                                    <div class="title">爆肝工程师的异世界狂想曲</div>
                                    <div class="author">富士见文库 · 爱七ひろ</div>
                                    <div class="description">正在爆肝加班当中的程式设计师，游戏中名为「佐藤」的铃木一郎（29岁）。原本应该在小睡片刻的他，回过神竟发现自己被放逐到了陌生的异世界！ 连慌乱的闲暇都没有，一大群从未见过的怪物逼近眼前，流星雨自天空倾盆而降——然后转眼间，最强等级的力量和钜额财富都得手了……！？ 就这样，佐藤「温馨，时而严肃，并兼具后宫」的异世界冒険故事就此展开！</div>
                                </div>
                            </div>
                            <div class="recommend-item">
                                <div class="cover">
                                    <img src="../../assets/book5.jpg">
                                </div>
                                <div class="info">
                                    <div class="title">不是真正同伴的我被逐出了勇者队伍，因此决定在边境过上慢生活</div>
                                    <div class="author">娇喘文库 · ざっぽん</div>
                                    <div class="description">“你不是真正的伙伴”在最前线战斗的英雄·红星，被同伴的贤者宣告了战力外，被从勇者的派对中赶出了队伍。“啊，这个时候真是辛苦了啊”，因为没有了红色的事，贤人们都陷入了恐慌之中，他本人却一直很兴奋地在想要搬到边远的地方住进草药屋。“我也可以在这家店工作吗?住家!”突然间的伙伴公主就到自己家去了!?“悠闲快乐的药店经营”、“与公主的情妇生活”、没有得到回报的英雄所展现出的美好的第2人生!</div>
                                </div>
                            </div>
                            <div class="recommend-item">
                                <div class="cover">
                                    <img src="../../assets/book8.jpg">
                                </div>
                                <div class="info">
                                    <div class="title">尼特族的异世界就职记</div>
                                    <div class="author">MF文库J · 桂かすが</div>
                                    <div class="description">23岁的茧居尼特族·山野胜，为了找工作来到就业辅导处，偶然间看到了一则充满谜圈的徵才情报。一路顺利进行到面试阶段，就在签订契约的那一瞬间——胜发现自己站在异世界的土地上。接下来，他得知了一项事实——『世界即将在20年内毁灭』，就算无法阻止世界毁灭，但是只要努力或许还有可能活下来。怀抱着一丝生存希望，以及异世界=后官的满腔热血，胜一路上遇见了魔眼少女、巨乳神官、傲娇魔法师和奴隶少女。胜将会照着自己的步调努力下去！尼特族风格的异世界冒险生活，揭开序幕！</div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<script>
export default {
    name: 'RecommendPanel',
    data () {
        return {
            'title':'goushi'
        };
    }
}
</script>
<style scope lang="less">
.recommend-panel{
    margin-top:100px;
    flex-shrink:0;
    margin-left:30px;
    .recommend-list{
        margin-top:20px;
        color:#666;
        .recommend-item{
            overflow:hidden;
            display:flex;
            margin-bottom:20px;
            transition:all 0.5s;
            border:1px dashed #dadada;
            border-radius:12px;
            cursor: pointer;
            //box-shadow: 0 6px 15px rgba(36,37,38,0.05);
            .cover img{
                width:80px;
                height:100%;
            }
            .info{
                padding:10px 10px;
                .title{
                    color:#555;
                    overflow:hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size:17px;
                    width:200px;
                }
                .author{
                    color:#969696;
                    font-size:12px;
                    padding:2px 0 5px;
                    border-bottom: 1px dashed #dadada;
                }
                .description{
                    color:#888;
                    margin-top:5px;
                    width:200px;
                    font-size:13px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    line-height:1.4;
                    height:55px;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }
            }
            &:hover{
                background-color:rgba(34,35,36,0.06);
                
                //box-shadow: 0 6px 15px rgba(36,37,38,0.1),0 6px 15px rgba(36,37,38,0.1);
                //transform:translate(0,-1px);
            }
        }
    }
}
</style>