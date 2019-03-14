<template>
  <div><slot /></div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Hasher } from "../utils/Hasher";
import { AvatarRepositoryFactory } from "../domains/avatar/repositories/AvatarRepositoryFactory";
import { AvatarRepository } from "../domains/avatar/repositories/AvatarRepository";
import { UserValidationService } from "../domains/users/UserValidationService";
import { Debouncer } from "../utils/Debouncer";
import { AvatarQueryEmailService } from "../domains/avatar/services/AvatarQueryEmailService";

@Component
export default class ProviderFactory extends Vue {
  @Provide()
  avatarRepository: AvatarRepository = AvatarRepositoryFactory.createAvatarPhotoRepository();

  @Provide()
  debouncer = new Debouncer();

  @Provide()
  hasher = new Hasher();

  @Provide()
  userValidationService = new UserValidationService();

  @Provide()
  queryEmailService = new AvatarQueryEmailService(
    new Hasher(),
    AvatarRepositoryFactory.createAvatarPhotoRepository()
  );
}
</script>
