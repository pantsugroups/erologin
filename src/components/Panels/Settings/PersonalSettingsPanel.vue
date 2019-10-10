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
        <!-- <form> -->
            <div class="control-group">
              <label>名字</label>
              <div class="controls">
                <input type="text" title="名字" value="" v-model="nickname"></div>
              <label class="tips">注：点击左边的头像更换头像</label>
            </div>
            
            <div class="control-group">
              <label>一句话介绍</label>
              <div class="controls">
                <input type="text" title="一句话介绍" value="" v-model="hito"></div>
                <label class="tips">比如 “柚子天下第一”</label>
            </div>
            <div class="control-group">
              <label>个人简介</label>
              <div class="controls" style="width:100%">
                <textarea title="个人简介" orgname="个人简介" rows=8 v-model="bio"></textarea>
              </div>
            </div>
            <div class="control-group">
              <label>首页链接</label>
              <div class="controls">
                <input type="text" title="首页链接" value="" v-model="website"></div>
              <label class="tips">没有就留空呗~</label>
            </div>
            <div class="controls actions">
                <button v-on:click="saveprofile">保存</button>
            </div>
        <!-- </form> -->
      </div>
      <div v-if="currentTab === 'tab2'">
        <!-- <p>请到 <a href="https://login.ero.ink">https://login.ero.ink</a> 管理您的安全设置</p> -->
        <p>前端咕咕咕ing，你让我写我也不会写啊</p>
      </div>
      <div v-if="currentTab === 'tab3'">
        <p>如果觉得本站好用，请跟您的网友多多宣传</p>
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
            { title: ' 基本资料', value: 'tab1' },
            { title: ' 安全设置', value: 'tab2' },
            { title: ' 邀请注册', value: 'tab3' }
        ],
        currentTab: 'tab1',
        nickname:"",
        bio:"",
        hito:"",
        website:"",
        };
    },
    methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    saveprofile(){
        console.log(1);
      let jwt = localStorage.getItem("jwt");
      if (jwt == null){
            localStorage.setItem("nickname",null);
            // location.href = '/';
        }
      
      fetch(this.$config.api_base+"user/",{method: 'PUT',
          headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Authorization": "Bearer "+jwt,
          },credentials:"include",
          body:"nickname="+this.nickname+"&hito="+this.hito+"&bio="+this.bio+"&website="+this.website
          }).then(data=>data.json()).then(data=>{
              if(data.status ===0){
                this.$Notify('成功','您的个人信息已成功保存','background-color:#4eb739');
              }else{

                this.$Notify('失败',data.msg,'background-color:#4eb739');
              }
          }).catch(data=>{
            this.$Notify('错误','未知错误','background-color:#4eb739');
            if(data.message == "invalid or expired jwt"){
              // 
              localStorage.setItem("jwt",null);
              localStorage.setItem("nickname",null);
              location.href = "/"
      
            }
          })
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