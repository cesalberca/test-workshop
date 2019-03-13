import Vue from "vue";
import { shallowMount, Wrapper } from "@vue/test-utils";
import { UserFormComponent } from "../index";

describe("UserFormComponent", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(UserFormComponent);
  });

  it("should emit event", () => {
    const input = wrapper.find("input");
    (input.element as HTMLInputElement).value = "foo";
    input.trigger("input");
    expect(wrapper.emitted("on-email-change")[0][0]).toEqual("foo");
  });
});
