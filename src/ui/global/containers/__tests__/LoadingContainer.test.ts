import { LoadingContainer } from "../index";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";

describe("LoadingContainer", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  it("should map state", () => {
    const wrapper = shallowMount(LoadingContainer, {
      localVue,
      store: new Vuex.Store({
        modules: {
          global: {
            namespaced: true,
            state: {
              isLoading: true
            }
          }
        }
      })
    });

    const spinnerComponent = wrapper.find({ name: "SpinnerComponent" });
    expect(spinnerComponent.props("isLoading")).toEqual(true);
  });
});
