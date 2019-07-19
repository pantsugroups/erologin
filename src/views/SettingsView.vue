<template>
<div class="main padding-limiter">
    <div class="double-column">
        <div class="panel-narrow">
            <UserInfoPanel v-bind:user="this.user"/>
        </div>
        <div class="panel-wide">
            <PersonalSettingsPanel v-if="this.$route.params.setpanel === 'personal'" />
            <PushSettingsPanel v-if="this.$route.params.setpanel === 'push'" />
            <CommentSettingsPanel v-if="this.$route.params.setpanel === 'comment'" />
            <BookSettingsPanel v-if="this.$route.params.setpanel === 'book'" />
        </div>
    </div>
</div>
</template>

<script>

import UserInfoPanel from '../components/Panels/Settings/UserInfoPanel.vue'
import PersonalSettingsPanel from '../components/Panels/Settings/PersonalSettingsPanel.vue'
import PushSettingsPanel from '../components/Panels/Settings/PushSettingsPanel.vue'
import CommentSettingsPanel from '../components/Panels/Settings/CommentSettingsPanel.vue'
import BookSettingsPanel from '../components/Panels/Settings/BookSettingsPanel.vue'
export default {
    name: 'SettingsView',
    components: {
        UserInfoPanel,
        PushSettingsPanel,
        PersonalSettingsPanel,
        CommentSettingsPanel,
        BookSettingsPanel
    },
    created(){
        fetch(this.$config.api_base+'auth/',{credentials:"include"}).then(data=>data.json()).then(data=>{
            this.user = data.data.user;
            console.log(this.user);
            this.user.username = this.user.nickname;
            if(this.user.avatar == ""){
                this.user.avatar = "https://qwq.moe/img/avatar.jpg"
            }
            if(this.user.lv===2){
                this.user.lv_name = "管理员"
            }else if(this.user.lv === 1){
                this.user.lv_name = "注册用户"
            }else if(this.user.lv === 0){
                this.user.lv_name = "未验证用户"
            }
            this.user.lv = "Lv. "+this.user.lv
        })
       
    },
    data() {
        return {
            user:"",
        };
    }
}
</script>

<style scoped lang="less">
.double-column{
    align-items:flex-start;
}
</style>
