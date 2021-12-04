<template>
  <div class="login_container">
    <div class="box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="form_box">
        <el-form
          label-width="80px"
          :model="loginForm"
          :rules="loginRules"
          ref="loginRef"
        >
          <!-- prop="username"和v-model="loginForm.username"的username要保持一致 -->
          <el-form-item prop="username">
            <el-input
              prefix-icon="iconfont icon-user"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <!-- prop="password"和v-model="loginForm.password"的password要保持一致 -->
          <el-form-item prop="password">
            <el-input
              prefix-icon="iconfont icon-lock "
              v-model="loginForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getHome } from '../api/data'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度必须在3到10个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度必须在6到15个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginRef.resetFields()
    },
    login() {
      this.$refs.loginRef.validate((valid) => {
        if (!valid) {
          return valid
        } else {
          getHome().then((res) => {
            const userData = res.data.user
            for (const i in userData) {
              if (this.loginForm.username === userData[i].username && this.loginForm.password === userData[i].password) {
                this.$message.success('登陆成功')
                window.sessionStorage.setItem('token', userData[i].id)
                this.$router.push({
                  path: '/index'
                })
                break
              } else {
                this.$message.error('账号或密码错误')
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.form_box {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}
::v-deep .el-form-item__content {
  margin-left: 0px !important;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
