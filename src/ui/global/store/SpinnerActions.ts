import { ActionTree } from "vuex";
import { SpinnerState } from "./SpinnerState";
import { RootState } from "./RootState";
import { ShowSpinnerAction } from "./ShowSpinnerAction";

export class SpinnerActions {
  get(): ActionTree<SpinnerState, RootState> {
    return {
      ...ShowSpinnerAction.create().get()
    };
  }

  public static create() {
    return new SpinnerActions();
  }
}
