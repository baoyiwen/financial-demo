<template>
  <div class="orgComponents-box">

      <div class="">
        <el-input
          class="filterInput"
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <el-tree
          node-key="orgCode"
          class="org-tree"
          :data="treeData"
          highlight-current
          :props="treeProps"
          :show-checkbox="!isSingle"
          @node-click="singleChose"
          @check-change="checkChange"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree">
        </el-tree>
      </div>
  </div>

</template>
<script>
  import { fetchTree } from '@/api//permission/organization'
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val)
      }
    },
    props: {
      isSingle: {
        default: true,
        type: Boolean
      },
      icon: {
        default: 'el-icon-plus',
        type: String
      },
      size: {
        default: 'small',
        type: String
      },
      init: {
        type: Array,
        default: []
      },
      singleInit: {
        type: String,
        default: ''
      }
    },
    mounted() {
      this.getTree()
    },
    updated() {
      this.setNode()
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      handleClose() {
//        this.visible = false
      },
      open() {
        this.visible = true
      },
      setNode() {
        if (this.isSingle) {
          this.$refs.tree.setCurrentKey(this.singleInit)
        } else {
          this.$refs.tree.setCheckedKeys(this.init)
        }
      },
      treeLoadNode(node, resolve) {
//        const that = this
      },
      getTree() {
        const that = this
        fetchTree().then(res => {
          that.treeData = res.data.data
        })
      },
      singleChose(node) {
        this.singleOrg = Object.assign({}, node)
      },
      checkChange(data, checked, indeterminate) {
        this.orgs = this.$refs.tree.getCheckedNodes(false, true)
      },
      changeSelect() {
        if (this.isSingle) {
          this.$emit('changeSelect', this.singleOrg)
          return this.singleOrg
        } else {
          this.$emit('changeSelect', this.orgs)
          return this.orgs
        }
      }
    },
    data() {
      return {
        filterText: '',
        treeData: [],
        orgs: [],
        visible: false,
        singleOrg: {},
        treeProps: {
          children: 'children',
          label: 'orgName'
        }
      }
    }
  }
</script>
