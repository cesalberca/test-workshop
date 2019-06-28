import { SpinnerState } from "./SpinnerState";
import { MutationTree } from "vuex";

export class SpinnerMutations {
  static names = {
    enable: 'enable',
    disable: 'disable'
  }


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

  public static create() {
    return new SpinnerMutations();
  }
}
