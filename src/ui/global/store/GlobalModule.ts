import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true, name: "global" })
export class GlobalModule extends VuexModule {
  public isLoading: boolean = false;

  @Mutation
  public toggleSpinner(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @Action
  public async showSpinner() {
    this.toggleSpinner(true);
  }

  @Action
  public async hideSpinner() {
    this.toggleSpinner(false);
  }
}
