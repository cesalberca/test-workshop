<template>
  <ProviderFactory>
    <LoadingContainer />
    <UserViewerContainer />
  </ProviderFactory>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ProviderFactory } from "./ui";
import { UserViewerContainer } from "./ui/user/containers";
import { LoadingContainer } from "./ui/global/containers";

@Component({
  components: {
    UserViewerContainer,
    ProviderFactory,
    LoadingContainer
  }
})
export default class App extends Vue {}
</script>
