<template>
<div class="settings">
<tabs class="tabs-settings"
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
        <div v-if="currentTab === 'tab1'">
            <MyCommentItem />
            <MyCommentItem />
            <MyCommentItem />
            <MyCommentItem />
            <MyCommentItem />
            <MyCommentItem />
    </div>
</div>
</template>
<script>
import Tabs from 'vue-tabs-with-active-line';
import MyCommentItem from '../../Items/MyCommentItem.vue';
export default {
    name: 'CommentSettingsPanel',
    components:{Tabs,MyCommentItem},
    data () {
        return {
            tabs: [
            { title: ' 我的评论', value: 'tab1' }
        ],
        currentTab: 'tab1',
        };
    },
    methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    saveprofile(){
        this.$Notify('提示','已发送一封验证邮件到您的设备上，请点击邮件中的链接进行验证','background-color:#4eb739');
    }
  }
}
</script>
<style lang="less">
@import 'tabs.less';
</style>
<style lang="less" scoped>
@import 'settings.less';
</style>