<template>
  <section class="viewer">
    <UserFormContainer @on-valid-email-change="updateEmail" />
    <UserAvatarComponent :user="user" />
  </section>
</template>
<script lang="ts">
import { Component, Inject, Vue, Watch } from "vue-property-decorator";
import { User } from "../../../domains/users/User";
import { AvatarRepository } from "../../../domains/avatar/repositories/AvatarRepository";
import { UserAvatarComponent } from "../components";
import { Debouncer } from "../../../utils/Debouncer";
import { Hasher } from "../../../utils/Hasher";
import UserFormContainer from "./UserFormContainer.vue";

@Component({
  components: {
    UserAvatarComponent,
    UserFormContainer
  }
})
export default class UserViewerContainer extends Vue {
  email: string = "";
  user: User = User.empty();

  @Inject()
  avatarRepository!: AvatarRepository;

  @Inject()
  debouncer!: Debouncer;

  @Inject()
  hasher!: Hasher;

  debouncedQueryEmail!: () => void;

  created() {
    this.debouncedQueryEmail = this.debouncer.debounce(this.queryEmail, 1000);
  }

  @Watch("email")
  onEmailChange() {
    this.debouncedQueryEmail();
  }

  updateEmail(email: string) {
    this.email = email;
  }

  async queryEmail() {
    const hash = this.hasher.hash(this.email);
    const user = await this.avatarRepository.getUserByEmailHash(hash);
    this.user = user;
  }
}
</script>
<style scoped>
.viewer {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
