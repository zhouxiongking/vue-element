<template>
  <div class="list">
    <el-container>
      <el-header
        height="30px"
        class="header-title text-center">用户列表
      </el-header>
      <el-main>
        <el-table
          :data="userList"
          border>
          <el-table-column
            prop="username"
            label="用户名">
          </el-table-column>
          <el-table-column
            prop="password"
            label="密码">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="registerTime"
            label="注册日期">
          </el-table-column>
        </el-table>
        <el-pagination
          class="m-t"
          background
          layout="total, prev, pager, next"
          :total="total"
          :page-size="pageSize"
          @current-change="handlePageChange">
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        pageSize: 3,
        total: 0,
        userList: [],
        totalList: [{
          username: '枫叶1',
          password: '123456',
          gender: '男',
          registerTime: '2018-04-12 12:23:34'
        }, {
          username: '枫叶2',
          password: '123456789',
          gender: '女',
          registerTime: '2018-04-12 12:23:34'
        }, {
          username: '枫叶3',
          password: '456678ww',
          gender: '男',
          registerTime: '2018-04-12 12:23:34'
        }, {
          username: '枫叶4',
          password: '123422aa56',
          gender: '男',
          registerTime: '2018-04-12 12:23:34'
        }, {
          username: '枫叶5',
          password: '123sdd456',
          gender: '女',
          registerTime: '2018-04-12 12:23:34'
        }, {
          username: '枫叶6',
          password: '123ssee456',
          gender: '女',
          registerTime: '2018-04-12 12:23:34'
        }]
      }
    },
    mounted() {
        this.total = this.totalList.length;
        this.handlePageChange(1);
    },
    methods: {
      handlePageChange(pageNo) {
        let begin = (pageNo - 1) * this.pageSize;
        let end = pageNo * this.pageSize;
        this.userList = this.totalList.slice(begin, end);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
