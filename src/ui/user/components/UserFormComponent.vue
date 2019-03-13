<template>
  <header>
    <h1>Avatar Viewer</h1>
    <label>Email</label>
    <input
      name="email"
      type="email"
      :class="{ 'has-error': hasError }"
      @input="onEmailChange"
      class="email"
    />
  </header>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class UserFormComponent extends Vue {
  @Prop({ type: Boolean, default: false })
  hasError!: boolean;

  @Emit()
  onEmailChange(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
</script>
<style scoped>
.email {
  margin-left: 8px;
  padding: 0.3rem 0.5rem;
}

.has-error {
  border: 3px solid crimson;
}
</style>
