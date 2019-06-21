import { FileCreator } from "../FileCreator";

describe("FileCreator", () => {
  it("si un fichero no existe al copiar el fichero, debe mantener el nombre", () => {
    const fileCreator = new FileCreator(["foo", "bar"]);

    const actual = fileCreator.copy("baz");

    expect(actual).toBe("baz");
  });
});
