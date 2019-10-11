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
    <div class="panel settings-panel">
    <div v-if="currentTab === 'tab1'">
        <div class="control-group">
              <label>标题</label>
              <div class="controls">
                <input type="text" title="标题" value="" v-model="title"></div>
              
            </div>
            <div class="control-group">
              <label>封面地址</label>
              <div class="controls">
                <input type="text" title="封面地址" value="" v-model="cover"></div>
                <button>上传</button>
            </div>
            <div class="control-group">
              <label>日文标题</label>
              <div class="controls">
                <input type="text" title="日文标题" value="" v-model="jptitle"></div>
            </div>
             <div class="control-group">
              <label>作者</label>
              <div class="controls">
                <input type="text" title="作者" value="" v-model="author"></div>
            </div>
            <div class="control-group">
              <label>内容</label>
              <div class="controls" style="width:100%">
                <textarea title="内容" orgname="内容" rows=8 v-model="content"></textarea>
              </div>
            </div>
            <div class="control-group">
              <label>Tags</label>
              <div class="controls">
                <input type="text" title="Tags" value="" v-model="tags"></div>
              <label class="tips">没有就留空呗~</label>
            </div>
            <div class="controls actions">
                <button>保存</button>
            </div>
      </div>
      <div v-if="currentTab === 'tab2'">
        
      </div>
    </div>
</div>
</template>
<script>
import Tabs from 'vue-tabs-with-active-line';
export default {
    name: 'PersonalSettingsPanel',
    components:{Tabs},
    data () {
        return {
            tabs: [
            { title: ' 创建文章', value: 'tab1' },
            { title: ' 创建小说', value: 'tab2' },
        ],
        currentTab: 'tab1',
        title:"",
        jptitle:"",
        cover:"",
        content:"",
        author:"",
        primary_content:"",
        tags:"",
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
