<template>
  <div class="hello">
    <el-button>测试</el-button>
    <h3>Essential Links</h3>
    <h3>Ecosystem</h3>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
