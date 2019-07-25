<template>
  <!-- header zoom -->
  <div class="nav">
    <div class="nav-content">
      <el-row :gutter="20">
        <el-col :span="3">
          <router-link to="/">
            <img class="logo" src="../assets/logo.png" alt="YY" />
          </router-link>
        </el-col>
        <el-col :span="16">
          <el-menu
            :router="true"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menuItem
              :route="l.path"
              :index="l.index"
              v-for="l in list"
              :key="l.index"
            >{{l.name}}</el-menuItem>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <div class="nav-right">
            <el-button size="small" type="primary" @click="handleClick('login')">login</el-button>
            <el-button size="small" type="danger" @click="handleClick('register')">register</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang = 'ts'>
import { Component, Vue } from 'vue-property-decorator';
export default class Nav extends Vue {
  public title: string = '';
  public list: object[] = [{
    index: '1',
    path: '/main',
    name: 'main',
  },
  {
    index: '2',
    path: '/Articles',
    name: 'article',
  },
  {
    index: '3',
    path: '/Getform',
    name: 'getform',
  },
  ];
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
.logo {
  height: 50px;
  margin: 0;
  border-radius: 50%;
  margin-top: 5px;
}
</style>
