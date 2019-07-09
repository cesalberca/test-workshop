import { ShowSpinnerAction } from "../ShowSpinnerAction";
import { Delayer } from "../../../../utils/Delayer";
import { ActionContext } from "vuex";
import mock = jest.mock;

describe("ShowSpinnerAction", () => {
  it("should call delayer with given callback", async () => {
    expect.assertions(2);
    const commit = jest.fn();
    const start = jest.fn();
    const mock: Partial<Delayer> = {
      start,
      setCallback: jest.fn().mockReturnValue({ start })
    };
    const showSpinnerAction = new ShowSpinnerAction(mock as Delayer);
    const context: Partial<ActionContext<any, any>> = {
      commit
    };

    await showSpinnerAction.showSpinner(context as ActionContext<any, any>);

    expect(mock.setCallback).toHaveBeenCalled();
    expect(mock.start).toHaveBeenCalled();
  });

  it("should disable spinner", async () => {
    expect.assertions(1);
    const commit = jest.fn();
    const start = jest.fn();
    const mock: Partial<Delayer> = {
      start,
      setCallback: jest.fn().mockReturnValue({ start })
    };
    const showSpinnerAction = new ShowSpinnerAction(mock as Delayer);
    const context: Partial<ActionContext<any, any>> = {
      commit
    };

    await showSpinnerAction.disableSpinner(context as ActionContext<any, any>);

    expect(context.commit).toHaveBeenCalledWith("disable");
  });
});
