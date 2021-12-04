<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        style="width: 44px; height: 29px"
        @click="handleMenu"
      ></el-button>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current && (current.name==='stock'||current.name==='sales')" >其他</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{
          current.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- <h3 style="color: #fff">首页</h3> -->
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img class="image" :src="userImg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item><span @click="logout">退出</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      userImg: require('../assets/user.png')
    }
  },
  methods: {
    handleMenu () {
      this.$store.commit('collapseMenu') // 用commit去使用mutation里面的方法
    },
    logout () {
      console.log('点击了退出按钮')
      // 退出登录要先清楚token
      window.sessionStorage.clear()
      this.$router.push({ path: '/login' })
    }
  },
  updated () {
    // console.log("current",this.current)
  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu
    })
  }
}
</script>

<style lang="scss" scoped>
header {
  color: #fff;
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-between;
}
// .el-header {
//   background-color: #333;
//   color: #fff;
// }
.l-content {
  display: flex;
  flex-direction: row;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
<style scoped lang="scss">
.el-breadcrumb {
  font-size: 18px;
  font-weight: normal;
  .el-breadcrumb__item{
    cursor: pointer !important;
    font-weight: normal;
  }
  .el-breadcrumb__item:last-child {
    color: #fff !important;
    font-weight: normal;
  }
  ::v-deep.el-breadcrumb__inner {
    color: #666;
    cursor: pointer !important;
    font-weight: normal;
  }
}
</style>
