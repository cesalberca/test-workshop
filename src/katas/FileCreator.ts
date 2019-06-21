export class FileCreator {
  public constructor(private readonly files: string[]) {}

  public overwrite(name: string) {
    return name;
  }

  public copy(name: string) {
    if (this.files.includes(name)) {
      return `${name} (1)`;
    }
    return name;
  }
}
