import { ActionContext } from "vuex";
import { Delayer } from "../../../utils/Delayer";

export class ShowSpinnerAction {
  public constructor(private readonly delayer: Delayer) {}

  public async showSpinner(
    context: ActionContext<{ isLoading: boolean }, { isLoading: boolean }>
  ): Promise<void> {
    this.delayer
      .setCallback(() => context.commit("TOGGLE_SPINNER", true))
      .start();
  }

  public static create() {
    return new ShowSpinnerAction(Delayer.createEmpty());
  }
}
