<template>
  <div id="app">
    <el-container>
      <el-header
        class="header"
        height="73px">
        <h2 class="">用户信息管理系统</h2>
      </el-header>
      <el-aside>
        <el-row class="menu-page">
          <el-col>
            <el-menu
              mode="vertical"
              theme="dark"
              class="el-menu-vertical-demo"
              background-color="#324057"
              :default-active="$route.path"
              text-color="#fff"
              router>
              <el-menu-item index="/add">
                <i class="el-icon-edit"></i>
                <span>新增</span>
              </el-menu-item>
              <el-menu-item index="/list">
                <i class="el-icon-tickets"></i>
                <span>列表</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div class="content">
          <router-view></router-view><!-- 页面渲染入口 -->
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

  @import "./style/common.css";

  body {
    margin: 0;
  }
  .menu-page {
    position: absolute;
    top: 73px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
  }

  .el-menu {
    border-right: none !important;
  }

  .el-menu .el-menu-item {
    padding-left: 40px !important;
  }

  .content {
    margin-left: 180px;
  }
  .header {
    background-color: #409EFF;
    color: #fff;
  }
</style>
