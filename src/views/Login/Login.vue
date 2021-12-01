<template>
  <div id="login" class="login">
    <div class="login_title">
      <img src="@/assets/logo.png" alt="" />
      通用后台管理系统
    </div>
    <div v-show="isLogin" class="login_out">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
      >
        <h3 class="title">{{ title }}</h3>
        <div class="wel_title">
          <span>还没有账号了？</span><a>注册</a>
        </div>
        <el-form-item prop="username" label="账号" style="letter-spacing: 7px">
          <el-input
            v-model="loginForm.username"
            type="text"
            auto-complete="off"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码" style="letter-spacing: 7px">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="请填写登录密码"
            @keyup.enter.native="handleLogin"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="code" label="验证码">
          <el-input
            v-model="loginForm.code"
            auto-complete="off"
            placeholder="验证码"
            style="width: 40%"
            @keyup.enter.native="handleLogin"
          ></el-input>
          <div class="login-code">
            <img :src="codeUrl" class="login-code-img" @click="getCode" />
          </div>
        </el-form-item> -->
        <el-checkbox
          v-model="loginForm.rememberMe"
          style="margin: 0px 0px 25px 0px; color: #000; float: left"
          >记住我</el-checkbox
        >
        <!-- <a class="forget_titlt">忘记密码?</a> -->
        <el-form-item style="width: 100%">
          <el-button
            :loading="loading"
            size="medium"
            type="primary"
            style="width: 100%"
            @click.native.prevent="handleLogin"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div v-show="isRegister">
      <div>
        <el-form
          ref="registerForm"
          :model="registerForm"
          :rules="resgiterRules"
          class="register-form"
          style="padding: 25px 30px 25px 34px"
        >
          <div class="title_s">
            <h3 class="title">欢迎注册</h3>
            <div class="wel_title">
              <span>已经有账号了？</span>
              <a @click="goTologin">登录</a>
            </div>
            <div class="title_b"></div>
            <div class="title_line_s"></div>
          </div>
          <el-form-item prop="access_name" label="接入方名称">
            <el-input
              v-model="registerForm.access_name"
              size="medium"
              type="text"
              class="inputing"
              auto-complete="off"
              placeholder="请输入接入方名称"
            ></el-input>
          </el-form-item>

          <el-form-item prop="access_abbreviation" label="接入方简称">
            <el-input
              v-model="registerForm.access_abbreviation"
              size="medium"
              type="text"
              class="inputing"
              auto-complete="off"
              placeholder="请输入接入方简称"
            ></el-input>
          </el-form-item>
          <el-form-item prop="access_type" label="接入类型">
            <el-input
              v-model="registerForm.access_type"
              size="medium"
              type="text"
              class="inputing"
              auto-complete="off"
              placeholder="请输入接入类型"
              style="margin-left: 13px"
            ></el-input>
          </el-form-item>
          <el-form-item prop="access_username" label="联系人姓名">
            <el-input
              v-model="registerForm.access_username"
              size="medium"
              type="text"
              class="inputing"
              auto-complete="off"
              placeholder="请输入联系人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="access_email" label="邮箱">
            <el-input
              v-model="registerForm.access_email"
              size="medium"
              class="inputing"
              auto-complete="off"
              placeholder="请输入邮箱"
              type="text"
              style="margin-left: 40px"
              :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机验证码" prop="verificationCode">
            <el-input v-model="loginForm.verificationCode">
              <template slot="append">
                <el-button
                  v-if="loginForm.showloginCode"
                  type="primary"
                  @click="getloginPhoneCode"
                  >获取验证码</el-button
                >
                <div v-else>{{ loginForm.count }}</div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="code" label="验证码">
            <el-input
              v-model="registerForm.code"
              auto-complete="off"
              placeholder="验证码"
              style="width: 36%; margin-left: 27px"
              @keyup.enter.native="handleRegister"
            ></el-input>
            <button class="yzm_btn">获取验证码</button>
          </el-form-item>

          <el-form-item style="width: 100%">
            <el-button
              :loading="loading"
              size="medium"
              type="primary"
              class="btn"
              @click.native.prevent="handleRegister"
            >
              <span v-if="!loading">注册</span>
              <span v-else>注 册 中...</span>
            </el-button>
            <el-button
              :loading="loading"
              size="medium"
              type="primary"
              class="btn"
              style="float: right"
            >
              <span v-if="!loading" @click="toLogin()">取消</span>
            </el-button>
            <svg-icon
              slot="prefix"
              icon-class="user"
              class="el-input__icon input-icon"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="el-login-footer"></div>
    </div> -->
    <div v-show="isSuccess">
      <div class="register-form">
        <img class="success_icon" src="@/assets/logo.png" />
        <div class="success_title">
          <span>申请提交成功</span>
        </div>
        <div class="success_tips">
          <span>
            您的账号申请已提交，申请单号为1420215000001。账号申请通过后，我们将第一时间以邮件的形式通知您。
            您可以保存单号从登录页进入查询申请进度。
          </span>
        </div>
        <el-button
          type="primary"
          style="width: 100%; margin-bottom: 20px"
          >返回登录页</el-button
        >
      </div>
    </div>

    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2021 turing All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import { getHome } from '../../api/data'
