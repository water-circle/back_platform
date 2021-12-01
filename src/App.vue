<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: 700;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.el-menu-vertical-demo[data-v-949f603e]:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}
h3[data-v-949f603e] {
  text-align: center;
}
.el-menu[data-v-949f603e] {
  height: 100%;
}
[class*='el-icon-'][data-v-949f603e]:before {
  color: #fff;
}
header[data-v-8dd5334c] {
  color: #fff;
  height: 80px;
  justify-content: space-between;
}
.l-content[data-v-8dd5334c],
header[data-v-8dd5334c] {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.l-content .el-button[data-v-8dd5334c] {
  margin-right: 20px;
}
.r-content img[data-v-8dd5334c] {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-breadcrumb[data-v-8dd5334c] {
  font-size: 18px;
  font-weight: 400;
}
.el-breadcrumb .el-breadcrumb__item[data-v-8dd5334c] {
  cursor: pointer !important;
  font-weight: 400;
}
.el-breadcrumb .el-breadcrumb__item:last-child {
  color: #fff !important;
  font-weight: 400;
}
.el-breadcrumb .el-breadcrumb__inner {
  color: #666;
  cursor: pointer !important;
  font-weight: 400;
}
.tabs[data-v-2be2c984] {
  padding: 20px;
  background-color: #e9eef3;
}
.tabs .el-tag[data-v-2be2c984] {
  margin-right: 15px;
  cursor: pointer;
  float: left;
}
header {
  height: 80px !important;
}
.el-footer,
.el-header {
  background-color: #333;
  color: #fff;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
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
