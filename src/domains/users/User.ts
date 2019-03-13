export class User {
  public constructor(
    public readonly email: string,
    private readonly photo: string
  ) {}

  public static empty(): User {
    return new User("", "");
  }

  public exists(): boolean {
    return this.photo.length !== 0;
  }
}
