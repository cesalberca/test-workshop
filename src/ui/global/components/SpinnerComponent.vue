<template>
  <p v-show="isLoading">Loading...</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SpinnerComponent extends Vue {
  @Prop({ type: Boolean, default: false })
  isLoading!: boolean;
}
</script>

<style scoped>
p {
  position: absolute;
  height: 100vh;
  width: 100%;
}
</style>
