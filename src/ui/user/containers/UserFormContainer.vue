<template>
  <UserFormComponent
    @on-email-change="updateEmail"
    :has-error="!isEmailValid"
  />
</template>
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import { UserFormComponent } from "../components";
import { UserValidationService } from "../../../domains/users/UserValidationService";
import { User } from "../../../domains/users/User";

@Component({
  components: {
    UserFormComponent
  }
})
export default class UserFormContainer extends Vue {
  email: string = "";

  @Inject()
  userValidationService!: UserValidationService;

  updateEmail(email: string): void {
    this.email = email;

    if (this.isEmailValid) {
      this.$emit("on-valid-email-change", this.email);
    }
  }

  get isEmailValid(): boolean {
    return this.userValidationService.validate(new User(this.email, ""));
  }
}
</script>
<style scoped></style>
