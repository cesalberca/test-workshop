<template>
  <section class="viewer">
    <UserFormContainer @on-valid-email-change="updateEmail" />
    <UserAvatarComponent :user="user" />
  </section>
</template>
<script lang="ts">
import { Component, Inject, Vue, Watch } from "vue-property-decorator";
import { User } from "../../../domains/users/User";
import { UserAvatarComponent } from "../components";
import UserFormContainer from "./UserFormContainer.vue";
import { Debouncer } from "../../../utils/Debouncer";
import { AvatarQueryEmailService } from "../../../domains/avatar/services/AvatarQueryEmailService";
import { Action } from "vuex-class";
import { ShowSpinnerAction } from "../../global/store/ShowSpinnerAction";

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
  debouncer!: Debouncer;

  @Inject()
  avatarQueryEmailService!: AvatarQueryEmailService;

  @Action
  enable!: ShowSpinnerAction;

  debouncedQueryEmail!: () => void;

  created() {
    this.debouncedQueryEmail = this.debouncer.debounce(async () => {
      const user = await this.avatarQueryEmailService.queryEmail(this.email);
      this.user = user;
    }, 1000);
  }

  @Watch("email")
  onEmailChange() {
    this.debouncedQueryEmail();
  }

  updateEmail(email: string) {
    this.email = email;
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
