<template>
  <div class="panel indexpersonal-panel">
    <tabs
      class="tabs-index"
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <p>动态和消息放在一起是不是更好</p>
        <p>啦啦啦啦</p>
        <p>啦啦啦啦</p>
        <p>啦啦啦啦</p>
        <p>啦啦啦啦</p>
        <p>啦啦啦啦</p>
      </div>
      <div v-if="currentTab === 'tab2'">
        <p>暂无消息</p>
      </div>
      <div v-if="currentTab === 'tab3'">
        <p>你这个让我咋写嘛.jpg</p>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "vue-tabs-with-active-line";
export default {
  name: "IndexPersonalPanel",
  components: { Tabs },
  data: () => ({
    tabs: [
      { title: " 动态", value: "tab1" },
      { title: " 消息", value: "tab2" },
      { title: " 个人", value: "tab3" }
    ],
    currentTab: "tab1"
  }),
  methods: {
    handleClick (newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>
<style lang="less">
.indexpersonal-panel {
  flex-shrink: 0;
  background-color: transparent;
  margin-left: 30px;
  height: 350px;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  .content {
    width: 100%;
    background-color: rgba(245, 245, 245, 0.8);
    padding: 10px 30px;
    color: #555;
    height: 100%;
  }
}
.tabs-index {
  width: 100%;
  flex-shrink: 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  margin: 0px 30px;
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  display: flex;
  margin: 0 auto;

  .tabs__item {
    font-family: "Material Design Icons";
    width: 100%;
    display: inline-block;
    margin: 0;
    padding: 12px 0;

    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
  }

  .tabs__item_active {
    color: #333;
  }

  .tabs__item:focus {
    outline: none;
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
    height: 2px;
    background-color: #6ba59d;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
</style>
