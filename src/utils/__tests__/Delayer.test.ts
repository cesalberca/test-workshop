import { Delayer } from "../Delayer";

describe("Delayer", () => {
  it("should execute callback on given time", () => {
    jest.useFakeTimers();
    const mock = jest.fn();
    Delayer.create(mock).start();

    jest.advanceTimersByTime(1000);

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should not execute callback before the given time", () => {
    jest.useFakeTimers();
    const mock = jest.fn();
    Delayer.create(mock);

    jest.advanceTimersByTime(500);

    expect(mock).toHaveBeenCalledTimes(0);
  });

  it("should be able to clean timeout", () => {
    jest.useFakeTimers();
    const mock = jest.fn();
    const windowMock: Partial<Window> = {
      clearTimeout: jest.fn()
    }
    const delayer = new Delayer(window.setTimeout, mock, 1, windowMock as Window);
    delayer.stop()

    expect(windowMock.clearTimeout).toHaveBeenCalled()
  });
});
