import Vuex from "vuex";
import { GlobalModule } from "../global/store/GlobalModule";
import { namespace } from "vuex-class";

export class Store {
  public static readonly GlobalModule = namespace("global");

  private constructor() {}

  public static build() {
    return new Vuex.Store({
      modules: {
        global: GlobalModule
      }
    });
  }
}
