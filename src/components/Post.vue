<template>
    <div>
        <form action="">article:</form>
        <div>{{form.body}}</div>
        <input type="text" value="content" v-model="form.body">
        <button @click="onSubmit">submit</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            form: {
                body: 'body',
            },
        };
    },
    methods: {
        onSubmit() {
            this.form.body = 'article1'
        }

    }


})
</script>
