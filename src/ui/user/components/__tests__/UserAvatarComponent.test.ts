import Vue from "vue";
import { Wrapper, shallowMount } from "@vue/test-utils";
import { User } from "../../../../domains/users/User";
import { UserAvatarComponent } from "../index";

describe("UserAvatarComponent", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(UserAvatarComponent);
  });

  it("should hide if the user doesn't exist", () => {
    wrapper.setProps({ user: User.empty() });

    expect(wrapper.html()).toBeUndefined();
  });

  it("should show if the user exists", () => {
    wrapper.setProps({ user: new User("foo") });

    expect(wrapper.html()).toBeDefined();
  });

  it("should set the image url with the user's photo", () => {
    wrapper.setProps({ user: new User("foo") });

    const image = wrapper.find("img");
    expect(image.attributes("src")).toEqual("foo");
  });
});
