<template>
  <el-container style="height: 100vh">
    <el-aside>
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-tag></common-tag>
      <el-main>
        <!-- 因为不能写死，所以要用router-view -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 80px !important;
}
.el-header,
.el-footer {
  background-color: #333;
  color: #fff;
  // text-align: center;
  // line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  // line-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  width: auto !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
