<template>
  <div><slot /></div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { UserValidationService } from "../domains/users/UserValidationService";
import { Debouncer } from "../utils/Debouncer";
import { AvatarQueryEmailServiceFactory } from "../domains/avatar/services/AvatarQueryEmailServiceFactory";

@Component
export default class ProviderFactory extends Vue {
  @Provide()
  debouncer = new Debouncer();

  @Provide()
  userValidationService = new UserValidationService();

  @Provide()
  avatarQueryEmailService = AvatarQueryEmailServiceFactory.build();
}
</script>
