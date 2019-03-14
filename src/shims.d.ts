import { Module as Mod } from "vuex";

declare module "vuex-module-decorators" {
  class VuexModule<S = ThisType<any>, R = any> implements Mod<S, R> {
    constructor();
  }
}
