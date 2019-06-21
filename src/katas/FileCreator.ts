export class FileCreator {
  public constructor(private readonly files: string[]) {}

  public overwrite(name: string) {
    return name;
  }

  public copy(name: string): string {
    const originalName = name;
    return this.getNextAvailableName(originalName, name);
  }

  private getNextAvailableName(originalName: string, name: string, n = 1): string {
    if (!this.files.includes(name)) {
      return name;
    }

    const nextName = `${originalName} (${n})`;
    return this.getNextAvailableName(originalName, nextName, n + 1);
  }
}
