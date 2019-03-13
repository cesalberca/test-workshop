<template>
  <ProviderFactory> <UserViewerContainer /> </ProviderFactory>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ProviderFactory } from "./ui";
import { UserViewerContainer } from "./ui/user/containers";

@Component({
  components: {
    UserViewerContainer,
    ProviderFactory
  }
})
export default class App extends Vue {}
</script>
