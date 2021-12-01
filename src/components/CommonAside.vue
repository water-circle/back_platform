<template>
  <el-menu
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3 v-show="!isCollapse">通用后台管理系统</h3>
    <h3 v-show="isCollapse">后台</h3>
    <el-menu-item
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :index="item.path"
      :key="item.label"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.path"
          :index="subItem.path"
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
  data () {
    return {
      // isCollapse: false,
      meun: [
        { path: '/index', name: 'home', label: '首页', icon: 's-home', url: 'Home/Home' },
        { path: '/mall', name: 'mall', label: '商品管理', icon: 'video-camera-solid', url: 'Mall/Mall' },
        { path: '/user', name: 'user', label: '用户管理', icon: 's-custom', url: 'User/User' },
        {
          label: '其他',
          icon: 's-tools',
          children: [
            { path: '/stock', name: 'stock', label: '库存管理', icon: 'star-on', url: 'Stock/Stock' },
            { path: '/sales', name: 'sales', label: '销售管理', icon: 's-help', url: 'Sales/Sales' }
          ]
        }
      ]
    }
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu (item) {
      this.$router.push({ name: item.name })
      // this.$router.push({ path: item.path })
      this.$store.commit('selectMenu', item)
    },
    clickSubMenu (subItem) {
      this.$router.push({ name: subItem.name })
      // this.$router.push({ path: subItem.path })    //用name和path都可以
      this.$store.commit('selectMenu', subItem)
    }
  },
  computed: {
    noChildren () {
      // console.log(this.meun.filter((item)=>!item.children));
      return this.meun.filter((item) => !item.children)
    },
    hasChildren () {
      return this.meun.filter((item) => item.children)
    },
    isCollapse () { // 这里的名称要与上面绑定的一样
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
[class*="el-icon-"]::before {
  color: #fff;
}
</style>
