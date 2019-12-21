<template>
  <div class="settings">
    <tabs
      class="tabs-settings"
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div v-if="currentTab === 'tab1'">
      <MyCommentItem v-for="c in comments" :key="c.content" :comment="c" />
    </div>
  </div>
</template>
<script>
import Tabs from "vue-tabs-with-active-line";
import MyCommentItem from "@/components/Items/MyCommentItem.vue";
export default {
  name: "CommentSettingsPanel",
  components: { Tabs, MyCommentItem },
  data () {
    return {
      tabs: [
        { title: " 我的评论", value: "tab1" },
        { title: " 管理评论", value: "tab2" }
      ],
      currentTab: "tab1",
      comments: []
    };
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
    if (jwt == null) {
      localStorage.setItem("nickname", null);
      location.href = "/";
    }
    fetch(this.$config.api_base + "user/comments", {
      credentials: "include",
      headers: {
        Authorization: "Bearer " + jwt
      }
    })
      .then(data => data.json())
      .then(data => {
        if (data.status === 0 && data.count != 0) {
          data.data.forEach(element => {
            element.content = "<p>" + element.title + "</p>";
            if (element.type == 1) {
              element.origin = "/game/" + element.raw;
            } else {
              element.origin = "/novel/" + element.raw;
            }
            element.originName = element.raw_title;
            element.time = Object.assign(element.time);
            element.author = element.author_name;
            this.comments.push(element);
          });
        }
      });
  },
  methods: {
    handleClick (newTab) {
      this.currentTab = newTab;
    },
    saveprofile () {
      this.$Notify(
        "提示",
        "已发送一封验证邮件到您的设备上，请点击邮件中的链接进行验证",
        "background-color:#4eb739"
      );
    }
  }
};
</script>
<style lang="less">
@import "tabs.less";
</style>
<style lang="less" scoped>
@import "settings.less";
</style>
