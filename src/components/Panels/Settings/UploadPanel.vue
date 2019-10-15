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
      <div class="control-group">
              <label>附件</label>
              <input
              type="file"
              @change="updateCover($event)"
              accept="image/png, image/jpeg, image/bmp"
              />
      </div><div class="control-group">
              <label>上传结果：</label>
              <input type="text" title="file" value="" v-model="file"></div>
              <br>
              <br>
    <div v-if="currentTab === 'tab1'">
        <div class="control-group">
              <label>标题</label>
              <div class="controls">
                <input type="text" title="标题" value="" v-model="archive.title"></div>
              
            </div>
            <div class="control-group">
              <label>封面地址</label>
              <div class="controls">
                <input type="text" title="封面地址" value="" v-model="archive.cover"></div>
                <label class="tips">HTTP地址哟</label>
              
            </div>
            <div class="control-group">
              <label>日文标题</label>
              <div class="controls">
                <input type="text" title="日文标题" value="" v-model="archive.jptitle"></div>
            </div>
             <div class="control-group">
              <label>作者</label>
              <div class="controls">
                <input type="text" title="作者" value="" v-model="archive.author"></div>
            </div>
            <div class="control-group">
              <label>内容</label>
              <div class="controls" style="width:100%;height:200px">
                <textarea title="内容" orgname="内容" rows=10 v-model="archive.content"></textarea>
                
              </div>
            </div>
            <br>

            <div class="control-group">
              <label>下载地址</label>
              <div class="controls" style="width:100%;">
                <textarea title="下载地址" orgname="下载地址" rows=4 v-model="archive.pri_content"></textarea>
              </div>
            </div>
            <div class="control-group">
              <label>Tags</label>
              <div class="controls">
                <input type="text" title="Tags" value="" v-model="archive.tags"></div>
              <label class="tips">使用 / 分割</label>
            </div>
            <div class="controls actions">
                <button v-on:click="CreateArchive">保存</button>
            </div>
            
          </div>
          <div v-if="currentTab === 'tab2'">
            <div class="control-group">
              <label>标题</label>
              <div class="controls">
                <input type="text" title="标题" value="" v-model="novel.title"></div>
              
            </div>
            <div class="control-group">
              <label>封面地址</label>
              <div class="controls">
                <input type="text" title="封面地址" value="" v-model="novel.cover"></div>
                <label class="tips">HTTP地址哟</label>
            </div>

            <div class="control-group">
              <label>简介</label>
              <div class="controls" style="width:100%;">
                <textarea title="简介" orgname="简介" rows=4 v-model="novel.description"></textarea>
              </div>
            </div>
            
             <div class="control-group">
              <label>作者</label>
              <div class="controls">
                <input type="text" title="作者" value="" v-model="novel.author"></div>
            </div>

            <div class="control-group">
              <label>Tags</label>
              <div class="controls">
                <input type="text" title="Tags" value="" v-model="novel.tags"></div>
              <label class="tips">使用 / 分割</label>
            </div>
            <div class="controls actions">
                <button v-on:click="CreateNovel">保存</button>
            </div>
          </div>
          <div v-if="currentTab === 'tab3'">
            <div class="control-group">
                <label>小说ID</label>
                <div class="controls">
                  <input type="text" title="小说ID" value="" v-model="volume.novelid"></div>
                
              </div>
              <div class="control-group">
                <label>封面地址</label>
                <div class="controls">
                  <input type="text" title="封面地址" value="" v-model="volume.cover"></div>
                  <label class="tips">HTTP地址哟</label>
              </div>

              <div class="control-group">
                <label>标题</label>
                <div class="controls">
                  <input type="text" title="标题" value="" v-model="volume.title"></div>
              </div>

              <div class="control-group">
                <label>文件</label>
                <input
              type="file"
              @change="upVolume($event)"
              accept="epub/epub"
              />
              </div>
              <div class="controls actions">
                  <button v-on:click="CreateNovel">保存</button>
              </div>
          </div>
          <div v-if="currentTab === 'tab4'">
            <div class="control-group">
          <label>分类名称</label>
        <div class="controls"><input type="text" title="作者" value="" v-model="category"></div>
        <div class="controls actions">
        <select v-model="selected1">
        <option value="1">小说</option>
        <option value="2">文章</option>
        </select>
        </div>
        
        <button v-on:click="CreateCategory">添加</button>
         </div>  


        <div class="control-group">
          <label>小说分类</label>
        <select v-model="selected2">
        <option v-for="novel in novelList" :key=novel v-bind:value="novel.key">
          {{ novel.value }}
          </option>
        </select>

        </div>
        <div class="controls actions">
        <button >删除</button>
         </div>
        <div class="control-group">
          <label>文章分类</label>
        <select v-model="selected3">
        <option v-for="archive in archiveList" :key=archive v-bind:value="archive.key">
          {{ archive.value }}
          </option>
        </select>

        </div>
        <div class="controls actions">
        <button >删除</button>
         </div>

      </div>
      </div>
      
      
    </div>

