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
    <div class="BookManagementList" v-if="currentTab === 'tab1'">
      <BookManagementItem v-for="n in novels" :key="n.id" :book="n" />
    </div>
    <div class="BookManagementList" v-if="currentTab === 'tab2'&& user.lv_name == '管理员'">
      <BookManagementItem v-for="n in all_novels" :key="n.id" :book="n" :types="type1" />
    </div>
    <div class="BookManagementList" v-if="currentTab === 'tab3'&& user.lv_name == '管理员'">
      <BookManagementItem v-for="n in all_archive" :key="n.id" :book="n" :types="type1" />
    </div>
  </div>
</template>
<script>
import Tabs from "vue-tabs-with-active-line";
import BookManagementItem from "../../Items/BookManagementItem.vue";
export default {
  name: "BookSettingsPanel",
  components: { Tabs, BookManagementItem },
  props: {
    user: {
      default: function() {
        return {
          lv: "Lv. 1",
          lv_name: "普通用户",
          avatar: "https://qwq.moe/img/avatar.jpg",
          username: "aaa"
        };
      }
    }
  },
  created() {
    if (this.user.lv_name == "管理员") {
      this.tabs.push(
        { title: " 管理书籍", value: "tab2" },
        { title: " 管理文章", value: "tab3" }
      );
    }
    let jwt = localStorage.getItem("jwt");
    if (jwt == null) {
      localStorage.setItem("nickname", null);
      location.href = "/";
    }
    fetch(this.$config.api_base + "user/book?page_size=30", {
      credentials: "include",
      headers: {
        Authorization: "Bearer " + jwt
      }
    })
      .then(data => data.json())
      .then(data => {
        if (data.status === 0 && data.count != 0) {
          data.data.forEach(element => {
            element.publisher = "胖次Group";
            element.update_time = new Date(parseInt(element.created_at) * 1000)
              .toLocaleString()
              .replace(/:\d{1,2}$/, " ");
            this.novels.push(element);
          });
        }
      });
    fetch(this.$config.api_base + "novel/?page_size=30", {
      credentials: "include"
    })
      .then(data => data.json())
      .then(data => {
        if (data.status === 0 && data.count != 0) {
          data.data.forEach(element => {
            element.publisher = "胖次Group";
            element.type = "novelid";
            element.update_time = new Date(parseInt(element.created_at) * 1000)
              .toLocaleString()
              .replace(/:\d{1,2}$/, " ");
            element.author = element.create_name;
            this.all_novels.push(element);
          });
        }
      });
    fetch(this.$config.api_base + "archive/?page_size=30", {
      credentials: "include"
    })
      .then(data => data.json())
      .then(data => {
        if (data.status === 0 && data.count != 0) {
          data.data.forEach(element => {
            element.publisher = "胖次Group";
            element.type = "archiveid";
            element.update_time = new Date(parseInt(element.created_at) * 1000)
              .toLocaleString()
              .replace(/:\d{1,2}$/, " ");
            this.all_archive.push(element);
          });
        }
      });
  },

  data() {
    return {
      type1: "admin",
      novels: [],
      all_novels: [],
      all_archive: [],
      tabs: [{ title: " 我的书架", value: "tab1" }],
      currentTab: "tab1"
    };
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    saveprofile() {
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
.BookManagementList {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 15px;
}
</style>