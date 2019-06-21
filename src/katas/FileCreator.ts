export class FileCreator {
  private originalName = "";

  public constructor(private readonly files: string[]) {}

  public overwrite(name: string) {
    return name;
  }

  public copy(name: string, n = 1): string {
    if (n === 1) {
      this.originalName = name;
    }

    if (!this.files.includes(name)) {
      return name;
    }

    const nextName = `${this.originalName} (${n})`;
    return this.copy(nextName, n + 1);
  }
}
