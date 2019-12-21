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
    <div class="panel settings-panel">
      <div v-if="currentTab === 'tab1'">
        <form>
          <div class="control-group">
            <label>推送目标邮箱</label>
            <div class="controls">
              <input type="text" title="推送目标邮箱" value />
            </div>
            <label class="tips">状态：未设置</label>
          </div>

          <div class="control-group">
            <label>提示</label>
            <div class="text-content">
              <p style="margin:0">
                您可以打开
                <a
                  href="https://www.amazon.cn/hz/mycd/myx#/home/settings/payment"
                >Amazon - 我的账户 - 管理我的内容和设备</a>
              </p>
              <span class="tips">↑ 这是中国站 如果您的亚马逊账号属于别的国家 请自行寻找</span>

              <p>选择个人文档设置，查看〖发送至Kindle〗电子邮箱</p>
            </div>
          </div>
          <div class="controls actions">
            <button v-on:click="saveprofile">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "vue-tabs-with-active-line";
export default {
  name: "PersonalSettingsPanel",
  components: { Tabs },
  data () {
    return {
      tabs: [{ title: " 推送设置", value: "tab1" }],
      currentTab: "tab1"
    };
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
