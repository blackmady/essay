<template>
  <div class="admin-tag">
    <div
      v-if="isAdd || tmp.id"
      class="item"
    >
      <input
        v-model="tmp.title"
        type="text"
        placeholder="名称"
        autofocus
      >
      <input
        v-model="tmp.sort"
        type="number"
        placeholder="排序">
      <div class="state">
        <input
          id="publish"
          v-model="tmp.isShow"
          :value="true"
          name="state"
          type="radio">
        <label for="publish">公开</label>
        <input
          id="pravite"
          v-model="tmp.isShow"
          :value="false"
          name="state"
          type="radio">
        <label for="pravite">私有</label>
      </div>
      <button @click="handle(false)">取消</button>
      <button
        class="primary"
        @click="handlePost">确定</button>
    </div>

    <button
      class="primary"
      @click="handle(true)">添加标签</button>

    <div
      v-for="item in tags"
      :key="item.id"
      class="tag"
    >
      <p class="title"> <span v-if="!item.isShow">[私]</span>{{ item.title }} ({{ item.total }})</p>
      <div class="btns">
        <button
          class="small"
          @click="handleDelete(item)">删除</button>
        <button
          class="small"
          @click="handlePatch(item)">编辑</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import cloneDeep from 'lodash/cloneDeep'

export default {
  layout: 'admin',
  middleware: 'admin',
  data() {
    return {
      tmp: {},
      tagId: '',
      isAdd: false,
    }
  },
  computed: {
    ...mapState(['tags']),
  },
  mounted() {
    this.setDefault()
    this.getTags()
  },
  methods: {
    ...mapActions([
      'getTags',
      'postTag',
      'patchTag',
      'deleteTag',
    ]),
    async handleDelete(item) {
      const val = confirm(`确定删除 ${item.title} 标签吗`)
      if (val) {
        await this.deleteTag(item.id)
        this.getTags()
      }
    },
    handle(isAdd) {
      this.setDefault()
      this.isAdd = isAdd
    },
    handlePatch(item) {
      this.tmp = {
        ...item,
      }
    },
    async handlePost() {
      if (this.tmp.id) {
        await this.patchTag(this.tmp)
        this.getTags()
        this.setDefault()
        this.isAdd = false
      } else {
        await this.postTag(this.tmp)
        this.getTags()
        this.setDefault()
        this.isAdd = false
      }
    },
    setDefault() {
      this.tmp = {
        id: '',
        title: '',
        keywords: '',
        description: '',
        isShow: true,
        sort: 0,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-tag {
  .item {
    border-radius: 3px;
    margin: 20px 0;
    width: 300px;
    input,
    textarea {
      margin-bottom: 10px;
    }
  }
  .primary {
    margin-bottom: 20px;
  }
  .tag {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
</style>
