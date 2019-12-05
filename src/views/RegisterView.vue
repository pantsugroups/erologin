<template>
  <div class="main padding-limiter">
    <div class="panel login-panel">
      <div class="double-column">
        
        <div class="panel-narrow">
          <!-- <form class="login-form"> -->
          <!-- <div class="title">
            <span class="mdi mdi-book-open-variant"></span>Ero Login
          </div> -->
          <div class="control-group">
            <label>邮箱</label>
            <div class="controls">
              <input type="text" title="邮箱" value v-model="data.mail" />
              <label class="tips" style="text-align:right;" >写错的话就注册不了咯~</label>
            </div>
          </div>
          <div class="control-group">
            <label>用户名</label>
            <div class="controls">
              <input type="text" title="用户名" value v-model="data.username" />
              <label class="tips" style="text-align:right;" >用作登陆，写了就不能改了哦~</label>
            </div>
          </div>
          <div class="control-group">
            <label>昵称</label>
            <div class="controls">
              <input type="text" title="昵称" value v-model="data.nickname" />
            </div>
          </div>
          <div class="control-group">
            <label>密码</label>
            <div class="controls">
              <input type="password" title="密码" value v-model="data.password" />
            </div>
          </div>
          <div class="control-group">
            <label>重复密码</label>
            <div class="controls">
              <input type="password" title="密码" value v-model="data.password_confirm" />
            </div>
          </div>
          <div class="control-group">
            <label>邀请码</label>
            <div class="controls">
              <input type="text" title="邀请码" value v-model="data.invite_code" />
              <label class="tips" style="text-align:right;" >不是必填，但是有时候又是必填</label>
            </div>
          </div>
          <div class="control-group">
            <label>验证码</label>
            <div class="controls">
              <input type="text" title="验证码" value v-model="data.verify_code" />
              
              <img :src="data.b64_image" style="width:100%;height:60%;" v-on:click="get_verify"/>
            </div>
          </div>
          <div class="controls actions">
            <button v-on:click="register">注册</button>
          </div>
          <!-- </form> -->
        </div>
        <div class="panel-wide">
          <img class="login-img" src="../assets/login.jpg" />
          <a
            class="login-img-source"
            href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=72175889"
          >Source</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",

  components: {},
  created(){
      fetch(this.$config.api_base + "verify", {
        method: "get",
      })
        .then(data => data.json())
        .then(data => {
          if (data.status === 0) {
            this.data.verify_id=data.data.code_id;
            this.data.b64_image=data.data.data;
          } else {
            this.$Notify("获取验证码失败", data.msg, "background-color:#red");
          }
        })
        .catch(data => {
          console.log(data);
          this.$Notify("获取验证码失败", data.msg, "background-color:#red");
        });
  },
  methods: {
    get_verify:function(){
        fetch(this.$config.api_base + "verify", {
        method: "get",
        // mode: "cors",
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        // },
        // credentials: "include",
        // body: "username=" + this.data.username + "&password=" + this.data.passwd
      })
        .then(data => data.json())
        .then(data => {
          if (data.status === 0) {
            this.data.verify_id=data.data.code_id;
            this.data.b64_image=data.data.data;
          } else {
            this.$Notify("获取验证码失败", data.msg, "background-color:#red");
          }
        })
        .catch(data => {
          console.log(data);
          this.$Notify("获取验证码失败", data.msg, "background-color:#red");
          
        });
    },
    register: function() {
      var formData = new FormData();
      formData.append("nickname", this.data.nickname);
      formData.append("username", this.data.username);
      formData.append("mail", this.data.mail);
      formData.append("password", this.data.password);
      formData.append("password_confirm", this.data.password_confirm);
      formData.append("verify_code", this.data.verify_code);
      formData.append("verify_id", this.data.verify_id);
      formData.append("invite_code", this.data.invite_code);
      fetch(this.$config.api_base + "user/register", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        credentials: "include",
        body: "username=" + this.data.username + "&password=" + this.data.password+"&password_confirm="+this.data.password_confirm+"&mail="+this.data.mail+"&nickname="+this.data.nickname+"&verify_code="+ this.data.verify_code+"&verify_id="+this.data.verify_id+"&invite_code="+this.data.invite_code
      })
        .then(data => data.json())
        .then(data => {
          if (data.status === 0) {
            // 登陆成功
            this.$Notify("注册成功", "欢迎加入我们!\n我们发送了一封邮件到你的邮箱作为验证。", "background-color:#9d5321");
            
            
            
            this.$router.push('/')
          } else {
            this.$Notify("注册失败", data.msg, "background-color:#red");

          }
        })
        .catch(data => {
          console.log(data);
          this.$Notify("注册失败", data.msg, "background-color:#red");
          
        });
    }
  },

  data() {
    return {
      data: {
        username: "",
        nickname:"",
        password: "",
        password_confirm:"",
        verify_code:"",
        verify_id:"",
        invite_code:"",
        b64_image:"",
        b64_display:"none",
      }
    };
  }
};
</script>

<style scoped lang="less">
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 63px;
  padding-top: 0;
}
.double-column {
  align-items: center;
}
.login-img {
  max-width: 100%;
}
.title {
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  margin: 0;
  padding: 10px 30px 20px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent !important;
  font-size: 1.5em;
  margin-top: -3px;
  margin-right: 15px;
  .mdi {
    margin-right: 8px;
    font-size: 1.6em;
  }
}
.login-form {
  border-left: 2px solid #eaeaea;
  padding: 30px 0;
  margin-left: 10px;
  transition: all 0.5s;
  &:hover {
    border-left: 2px solid #cacaca;
  }
}
.actions {
  padding: 25px;
  text-align: center;
}
.control-group {
  display: flex;
  padding: 15px 40px;
}
.controls {
  width: 100%;
}
label {
  width: 50px;
  color: #777;
  overflow: hidden;
  padding: 3px;
  font-size: 14px;
  text-align: right;
  flex-shrink: 0;
}
.tips {
  color: #aaa;
  font-size: 13px;
  margin-left: 5px;
  width: 300px;
  text-align: left;
}
input {
  margin: 0 10px;
  width: 85%;
  border: none;
  -webkit-appearance: none;
  outline: none;
  font-size: 14px;
  color: #222;
  padding: 3px 8px;
  border-bottom: 1px solid #dddddd;
  background-color: white;
  transition: all 0.5s;
  &:hover {
    border-color: #aaa;
  }
  &:focus {
    border-color: #999;
  }
}
textarea {
  width: 100%;
  resize: none;
  max-width: 100%;
  outline: none;
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
  &:hover {
    border-color: #aaa;
  }
  &:focus {
    border-color: #999;
  }
}
button {
  cursor: pointer;
  padding: 10px 20px;

  border-radius: 500px;
  border: 2px solid #a7a7a7;
  background-color: transparent;
  color: #757575;
  width: 170px;
  font-size: 15px;
  outline: none;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
  margin-right: 10px;
  &:hover {
    background-color: #af66a6;
    border-color: transparent;
    color: #fafafa;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.15),
      0 6px 15px rgba(36, 37, 38, 0.15), inset 5px 5px 15px transparent;
  }
  &:active {
    box-shadow: 1px 1px 30px transparent, 0 6px 15px transparent,
      inset 0 0 15px rgba(36, 37, 38, 0.2);
  }
}
a {
  color: #1db4ff;
}
.text-content {
  display: block;
  color: #333;
  font-size: 15px;
  padding-left: 20px;
}
</style>
