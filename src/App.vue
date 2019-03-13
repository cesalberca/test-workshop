<template>
  <ProviderFactory> <AvatarViewerContainer /> </ProviderFactory>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AvatarViewerContainer from "./ui/user/containers/AvatarViewerContainer.vue";
import ProviderFactory from "./ui/ProviderFactory.vue";

@Component({
  components: {
    AvatarViewerContainer,
    ProviderFactory
  }
})
export default class App extends Vue {}
</script>
