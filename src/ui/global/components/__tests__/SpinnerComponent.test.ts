import { SpinnerComponent } from "../index";
import { shallowMount } from "@vue/test-utils";

describe("SpinnerComponent", () => {
  it("should show component if it is loading", () => {
    const wrapper = shallowMount(SpinnerComponent, {
      propsData: {
        isLoading: true
      }
    });
    const spinner = wrapper.find("p").isVisible();

    expect(spinner).toBeTruthy();
  });

  it("should not show component if it is loading", () => {
    const wrapper = shallowMount(SpinnerComponent, {
      propsData: {
        isLoading: false
      }
    });

    const spinner = wrapper.find("p").isVisible();
    expect(spinner).toBeFalsy();
  });
});
