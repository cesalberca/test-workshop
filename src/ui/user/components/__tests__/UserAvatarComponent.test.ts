import { shallowMount } from "@vue/test-utils";
import { User } from "../../../../domains/users/User";
import { UserAvatarComponent } from "../index";

describe("UserAvatarComponent", () => {
  it("should hide if the user doesn't exist", () => {
    const wrapper = createWrapper({ user: User.empty() });

    expect(wrapper.html()).toBeUndefined();
  });

  it("should show if the user exists", () => {
    const wrapper = createWrapper({ user: new User("", "foo") });

    expect(wrapper.html()).toBeDefined();
  });

  it("should set the image url with the user's photo", () => {
    const wrapper = createWrapper({ user: new User("", "foo") });

    const image = wrapper.find("img");
    expect(image.attributes("src")).toEqual("foo");
  });
});

function createWrapper(props: object = {}) {
  return shallowMount(UserAvatarComponent, {
    propsData: {
      ...props
    }
  });
}
