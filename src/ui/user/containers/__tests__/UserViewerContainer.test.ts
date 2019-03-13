import Vue from "vue";
import { shallowMount, Wrapper } from "@vue/test-utils";
import { User } from "../../../../domains/users/User";
import { flushPromises } from "../../../../utils/flushPromises";
import { UserViewerContainer } from "../index";
import { AvatarRepository } from "../../../../domains/avatar/repositories/AvatarRepository";

describe("UserViewerContainer", () => {
  let wrapper: Wrapper<Vue>;
  let gravatarRepositoryMock: AvatarRepository;
  let debounceMock: jest.Mock;
  let hasherMock: jest.Mock;

  beforeEach(() => {
    hasherMock = jest.fn();
    debounceMock = jest.fn((func: Function) => () => func());
    gravatarRepositoryMock = {
      getUserByEmailHash: jest
        .fn()
        .mockReturnValue(Promise.resolve(new User("foo")))
    };

    wrapper = shallowMount(UserViewerContainer, {
      provide: {
        gravatarRepository: gravatarRepositoryMock,
        debounce: debounceMock,
        hasher: hasherMock
      }
    });
  });

  it("should call gravatarRepository when email changes", async () => {
    const userFormComponent = wrapper.find({ name: "UserFormComponent" });

    userFormComponent.vm.$emit("on-email-change", "foo@foo.com");
    await flushPromises();

    expect(gravatarRepositoryMock.getUserByEmailHash).toHaveBeenCalled();
  });

  it("should debounce call when email changes", async () => {
    const userFormComponent = wrapper.find({ name: "UserFormComponent" });

    userFormComponent.vm.$emit("on-email-change", "foo@foo.com");
    await flushPromises();

    expect(debounceMock).toHaveBeenCalled();
  });

  it("should set user to child component", async () => {
    const userFormComponent = wrapper.find({ name: "UserFormComponent" });
    const avatarComponent = wrapper.find({ name: "UserAvatarComponent" });

    userFormComponent.vm.$emit("on-email-change", "foo@foo.com");
    await flushPromises();

    expect(avatarComponent.props("user").photo).toBe("foo");
  });

  it("should use the hasher", async () => {
    expect.assertions(1);

    const userFormComponent = wrapper.find({ name: "UserFormComponent" });

    userFormComponent.vm.$emit("on-email-change", "foo@foo.com");
    await flushPromises();

    expect(hasherMock).toHaveBeenCalledWith("foo@foo.com");
  });
});
