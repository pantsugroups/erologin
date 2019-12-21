<template>
  <div class="main padding-limiter">
    <div class="double-column">
      <div class="panel-narrow">
        <UserInfoPanel v-bind:user="this.user" />
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
import UserInfoPanel from "@/components/Panels/Settings/UserInfoPanel.vue";
import PersonalSettingsPanel from "@/components/Panels/Settings/PersonalSettingsPanel.vue";
import PushSettingsPanel from "@/components/Panels/Settings/PushSettingsPanel.vue";
import CommentSettingsPanel from "@/components/Panels/Settings/CommentSettingsPanel.vue";
import BookSettingsPanel from "@/components/Panels/Settings/BookSettingsPanel.vue";
import UploadPanel from "@/components/Panels/Settings/UploadPanel.vue";

export default {
  name: "SettingsView",
  components: {
    UserInfoPanel,
    PushSettingsPanel,
    PersonalSettingsPanel,
    CommentSettingsPanel,
    BookSettingsPanel,
    UploadPanel
  },
  created () {
    function getCookie (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    }
    const jwt = getCookie("token");
    if (jwt == "") {
      this.$router.push("/");
    }
    fetch(this.$config.api_base + "user/", {
      methods: "get",
      credentials: "include",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + jwt
      }
    })
      .then(data => data.json())
      .then(data => {
        if (data.status == 0) {
          this.user = data.data;

          if (this.$route.query.referer != undefined) {
            window.location.href = this.$route.query.referer;
          }
          if (this.user.avatar == "") {
            this.user.avatar = "https://qwq.moe/img/avatar.jpg";
          }
          if (this.user.status === "admin") {
            this.user.lv_name = "管理员";
            this.user.lv = 2;
          } else if (this.user.status === "active") {
            this.user.lv_name = "注册用户";
            this.user.lv = 1;
          } else if (this.user.status === "inactive") {
            this.user.lv_name = "未验证用户";
            this.user.lv = 0;
          } else {
            this.user.lv_name = "忘了写";
            this.user.lv = -1;
          }
          this.user.lv = "Lv. " + this.user.lv;
        } else if (data.status == 403) {
          this.$Notify("注意", "您还未验证邮箱，请先验证邮箱！", "background-color:#9d5321");
          this.$router.push("/verify");
        }
      })
      .catch(data => {
        console.log(data);
        this.$Notify("登陆失败", "登陆令牌已经过期，请重新登陆!", "background-color:#9d5321");
        this.$router.push("/");
        this.$cookies.remove("token");
      });
  },
  data () {
    return {
      user: ""
    };
  }
};
</script>

<style scoped lang="less">
.double-column {
  align-items: flex-start;
}
</style>
