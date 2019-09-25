<template>
  <div class="g-pt50">
    <div class="toolbar-box">
      <div class="toolbar">
      </div>
    </div>
    <el-scrollbar class="m-content-box">
      <div class="content-title">
        科技动态
      </div>
      <el-scrollbar class="article-list-box">
      <ul>
        <li v-for="(item,index) in list">
          <router-link to="/article-detail" class="article-item">
            <span class="embellish">*</span>
            <div class="article-title">{{item.title}}</div>
            <div class="article-author">作者：{{item.author}}</div>
            <div class="article-time">{{item.time}}</div>
          </router-link>
        </li>
      </ul>
      </el-scrollbar>
      <el-pagination
        small
        class="list-page"
        background
        layout="prev, pager, next,total"
        :total="list.length">
      </el-pagination>
    </el-scrollbar>
  </div>
</template>
<script>
  export default{
    components:{
    },
    data(){
        return{
          activeName: 'first',
          list:[{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条合同上传盖章附件合同上传盖章附件传盖章附件',
            author:'张三 ',
            time:'2018-12-30'
          },{
            title:'您有5条请假申请待审批您有2条未读通知公告您有2条未读通知公告您有2条未读通知',
            author:'张三 ',
            time:'2018-12-30'
          },]
        }
    },
    mounted(){

    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      back(){
          this.$router.go(-1)
      }
    }
  }
</script>
<style>

</style>
