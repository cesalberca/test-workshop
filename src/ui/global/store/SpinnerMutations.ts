import { SpinnerState } from "./SpinnerState";
import { MutationTree } from "vuex";

export class SpinnerMutations {
  enable(state: SpinnerState) {
    state.isLoading = true;
  }

  disable(state: SpinnerState) {
    state.isLoading = false;
  }

  get(): MutationTree<SpinnerState> {
    return {
      enable: this.enable
    };
  }
}
