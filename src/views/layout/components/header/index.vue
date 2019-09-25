<template>
  <div>
    <div class="m-header">
      <div class="logo-box">
        <div class="logo-img">
          <!--<img src="../../../../assets/img/logo.png" alt="">-->
        </div>
        内江环保演示系统
      </div>
      <div class="top-menu-box">
        <el-menu :default-active="currentM" class="top-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="item in topMenu" :index="item.code" :key="item.code">
            <i :class="item.icon"/>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
        </el-menu>
        <div v-if="topMenu.length > 4" class="top-menu-btn-box">
          <span :class="{'disabled':topMenu_c===0}" class=" top-btn " @click="topMenuHandle(-1)">
            <i class="iconfont icon-sanjiaoxing"/>
          </span>
          <span :class="{'disabled':topMenu_c===topMenu_h}" class=" bottom-btn " @click="topMenuHandle(1)">
            <i class="iconfont  icon-sanjiaoxing"/>
          </span>
        </div>
      </div>

      <ul class="header-right">
        <li>
          <el-tooltip class="item" effect="dark" placement="bottom">
            <div slot="content">
              姓名:{{ userInfo.person_name }}<br>
              工号:{{ userInfo.person_code }}<br>
              部门:{{ userInfo.org_abbreviation }}<br>
            </div>
            <span class="top-userImg-box" @click="goUserInfo">
              <img v-if="userInfo.portrait" :src="baseUrl+userInfo.portrait" class="top-userImg">
              <i v-else class="iconfont icon-touxiang"/>
            </span>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">
            <theme-picker class="right-menu-item hover-effect" />
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
            <i class="iconfont icon-tongzhiguanli"/>
          </el-tooltip>
        </li>
        <li>
          <el-tooltip class="item" effect="dark" content="退出" placement="bottom">
            <i class="iconfont icon-084tuichu" @click="logout"/>
          </el-tooltip>
        </li>

      </ul>
    </div>
  </div>
</template>
<style>

</style>
<script>
import router from '@/router/index'
import store from '@/store/index'
import $ from 'jquery'
import { mapGetters } from 'vuex'
import Screenfull from '@/components/Screenfull'
import ThemePicker from '@/components/ThemePicker/top-theme'
import global from '@/initData/Global.vue'
export default {
  components: {
    Screenfull,
    ThemePicker
  },
  data() {
    return {
      currentM: '',
      topMenu: [],
      topMenu_c: 0,
      topMenu_h: 0,
      personInfo: {},
      dialogVisible: false,
      baseUrl: global.initData.filePrefixPath,
      action: '',
      portrait: ''

    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device',
      'userInfo',
      'roles'
    ])
  },
  mounted() {
    //this.action = global.initData.imgServer + 'api/signal'
    this.currentM = sessionStorage.getItem('currentM') ? sessionStorage.getItem('currentM') : this.$store.getters.currentM
    this.topMenu_h = -($('.top-menu').height() / 80 - 1)
    this.getTopMenu()
  },
  methods: {
    handleSelect(index) {
      store.dispatch('Generateodule', index)
    },
    topMenuHandle(val) {
      const h = $('.top-menu').height() / 80 - 1
      let flag = true
      if (flag) {
        if (val > 0) {
          if (this.topMenu_c > -h) {
            this.topMenu_c = this.topMenu_c - val
            $('.top-menu').css('top', this.topMenu_c * 80 + 'px')
          } else {
            flag = false
          }
        } else {
          if (this.topMenu_c < 0) {
            this.topMenu_c = this.topMenu_c - val
            $('.top-menu').css('top', this.topMenu_c * 80 + 'px')
          } else {
            flag = false
          }
        }
      }
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    },
    goUserInfo() {
      this.$router.push('/user-info')
    },
    getTopMenu() {
      const top = [
        {
          icon: 'iconfont el-icon-tickets',
          code: '13',
          label: '资源数据中心',
          role: 'document_manage'
        },
        {
          icon: 'iconfont icon-gongwenbao',
          code: '1',
          label: '公文管理',
          role: 'document_manage'
        }, {
          icon: 'iconfont icon-quanxuan',
          code: '10',
          label: '目标管理',
          role: 'document_manage'
        }, {
          icon: 'iconfont icon-renlingbaogao',
          code: '14',
          label: '决策支持应用',
          role: 'document_manage'
        }, {
          icon: 'iconfont icon-kehuyongkuanguanli',
          code: '15',
          label: '数据共享服务',
          role: 'document_manage'
        }, {
          icon: 'iconfont icon-shipin-tianchong',
          code: '16',
          label: '数据管理监控',
          role: 'document_manage'
        }, {
          icon: 'iconfont icon-zidianguanli2',
          code: '17',
          label: '数据集成交换',
          role: 'document_manage'
        }, {
          icon: 'iconfont icon-gengdi',
          code: '18',
          label: '智能检索',
          role: 'document_manage'
        }
      ]
      const menu = []
      top.forEach(route => {
        if (this.hasPermission(route)) {
          menu.push(route)
        }
      })
      this.topMenu = menu
    },
    hasPermission(route) {
      if (this.roles.indexOf(route.role) != -1) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
