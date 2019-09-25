<template>
  <div>
    <el-row>
      <el-col :span="24" style="min-width: 260px;overflow: auto">
        <el-tree
          :data="treeData"
          :props="treeProps"
          node-key="id"
          show-checkbox
          ref="tree"
          check-strictly
          :load="treeLoadNode"
          @check-change="checkOrg"
          highlight-current lazy>
        </el-tree>
      </el-col>
    </el-row>
  </div>

</template>
<script>
  import Config from '@/config'

  export default {
    data() {
      return {
        personalTableData: [],
        treeData: [],
        searchValue: '',
        selectPersonalNodeHand: '',
        orgs: [],
        person: [],
        isSearch: false,
        treeProps: {
          label: 'organizationName',
          children: 'zones'
        },
        page: {
          size: 10,
          total: 1,
          currentPage: 1
        },
        firstNodeData: [],
      }
    },
    props: {
      org: {
        type: Array
      }
    },
    watch: {
      org:function (v) {
        this.setTreeCheck();
       }
    },
    methods: {
      documentDispatch: function () {//给公文机构选择多选随便传一条数据用
        const that = this;
        return that.firstNodeData
      },
      getSelectionList() {
        const that = this;
        return that.orgs;
      },
      treeLoadNode: function (node, resolve) {
        const that = this;
        that.$http.get(Config.portalApiUrl + "/organization/getTree",
          {params: {'pid': node.data.organizationCode}}).then(function (data) {
          if (showError(data, that)) {
            if (node.level === 0 && data.data.data) {
              that.firstNodeData[0] = data.data.data[0]
            }
            resolve(data.data.data);
          }
          this.setTreeCheck();
        });
      },
      checkOrg(node) {
        this.orgs = this.$refs.tree.getCheckedNodes();
      },
      setTreeCheck() {
        if (this.org.length > 0) {
          this.$refs.tree.setCheckedNodes(this.org)
        } else {
          this.$refs.tree.setCheckedKeys([])
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