</template>
<script>
import Tabs from 'vue-tabs-with-active-line';
export default {
    name: 'PersonalSettingsPanel',
    components:{Tabs},
    created(){
      var aid = this.$route.query.archiveid;
      var nid = this.$route.query.novelid;
      if (aid != undefined){
        this.currentTab = "tab1"
        this.archive.id = aid;
        fetch(this.$config.api_base+'archive/'+aid,
        {
          method: 'get',
          mode: 'cors',
          credentials: 'include',
          headers: {

          //  "Authorization": "Bearer "+jwt,
          //  'Content-Type': 'multipart/form-data',
        },
        }).then(data=>data.json()).then(data=>{
          console.log(data);
          if (data.status == 0){
            this.archive.title = data.data.title;
            this.archive.jptitle = data.data.japanese_title;
            this.archive.pri_content = data.data.primary_content;
            this.archive.author = data.data.author;
            this.archive.tags = data.data.tag;
            this.archive.cover = data.data.cover;
            this.archive.content = data.data.content;
          }
        })
      }
      fetch(this.$config.api_base+'category/',
        {
          method: 'get',
          mode: 'cors',
          credentials: 'include',
          headers: {

          //  "Authorization": "Bearer "+jwt,
          //  'Content-Type': 'multipart/form-data',
        },
        }).then(data=>data.json()).then(data=>{
          console.log(data);
          if (data.status == 0 && data.count != 0){
            data.data.forEach(
              Element=>{
                if (Element.type == 1){
                  this.novelList.push({"key":Element.id,"value":Element.title})
                }else if (Element.type == 2){
                  this.archiveList.push({"key":Element.id,"value":Element.title})
                }
              }
            )
          }
        })
      
      if (nid != undefined){
        this.novel.id = nid;
        this.currentTab = "tab2";
        fetch(this.$config.api_base+'novel/'+nid,
        {
          method: 'get',
          mode: 'cors',
          credentials: 'include',
          headers: {

          //  "Authorization": "Bearer "+jwt,
          //  'Content-Type': 'multipart/form-data',
        },
        }).then(data=>data.json()).then(data=>{
          console.log(data);
          if (data.status == 0){
            this.novel.cover = data.data.cover;
            this.novel.title =  data.data.title;
            this.novel.author = data.data.author;
            this.novel.description = data.data.description;
            this.novel.tags = data.data.tags;
            this.novel.ended = data.data.ended;
          }
        })
      }
    },
    data () {
        return {
          selected1: "",
          selected2: "",
          selected3: "",
          category:"",
            novelList:[

            ],
            archiveList:[

            ],
            tabs: [
            { title: ' 创建文章', value: 'tab1' },
            { title: ' 创建小说', value: 'tab2' },
            { title: ' 添加分卷', value: 'tab3' },
            { title: ' 分类管理', value: 'tab4' },
        ],
        unitName:'请选择',
        archive:{
        id:0,
        
        title:"",
        jptitle:"",
        cover:"",
        content:"",
        pri_content:"",
        author:"",
        primary_content:"",
        tags:"",
        
        },
        currentTab: 'tab1',
        file:"",
        novel:{
          id:0,
          title:"",
          author:"",
          cover:"",
          description:"",
          ended :false,
          tags :"",
          level :0,
        },
        volume:{
          novelid:"",
          title:"",
          cover:"",
          file:0,
        }
        };
    },
    methods: {
      
      upVolume(event){
        console.log(event.target.files[0]);
        var formData = new FormData();
      formData.append("type","novel");
      formData.append("file",event.target.files[0]);
      let jwt = localStorage.getItem("jwt");
        if (jwt == null){
            this.$Notify('失败','您的登陆凭据已到期','background-color:#4eb739');
        } 
        fetch(this.$config.api_base+'upload/',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {

           "Authorization": "Bearer "+jwt,
          //  'Content-Type': 'multipart/form-data',
        },
        body:formData
        }).then(data=>data.json()).then(data=>{
          if (data.status == 0){
            this.volume.file = data.id;
            this.$Notify('成功','文件上传成功','background-color:#4eb739');
          }else{
            this.volume.file = 0;
            this.$Notify('失败','文件上传失败','background-color:#4eb739');
          }})
      },
      updateCover(event) {
      console.log(event.target.files[0]);
      var formData = new FormData();
      formData.append("type","img");
      formData.append("file",event.target.files[0]);
      let jwt = localStorage.getItem("jwt");
        if (jwt == null){
            this.$Notify('失败','您的登陆凭据已到期','background-color:#4eb739');
        } 
        fetch(this.$config.api_base+'upload/',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {

           "Authorization": "Bearer "+jwt,
          //  'Content-Type': 'multipart/form-data',
        },
        body:formData
        }).then(data=>data.json()).then(data=>{
          if (data.status == 0){
            this.file = "https://api.ero.ink/img/"+data.data.filename;
            this.$Notify('成功','文件上传成功','background-color:#4eb739');
          }else{
            this.file = "文件上传失败";
            this.$Notify('失败','文件上传失败','background-color:#4eb739');
          }

  })

    },
    CreateCategory(){
      var formData = new FormData();
      formData.append("title",this.category);
      formData.append("type",this.selected1);
      let jwt = localStorage.getItem("jwt");
        if (jwt == null){
            this.$Notify('失败','您的登陆凭据已到期','background-color:#4eb739');
        } 
        fetch(this.$config.api_base+'category/',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {

           "Authorization": "Bearer "+jwt,
          //  'Content-Type': 'multipart/form-data',
        },
        body:formData
        }).then(data=>data.json()).then(data=>{
          if (data.status == 0){
            
            this.$Notify('成功','添加成功','background-color:#4eb739');
          }else{
            
            this.$Notify('失败','添加失败','background-color:#4eb739');
          }

  })
    },
    CreateArchive(){
        let jwt = localStorage.getItem("jwt");
        if (jwt == null  || jwt == "null"){
            this.$Notify('失败','您的登陆凭据已到期','background-color:#4eb739');
        } 
        var formData = new FormData();
        formData.append("title",this.archive.title);
        formData.append("japanese_title",this.archive.jptitle);
        formData.append("author",this.archive.author);
        formData.append("content",this.archive.content);
        formData.append("primary_content",this.archive.pri_content);
        formData.append("cover",this.archive.cover);
        formData.append("tag",this.archive.tags);
        if (this.archive.id == 0){
          var url = this.$config.api_base+'archive/'
          var m = "POST"
        }else{
          var url = this.$config.api_base+'archive/'+ this.archive.id
          m = "put"
        }
        fetch(url,
        {
          method: m,
          mode: 'cors',
          credentials: 'include',
          headers: {

           "Authorization": "Bearer "+jwt,
        },
        body:formData
        }).then(data=>data.json()).then(data=>{
          if (data.status == 0){
            this.$Notify('成功','成功','background-color:#4eb739');
          }else{
            this.$Notify('失败','失败','background-color:#4eb739');
          }
        })

    },
    CreateNovel(){
        let jwt = localStorage.getItem("jwt");
        if (jwt == null  || jwt == "null"){
            this.$Notify('失败','您的登陆凭据已到期','background-color:#4eb739');
        } 
        var formData = new FormData();
        formData.append("title",this.novel.title);
        formData.append("author",this.novel.author);
        formData.append("description",this.novel.description);
        formData.append("cover",this.novel.cover);
        formData.append("tag",this.novel.tags);
        formData.append("ended",this.novel.ended);
        if (this.novel.id == 0){
          var url = this.$config.api_base+'novel/'
          var m = "POST"
        }else{
          var url = this.$config.api_base+'novel/'+ this.novel.id
          m = "put"
        }
        fetch(url,
        {
          method: m,
          mode: 'cors',
          credentials: 'include',
          headers: {

           "Authorization": "Bearer "+jwt,
        },
        body:formData
        }).then(data=>data.json()).then(data=>{
          if (data.status == 0){
            this.$Notify('成功','成功','background-color:#4eb739');
          }else{
            this.$Notify('失败','失败','background-color:#4eb739');
          }
        })

    },
    CreateVolume(){
      let jwt = localStorage.getItem("jwt");
        if (jwt == null  || jwt == "null"){
            this.$Notify('失败','您的登陆凭据已到期','background-color:#4eb739');
        } 
        if (this.volume.file == 0){
          this.$Notify('失败','请先上传分卷','background-color:#4eb739');
        }
        var formData = new FormData();
        formData.append("id",this.volume.novelid);
        formData.append("title",this.volume.title);
        formData.append("file",this.volume.file);
        formData.append("cover",this.volume.cover);

        
        fetch(this.$config.api_base+'volume/',
        {
          method: "post",
          mode: 'cors',
          credentials: 'include',
          headers: {

           "Authorization": "Bearer "+jwt,
        },
        body:formData
        }).then(data=>data.json()).then(data=>{
          if (data.status == 0){
            this.$Notify('成功','成功','background-color:#4eb739');
          }else{
            this.$Notify('失败','失败','background-color:#4eb739');
          }
        })
    },

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
