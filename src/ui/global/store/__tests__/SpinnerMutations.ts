import { SpinnerMutations } from "../SpinnerMutations";
import { SpinnerState } from "../SpinnerState";

describe("SpinnerMutations", () => {
  const mutations = new SpinnerMutations();

  it("should set is loading to true when enabling spinner", () => {
    const state = new SpinnerState();

    mutations.enable(state);

    expect(state.isLoading).toBe(true);
  });

  it("should set is loading to false when disabling spinner", () => {
    const state = new SpinnerState();

    mutations.disable(state);

    expect(state.isLoading).toBe(false);
  });
});
