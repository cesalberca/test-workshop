import { ActionContext, ActionTree } from "vuex";
import { Delayer } from "../../../utils/Delayer";
import { SpinnerState } from "./SpinnerState";
import { RootState } from "./RootState";
import { SpinnerMutations } from "./SpinnerMutations";

export class ShowSpinnerAction {
  public constructor(private readonly delayer: Delayer) {}

  public showSpinner = async (
    context: ActionContext<SpinnerState, RootState>
  ): Promise<void> => {
    this.delayer
      .setCallback(() => context.commit(SpinnerMutations.names.enable))
      .start();
  };

  public disableSpinner = async (
    context: ActionContext<SpinnerState, RootState>
  ): Promise<void> => {
    context.commit(SpinnerMutations.names.disable);
  };

  public get(): ActionTree<SpinnerState, RootState> {
    return {
      showSpinner: this.showSpinner,
      disableSpinner: this.disableSpinner
    };
  }

  public static create() {
    return new ShowSpinnerAction(Delayer.createEmpty());
  }
}
