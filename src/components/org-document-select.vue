<template>
  <div>
    <el-tree
      v-show="checkStrictly"
      :data="treeData"
      show-checkbox
      node-key="id"
      ref="tree"
      default-expand-all
      @check-change="checkOrg"
      :props="treeProps">
    </el-tree>

    <el-tree
      v-show="!checkStrictly"
      :data="treeData"
      show-checkbox
      node-key="id"
      ref="docTree"
      default-expand-all
      check-strictly
      @check-change="checkOrg"
      :props="treeProps">
    </el-tree>

  </div>
</template>
<script>
  import Config from '@/config'

  export default {
    data() {
      return {
        setAllId: '',
        checkStrictly: false,
        treeProps: {
          label: 'organizationName',
          children:
            'children'
        }
        ,
        orgs: [],
        treeData:
          [],
      }
    },
    watch: {
      isAllSelect: function (v) {

        this.checkStrictly = v;
        if (v) {
          this.setAllCheckedKeys();
        } else {
          this.resetClearChecked();
        }
      },
      org:function (v) {
        this.setTreeCheck();
        console.log('我变化了呀', v);
      }
    },
    props: {
      isAllSelect: {
        type: Boolean
      },
      org: {
        type: Array
      }
    },
    mounted: function () {

      this.getTreeList()
    },
    methods: {
      getTreeList: function () {
        const that = this;
        that.$http.get(Config.portalApiUrl + "/organization/getOrganizationLevelList").then(function (res) {
          if (res.data.code === '200') {
            that.treeData = res.data.data;
            that.setAllId = that.treeData[0].id;
          }
          this.setTreeCheck();
        });
      },
      getCheckedKeys: function () {
        let params = this.$refs.tree.getCheckedNodes();
        return params;
      },
      getDocTreeCheckedKeys: function () {
        let params = this.$refs.docTree.getCheckedNodes();
         return params;
      },
      checkOrg(node) {
        this.orgs = this.$refs.docTree.getCheckedNodes();
      },
      setAllCheckedKeys() {

        let arr = [];
        arr.push(this.setAllId);
        console.log("===", arr);
        this.$refs.tree.setCheckedKeys(arr);
        this.getCheckedKeys();
      },
      resetClearChecked() {
        this.$refs.docTree.setCheckedKeys([]);
      },
      setTreeCheck() {
        if (this.org.length > 0) {
          this.$refs.docTree.setCheckedNodes(this.org)
        } else {
          this.$refs.docTree.setCheckedKeys([])
        }

      }
    }
  }

  function showError(data, that) {
    if (data.data.code != '200') {
      that.$message({
        message: data.data.msg,
        type: 'warning'
      });
      return null;
    } else {
      return data;
    }
  }
</script>
