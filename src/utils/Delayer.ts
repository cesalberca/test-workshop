export class Delayer {
  private id: number = 0;

  public constructor(
    private readonly delay: (callback: Function, timeout: number) => number,
    private callback: Function,
    private readonly timeoutInSeconds: number = 1,
    private readonly window: Window
  ) {}

  public start() {
    this.id = this.delay(() => {
      this.callback();
    }, this.timeoutInSeconds * 1000);
  }

  public static create(callback: Function) {
    return new Delayer(window.setTimeout, callback, 1, window);
  }

  public static createEmpty() {
    return new Delayer(window.setTimeout, () => {}, 1, window);
  }

  public setCallback(callback: Function) {
    this.callback = callback
    return this
  }

  public stop() {
    this.window.clearTimeout(this.id);
  }
}
