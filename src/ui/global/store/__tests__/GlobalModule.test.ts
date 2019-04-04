import { GlobalModule } from "../GlobalModule";

jest.mock("vuex-module-decorators");

describe("GlobalModule", () => {
  it("should mutate state when dispatching loading action", async () => {
    expect.assertions(1);
    const module = new GlobalModule({});

    await module.hideSpinner()

    expect(module.isLoading).toBeFalsy()
  });

  it("should mutate state when dispatching loaded action", async () => {
    expect.assertions(1);
    const module = new GlobalModule({});

    await module.showSpinner()

    expect(module.isLoading).toBeTruthy()
  });
});
