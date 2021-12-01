<template>
  <div class="tabs">
    <el-tag
      v-for="(tag,index) in tags"
      :key="tag.name"
      size="small"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changetag(tag)"
      @close="handelClose(tag,index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changetag (item) {
      this.$router.push({ path: item.path })
      this.$store.commit('selectMenu', item)
      // console.log(this.$route);
    },
    handelClose (tag, index) {
      const length = this.tags.length - 1
      this.close(tag)
      // 判断是不是最后一个
      if (tag.name !== this.$route.name) {
        return
      }
      if (index === length) {
        // 页面往左边跳转
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        // 页面往右边跳转
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20px;
  background-color: #e9eef3;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
    float: left;
  }
}
</style>
