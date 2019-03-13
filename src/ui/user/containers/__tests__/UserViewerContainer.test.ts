import Vue from "vue";
import { shallowMount, Wrapper } from "@vue/test-utils";
import { User } from "../../../../domains/users/User";
import { flushPromises } from "../../../../utils/flushPromises";
import { UserViewerContainer } from "../index";
import { AvatarRepository } from "../../../../domains/avatar/repositories/AvatarRepository";

describe("UserViewerContainer", () => {
  let wrapper: Wrapper<Vue>;
  let avatarRepositoryMock: AvatarRepository;
  let debouncerMock: { debounce: jest.Mock };
  let hasherMock: { hash: jest.Mock };

  beforeEach(() => {
    hasherMock = {
      hash: jest.fn()
    };

    debouncerMock = {
      debounce: jest.fn((func: Function) => () => func())
    };
    avatarRepositoryMock = {
      getUserByEmailHash: jest
        .fn()
        .mockReturnValue(Promise.resolve(new User("foo", "foo")))
    };

    wrapper = shallowMount(UserViewerContainer, {
      provide: {
        avatarRepository: avatarRepositoryMock,
        debouncer: debouncerMock,
        hasher: hasherMock
      }
    });
  });

  it("should call repository when email changes", async () => {
    const userFormComponent = wrapper.find({ name: "UserFormContainer" });

    userFormComponent.vm.$emit("on-valid-email-change", "foo@foo.com");
    await flushPromises();

    expect(avatarRepositoryMock.getUserByEmailHash).toHaveBeenCalled();
  });

  it("should debounce call when email changes", async () => {
    const userFormComponent = wrapper.find({ name: "UserFormContainer" });

    userFormComponent.vm.$emit("on-valid-email-change", "foo@foo.com");
    await flushPromises();

    expect(debouncerMock.debounce).toHaveBeenCalled();
  });

  it("should set user to child component", async () => {
    const userFormComponent = wrapper.find({ name: "UserFormContainer" });
    const avatarComponent = wrapper.find({ name: "UserAvatarComponent" });

    userFormComponent.vm.$emit("on-valid-email-change", "foo@foo.com");
    await flushPromises();

    expect(avatarComponent.props("user").photo).toBe("foo");
  });

  it("should use the hasher", async () => {
    expect.assertions(1);

    const userFormComponent = wrapper.find({ name: "UserFormContainer" });

    userFormComponent.vm.$emit("on-valid-email-change", "foo@foo.com");
    await flushPromises();

    expect(hasherMock.hash).toHaveBeenCalledWith("foo@foo.com");
  });
});
