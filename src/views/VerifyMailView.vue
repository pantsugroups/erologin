<template>
  <div class="main padding-limiter">
    <div class="panel login-panel">
      <div class="double-column">

        <div class="panel-narrow">

          <div class="control-group">

            <div class="controls">

              <h class="tips" style="text-align:right;" >请打开您注册时填写的邮箱，访问我们发送的链接以便验证您的身份。</h>
            </div>
          </div>

          <div class="controls actions">
            <button v-on:click="sendmail">重新发送验证邮件</button>
          </div>
          <!-- </form> -->
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "LoginView",

  components: {},
  created () {

  },
  methods: {

    sendmail: function () {
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
      if (jwt == "") {
        this.$router.push("/");
      }

      fetch(this.$config.api_base + "user/sendmail", {
        method: "get",
        mode: "cors",
        credentials: "include",
        headers: {
          Authorization: "Bearer " + jwt
        }
      })
        .then(data => data.json())
        .then(data => {
          if (data.status === 0) {
            // 登陆成功
            this.$Notify("发送成功", "邮件发送成功，请到邮箱查收!", "background-color:#9d5321");
          } else {
            this.$Notify("发送失败", data.msg, "background-color:#red");
          }
        })
        .catch(data => {
          console.log(data);
          this.$Notify("发送失败", data.msg, "background-color:#red");
        });
    }
  },

  data () {
    return {
      data: {
        username: "",
        nickname: "",
        password: "",
        password_confirm: "",
        verify_code: "",
        verify_id: "",
        invite_code: "",
        b64_image: "",
        b64_display: "none"
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
