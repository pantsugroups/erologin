<template>
<div class="personalsettings">
<tabs class="tabs-settings"
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="panel personalsettings-panel">
    <div v-if="currentTab === 'tab1'">
        <form>
            <div class="control-group">
              <label>名字</label>
              <div class="controls">
                <input type="text" title="名字" value=""></div>
              <label class="tips">注：点击左边的头像更换头像</label>
            </div>
            
            <div class="control-group">
              <label>一句话介绍</label>
              <div class="controls">
                <input type="text" title="一句话介绍" value=""></div>
                <label class="tips">比如 “柚子天下第一”</label>
            </div>
            <div class="control-group">
              <label>个人简介</label>
              <div class="controls">
                <textarea title="个人简介" orgname="个人简介" rows=8></textarea>
              </div>
            </div>
            <div class="control-group">
              <label>首页链接</label>
              <div class="controls">
                <input type="text" title="首页链接" value=""></div>
              <label class="tips">没有就留空呗~</label>
            </div>
        </form>
      </div>
      <div v-if="currentTab === 'tab2'">
        <form>
            <div class="control-group">
              <label>安全邮箱</label>
              <div class="controls">
                <input type="text" title="安全邮箱" value=""></div>
              <label class="tips">这不是Kindle推送邮箱！</label>
            </div>
            
            <div class="control-group">
              <label>修改密码</label>
              <div class="controls">
                <input type="password" title="修改密码" value=""></div>
                <label class="tips">如果不修改请留空</label>
            </div>
        </form>
      </div>
      <div v-if="currentTab === 'tab3'">
        <p>摸了</p>
        <p>如果觉得本站好用就跟你的傻逼网友多多宣传就行</p>
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
        };
    },
    methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  }
}
</script>
<style lang="less">
.personalsettings{
    margin-left:30px;
}
.personalsettings-panel{
    margin-top:15px;
    padding:20px 30px;
}
.tabs-settings{
    height:45px;
width:100%;
    flex-shrink: 0;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  margin:0px 30px;
      background-color: rgba(255,255,255,0.8);
  position: relative;
  display:flex;
  padding:0 0px;
  margin: 0 auto;
  .tabs__item {
  display: inline-block;
  margin: 0;
  padding: 10px 20px;
  
  font-size: 15px;
  letter-spacing: 0.8px;
  color: #9d9d9d;
  text-decoration: none;
  font-family:'Material Design Icons';
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
}

.tabs__item_active {
  color: #00362f;
}

.tabs__item:hover {
  //border-bottom: 2px solid gray;
  //color: black;
}

.tabs__item:focus {
  outline: none;
  //border-bottom: 2px solid gray;
  //color: black;
}

.tabs__item:first-child {
  margin-left: 0;
}

.tabs__item:last-child {
  margin-right: 0;
}

.tabs__active-line {
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow:0px -1px 10px rgba(0,0,0,0.06);
  height: 2px;
  background-color: #6ba59d;
  transition: transform 0.4s ease, width 0.4s ease;
}
}

</style>
<style lang="less" scoped>

.control-group {
  display: flex;
  padding: 15px 40px 15px 0;
}
.controls{
    width:100%;
}
label {
  width: 100px;
  color: #777;
  overflow:hidden;
  padding: 3px;
  font-size: 14px;
  text-align: right;
    flex-shrink:0;
  
}
.tips{
    color:#aaa;
    font-size:13px;
    margin-left:5px;
    width:300px;
    text-align:left;
}
input {
  margin: 0 10px;
  width: 250px;
  border: none;
  -webkit-appearance: none;
  outline: none;
  font-size: 14px;
  color: #222;
  padding: 3px 8px;
  border-bottom: 1px solid #dddddd;
  background-color: white;
  transition: all 0.5s;
}
textarea {
  width: 100%;
  resize: none;
  max-width: 100%;

  box-sizing: border-box;
  border: none;
  margin: 0 10px;
  -webkit-appearance: none;
  padding: 6px;
  border-bottom: 1px solid #dddddd;
  font-size: 14px;
  background-color: white;
  color: #333;
  background-size: 135px;
  transition: all 0.5s, background-position 0.3s, background-size 0.3s;
  background-repeat: no-repeat;
  background-position: right bottom;
}
</style>