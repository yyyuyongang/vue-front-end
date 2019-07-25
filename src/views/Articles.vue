<template>
    <h1>{{article}}</h1>
</template>

<style>

</style>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { mount } from '@vue/test-utils';
export default {
  name: 'Articles',
  data() {
    return {
      article: '',
    };
  },
  created() {
    axios.get('http://localhost:3000/articles')
    .then( (res) => {
      this.article = res.data;
    });
  },
};

</script>
