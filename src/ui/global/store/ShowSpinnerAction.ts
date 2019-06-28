import { ActionContext, ActionTree } from "vuex";
import { Delayer } from "../../../utils/Delayer";
import { SpinnerState } from "./SpinnerState";
import { RootState } from "./RootState";

export class ShowSpinnerAction {
  public constructor(private readonly delayer: Delayer) {}

  public showSpinner = async (
    context: ActionContext<SpinnerState, RootState>
  ): Promise<void> => {
    this.delayer
      .setCallback(() => context.commit("TOGGLE_SPINNER", true))
      .start();
  };

  public get(): ActionTree<SpinnerState, RootState> {
    return {
      showSpinner: this.showSpinner
    };
  }

  public static create() {
    return new ShowSpinnerAction(Delayer.createEmpty());
  }
}
