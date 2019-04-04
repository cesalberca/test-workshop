import { ActionContext } from "vuex";

export class GetAction {
  public async showSpinner(
    context: ActionContext<{ isLoading: boolean }, { isLoading: boolean }>
  ): Promise<void> {
    context.commit("TOGGLE_SPINNER", true);
  }
}