// import Cookies from 'js-cookie'
export default {
  data () {
    return {
      select: 0,
      isLogin: 1,
      isRegister: 0,
      isSuccess: 0,
      title: '欢迎登录',
      codeUrl: '',
      cookiePassword: '',
      loginForm: {
        username: '',
        password: '',
        rememberMe: false,
        code: '1',
        uuid: ''
      },
      registerForm: {
        access_name: '',
        access_abbreviation: '',
        access_type: '',
        access_username: '',
        access_email: '',
        phonenumber: '',
        code: ''
      },
      loginRules: {
        username: [
          { required: false, trigger: 'blur', message: '用户名不能为空' }
        ],
        password: [
          { required: false, trigger: 'blur', message: '密码不能为空' }
        ],
        code: [
          { required: false, trigger: 'change', message: '验证码不能为空' }
        ]
      },
      resgiterRules: {},
      loading: false,
      redirect: undefined,
      body_width: ''
    }
  },
  created () {
    // this.getCookie()
  },
  methods: {
    handleLogin () {
      getHome().then((res) => {
        this.loading = true
        console.log(res.data.user)
        const userData = res.data.user
        // console.log(this.loginForm.username);
        // console.log(this.loginForm.password);
        for (const i in userData) {
          // console.log(userData[i]);
          if (this.loginForm.username === userData[i].username && this.loginForm.password === userData[i].password) {
            console.log('账号密码正确')
            this.$router.push({
              path: '/index'
            })
            break
          } else {
            this.$message('账号或密码错误')
            this.loading = false
          }
        }
        // if (this.loginForm.rememberMe) {
        //   console.log('记住我')
        //   Cookies.set('username', this.loginForm.username, { expires: 30 })
        //   Cookies.set('password', encrypt(this.loginForm.password), {
        //     expires: 30
        //   })
        //   Cookies.set('rememberMe', this.loginForm.rememberMe, {
        //     expires: 30
        //   })
        // } else {
        //   console.log('不要记住我')
        //   Cookies.remove('username')
        //   Cookies.remove('password')
        //   Cookies.remove('rememberMe')
        // }
      })
    }
    // goToregister () {

    // },
    // goTologin () {

    // },
    // getCode () {

    // },
    // getCookie () {
    //   const username = Cookies.get('username')
    //   const password = Cookies.get('password')
    //   const rememberMe = Cookies.get('rememberMe')
    //   this.loginForm = {
    //     username: username === undefined ? this.loginForm.username : username,
    //     password:
    //       password === undefined ? this.loginForm.password : decrypt(password),
    //     rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
    //   }
    // }

  },
  mounted () {
    // this.getUser()
  }
}
</script>

