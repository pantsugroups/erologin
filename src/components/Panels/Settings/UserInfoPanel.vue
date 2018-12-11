<template>
<div class="panel userinfo-panel">
                        <div class="avatar"><img src="https://qwq.moe/img/avatar.jpg" alt=""></div>
                        <div class="user-info">
                            <a>Archeb</a>
                            <div class="tags">
                                <span style="background-color:#96d248">Lv. 233</span>
                                <span>管理员</span>
                            </div>
                        </div>
                        <div class="action-list">
                            <router-link to="/settings/personal"  class="action-item">
                                <span class="mdi mdi-account-edit"></span> 个人设置
                            </router-link>
                            <div class="action-item">
                                <span class="mdi mdi-message-bulleted"></span> 评论管理
                            </div>
                            <router-link to="/settings/push"  class="action-item">
                                <span class="mdi mdi-sync"></span> 推送设置
                            </router-link>
                            <div class="action-item">
                                <span class="mdi mdi-library-books"></span> 书籍管理
                            </div>
                            
                        </div>
                    </div>
</template>
<script>
export default {
    name: 'UserInfoPanel',
    data () {
        return {
            'title':'goushi'
        };
    }
}
</script>
<style scoped lang="less">
.userinfo-panel{
    margin-top:60px;
    .avatar{
        margin-top:-90px;
        text-align:center;
        img{
            height:120px;
            box-shadow: 0 6px 15px rgba(36,37,38,0.1),0 6px 15px rgba(36, 37, 38, 0.1);
            width:120px;
            border-radius:50%;
            
        }
    }
    .user-info{
        margin-top:15px;
        text-align: center;
        font-size:25px;
        color:#333;
        .tags{
            margin-top:5px;
            span{
                background-color: #4ba5f5;
                padding: 1px 8px;
                border-radius: 100px;
                color: #eaeaea;
                font-size:14px;
                color:#fafafa;
            }
        }
    }
    .action-list{
        margin-top:25px;
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        .action-item{
            width: 150px;
            text-align: center;
            color: #868686;
            font-size:15px;
            border-left: 1px dashed #d2d2d2;
            padding-top: 20px;
            flex-shrink: 0;
            cursor:pointer;
            transition:all 0.3s;
            &:hover{
                color:#222;
            }
            &:nth-child(1),&:nth-child(2){
                padding-top:5px;
            }
            &:nth-last-child(1),&:nth-last-child(2){
                padding-bottom:5px;
            }
            &:nth-child(2n-1){
                border-left:none;
            }
            
        }
        
    }
}
</style>