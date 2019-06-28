import Vuex from "vuex";
import { GlobalModule } from "../global/store/GlobalModule";
import { namespace } from "vuex-class";
import { SpinnerStore } from "../global/store/SpinnerStore";

export class Store {
  public static readonly GlobalModule = namespace("global");
  public static readonly SpinnerModule = namespace("spinner");

  public static create() {
    return new Vuex.Store({
      modules: {
        global: GlobalModule,
        spinner: SpinnerStore.create().get()
      }
    });
  }
}
