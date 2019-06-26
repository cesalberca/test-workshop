import UserFormContainer from "../UserFormContainer.vue";
import { shallowMount } from "@vue/test-utils";

describe("UserFormContainer", () => {
  it("should emit email after it is validated correctly", () => {
    const { wrapper, userValidationService } = createWrapper();
    userValidationService.validate.mockReturnValue(true);

    const component = wrapper.find({ name: "UserFormComponent" });
    component.vm.$emit("on-email-change", "foo@bar.com");
    const actual = wrapper.emitted("on-valid-email-change");

    expect(actual).toEqual([["foo@bar.com"]]);
  });

  it("should not emit email after it is validated incorrectly", () => {
    const { wrapper, userValidationService } = createWrapper();
    userValidationService.validate.mockReturnValue(false);

    const component = wrapper.find({ name: "UserFormComponent" });
    component.vm.$emit("on-email-change", "foo@bar.com");
    const actual = wrapper.emitted("on-valid-email-change");

    expect(actual).not.toEqual([["foo@bar.com"]]);
  });
});

function createWrapper(props: object = {}) {
  const userValidationService = { validate: jest.fn().mockReturnValue(true) };
  return {
    wrapper: shallowMount(UserFormContainer, {
      propsData: {
        ...props
      },
      provide: {
        userValidationService
      }
    }),
    userValidationService
  };
}
