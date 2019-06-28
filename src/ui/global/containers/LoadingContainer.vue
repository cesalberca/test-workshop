<template>
  <SpinnerComponent :is-loading="isLoading" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Store } from "../../store/Store";
import { GlobalModule } from "../store/GlobalModule";
import { SpinnerComponent } from "../components";
import { SpinnerState } from "../store/SpinnerState";

@Component({
  components: {
    SpinnerComponent
  }
})
export default class LoadingContainer extends Vue {
  /*@Store.GlobalModule.State
  isLoading!: GlobalModule["isLoading"];*/

  @Store.SpinnerModule.State
  isLoading!: SpinnerState["isLoading"];
}
</script>