<style lang="scss" scoped>
.login {
  overflow-y: hidden;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: none;
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  .login_out {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .login_title {
    width: 100%;
    // height: 100%;
    margin-top: 72px;
    // background-color: #fff;
    position: absolute;
    img {
      width: 65px;
      height: 65px;
      vertical-align: middle;
      margin-right: 31px;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1700px) {
  .login {
    font-size: 36px;
  }
  .login_title {
    width: 100%;
    margin-top: 60px !important;
    position: absolute;
    img {
      width: 65px !important;
      height: 65px !important;
      vertical-align: middle;
      margin-right: 31px;
    }
  }
}
@media screen and (min-width: 860px) and (max-width: 1200px) {
  .login {
    font-size: 32px !important;
  }
  .login_title {
    width: 100%;
    margin-top: 50px !important;
    position: absolute;
    img {
      width: 50px !important;
      height: 50px !important;
      vertical-align: middle;
      margin-right: 31px;
    }
  }
}
@media screen and (min-width: 620px) and (max-width: 860px) {
  .login {
    font-size: 28px;
  }
  .login_title {
    width: 100%;
    margin-top: 60px !important;
    position: absolute;
    img {
      width: 45px !important;
      height: 45px !important;
      vertical-align: middle;
      margin-right: 31px;
    }
  }
}
@media screen and (max-width: 620px) {
  .login {
    font-size: 24px;
  }
  .login_title {
    width: 100%;
    margin-top: 60px !important;
    position: absolute;
    img {
      width: 40px !important;
      height: 40px !important;
      vertical-align: middle;
      margin-right: 31px;
    }
  }
}

.yzm_btn {
  height: 30px;
  margin-left: 22px;
  background-color: #fff;
  border: 1px solid #c0c4cc;
  // margin-left: 23px;
}
.forget_titlt {
  font-size: 14px;
  float: right;
  margin-right: 15px;
  color: #257dfc;
  text-decoration: none;
}

.title {
  // margin: 0px auto 10px auto;
  margin: 10px auto 20px auto;
  text-align: left;
  color: #000;
  font-size: 20px;
  font-weight: 400;
}

.wel_title {
  text-align: left;
  margin-bottom: 15px;
  span {
    font-size: 12px;
    color: #bfbfbf;
  }
  a {
    font-size: 12px;
    color: #257dfc;
    text-decoration: none;
  }
}
.register-form {
  // position: absolute;
  // right: 20px;
  // top: 0;
  border-radius: 6px;
  background: #ffffff;
  width: 350px;
  padding: 20px 25px 5px 25px;
  margin: 5px 50px;
  .el-input {
    height: 30px;
    width: 70%;
    input {
      height: 30px;
    }
  }
  .inputing {
    // position: relative;
    // right: -14px;
  }
  .el-form-item {
    margin-bottom: 10px !important;
  }
}

::v-deep .el-input__inner {
  // width: 70px !important;
}
::v-deep .el-input__suffix {
  position: absolute;
  height: 100%;
  right: 0px !important;
  top: 0;
  text-align: center;
  color: #c0c4cc;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  pointer-events: none;
}

@media screen and (max-width: 1920px) {
  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    width: 350px;
    padding: 20px 25px 5px 25px;
    margin: 7px 50px;
    .el-input {
      height: 38px;
      width: 80%;
      input {
        height: 38px;
      }
    }
    .input-icon {
      height: 39px;
      width: 14px;
      margin-left: 2px;
    }
  }
  .login {
    position: relative;
    // align-items: center;
    overflow-y: hidden;
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/defaul.jpg");
    background-position: 0px 0px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

.el-form-item:nth-child(5) {
  ::v-deep.el-form-item__label {
    padding: 0 !important;
  }
}

@media screen and (min-width: 1920px) {
  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    padding: 20px 25px 5px 25px;
    margin: 7px 100px;
    .el-input {
      height: 38px;
      width: 80%;
      input {
        height: 38px;
      }
    }
    .input-icon {
      height: 39px;
      width: 14px;
      margin-left: 2px;
    }
  }
  .login {
    overflow-y: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/defaul.jpg");
    background-position: 0px 0px; /*这个是按从左往右，从上往下的百分比位置进行调整*/
    background-size: 100% 100%; /*按比例缩放*/
    // background-size: cover;
    background-repeat: no-repeat;
  }
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  margin-right: 8px;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
  // float: left;
}

.success_icon {
  margin: 30px 100px;
  width: 100px;
  height: 100px;
}
.success_title {
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}
.success_tips {
  margin-bottom: 20px;
  span {
    text-align: justify;
    color: #a4a4a4;
    font-size: 12px;
  }
}
</style>
