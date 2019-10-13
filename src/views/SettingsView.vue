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
            <BookSettingsPanel v-bind:user="this.user" v-if="this.$route.params.setpanel === 'book'" />
            <UploadPanel v-if="this.$route.params.setpanel === 'upload'" />
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
import UploadPanel from '../components/Panels/Settings/UploadPanel.vue'

export default {
    name: 'SettingsView',
    components: {
        UserInfoPanel,
        PushSettingsPanel,
        PersonalSettingsPanel,
        CommentSettingsPanel,
        BookSettingsPanel,
        UploadPanel
    },
    created(){
        let jwt = localStorage.getItem("jwt");
        if (jwt == null){
            localStorage.setItem("nickname",null);
            // location.href = '/';
        }
        fetch(this.$config.api_base+'user/',{methods:"GET",credentials:"include",headers: {
    "Authorization": "Bearer "+jwt,
  }}).then(data=>data.json()).then(data=>{
            this.user = data.data;
            if(this.user.avatar == ""){
                this.user.avatar = "https://qwq.moe/img/avatar.jpg"
            }
            if(this.user.status==="admin"){
                this.user.lv_name = "管理员";
                this.user.lv = 2;
            }else if(this.user.lv === "active"){
                this.user.lv_name = "注册用户";
                this.user.lv = 1;
            }else if(this.user.status === inactive){
                this.user.lv_name = "未验证用户"
                this.user.lv = 0;
            }else{
                this.user.lv_name = "忘了写"
                this.user.lv = -1;
            }
            this.user.lv = "Lv. "+this.user.lv
        }).catch(data=>{
            console.log(data);
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
