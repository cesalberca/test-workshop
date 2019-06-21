import { FileCreator } from "../FileCreator";

describe("FileCreator", () => {
  it("Si un fichero no existe al copiar el fichero, debe mantener el nombre", () => {
    const fileCreator = new FileCreator(["foo", "bar"]);

    const actual = fileCreator.copy("baz");

    expect(actual).toBe("baz");
  });

  it("Si un fichero no existe al sobreescribir el fichero, debe mantener el nombre", () => {
    const fileCreator = new FileCreator(["foo", "bar"]);

    const actual = fileCreator.overwrite("baz");

    expect(actual).toBe("baz");
  });
});
