<template>
  <header>
    <h1>Avatar Viewer</h1>
    <label>Email</label>
    <input name="email" type="email" @input="onEmailChange" class="email" />
  </header>
</template>
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class UserFormComponent extends Vue {
  @Emit()
  onEmailChange(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
</script>
<style scoped>
.email {
  margin-left: 8px;
}
</style>
