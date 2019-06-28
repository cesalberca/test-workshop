import { SpinnerState } from "./SpinnerState";
import { Module } from "vuex";
import { RootState } from "./RootState";
import { SpinnerMutations } from "./SpinnerMutations";
import { SpinnerActions } from "./SpinnerActions";

export class SpinnerStore {
  get(): Module<SpinnerState, RootState> {
    return {
      namespaced: true,
      mutations: SpinnerMutations.create().get(),
      actions: SpinnerActions.create().get(),
      state: SpinnerState.create()
    };
  }

  public static create() {
    return new SpinnerStore();
  }
}
