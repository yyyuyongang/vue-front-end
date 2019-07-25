<template>
    <div>
        <h2>post request</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="author">
                <el-input v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item label="body">
                <el-input type="textarea" v-model="form.body"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">submit</el-button>
                <el-button>cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang = 'ts'>
import axios from 'axios';
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            form: {
                title: 'title',
                author: 'author',
                body: 'body',
            },
        };
    },
    methods: {
        onSubmit() {
            const newArticle = {
                title: this.form.title,
                author: this.form.author,
                body: this.form.body,
            };
            axios.post('http://localhost:3000/articles', newArticle);
    },
  },
});
</script>