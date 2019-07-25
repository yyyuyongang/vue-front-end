<template>
  <div class="footer"> This is footer</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Footer extends Vue {}
</script>
<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>