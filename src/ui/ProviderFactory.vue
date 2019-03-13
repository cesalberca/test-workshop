<template>
  <div><slot /></div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { AvatarRepositoryFactory } from "../domains/avatar/repositories/GravatarRepositoryFactory";
import { AvatarRepository } from "../domains/avatar/repositories/GravatarRepository";
import { debounce } from "../utils/debounce";
import { hasher } from "../utils/hasher";

@Component
export default class ProviderFactory extends Vue {
  @Provide()
  gravatarRepository: AvatarRepository = AvatarRepositoryFactory.createAvatarPhotoRepository();

  @Provide()
  debounce: typeof debounce = debounce;

  @Provide()
  hasher: typeof hasher = hasher;
}
</script>
