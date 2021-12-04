<template>
    <!-- @open="handleOpen"
    @close="handleClose" -->
    <!-- :collapse-transition="false"去掉动画，前面一定要加:去确保是布尔型而不是字符串型 -->
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
    :collapse-transition="false"
  >
    <h3 v-show="!isCollapse">通用后台管理系统</h3>
    <h3 v-show="isCollapse">后台</h3>
    <el-menu-item
      v-for="item in noChildren"
      :key="item.name"
      :index="item.label+''"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :index="item.label+''"
      :key="item.name"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
          <!-- :index="subItem.label+''"，这里用label的原因是label是每一个一级菜单有的属性而且是唯一的 -->
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.name"
          :index="subItem.label+''"
          @click="clickSubMenu(subItem)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false,
      meun: [
        { path: '/index', name: 'home', label: '首页', icon: 's-home', url: 'Home/Home' },
        {
          label: '用户管理',
          icon: 's-custom',
          children: [
            { path: '/user', name: 'user', label: '用户列表', icon: 'star-on', url: 'User/User' }
          ]
        },
        {
          label: '权限管理',
          icon: 'video-camera-solid',
          children: [
            { path: '/role', name: 'role', label: '角色列表', icon: 'star-on', url: 'Role/Role' },
            { path: '/power', name: 'power', label: '权限列表', icon: 'star-on', url: 'Power/Power' }
          ]
        },
        {
          label: '商品管理',
          icon: 's-tools',
          children: [
            { path: '/stock', name: 'stock', label: '商品分类', icon: 'star-on', url: 'Stock/Stock' },
            { path: '/sales', name: 'sales', label: '分类参数', icon: 's-help', url: 'Sales/Sales' },
            { path: '/goods', name: 'goods', label: '商品列表', icon: 'star-on', url: 'Goods/Goods' }
          ]
        },
        {
          label: '订单管理',
          icon: 'video-camera-solid',
          children: [
            { path: '/orders', name: 'orders', label: '订单列表', icon: 'star-on', url: 'Orders/Orders' }
          ]
        },
        {
          label: '数据统计',
          icon: 'video-camera-solid',
          children: [
            { path: '/repotrs', name: 'repotrs', label: '统计分析', icon: 'star-on', url: 'Repotrs/Repotrs' }
          ]
        }
      ]
    }
  },

  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath)
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath)
    // },
    clickMenu(item) {
      this.$router.push({ name: item.name })
      // this.$router.push({ path: item.path })
      this.$store.commit('selectMenu', item)
    },
    clickSubMenu(subItem) {
      this.$router.push({ name: subItem.name })
      // this.$router.push({ path: subItem.path })    //用name和path都可以
      this.$store.commit('selectMenu', subItem)
    }
  },
  computed: {
    noChildren() {
      // console.log(this.meun.filter((item)=>!item.children));
      return this.meun.filter((item) => !item.children)
    },
    hasChildren() {
      return this.meun.filter((item) => item.children)
    },
    isCollapse() { // 这里的名称要与上面绑定的一样
      return this.$store.state.tab.isCollapse
    }

  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}
h3 {
  text-align: center;
}
.el-menu {
  height: 100%;
}
[class*='el-icon-']::before {
  color: #fff;
}
</style>
