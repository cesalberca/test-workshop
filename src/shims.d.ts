import { Module as Mod } from "vuex";

declare module "vuex-module-decorators" {
  class VuexModule<S = ThisType<any>, R = any> implements Mod<S, R> {
    constructor();
  }
}
/*export declare class VuexModule<S = ThisType<any>, R = any> implements Mod<S, R> {
  static namespaced?: boolean;
  static state?: any | (() => any);
  static getters?: GetterTree<any, any>;
  static actions?: ActionTree<any, any>;
  static mutations?: MutationTree<any>;
  static modules?: ModuleTree<any>;
  modules?: ModuleTree<any>;
  namespaced?: boolean;
  getters?: GetterTree<S, R>;
  state?: S | (() => S);
  mutations?: MutationTree<S>;
  actions?: ActionTree<S, R>;
  context: ActionContext<S, R>;
}*/
