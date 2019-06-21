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

  it("Si un fichero ya existe y no se quiere mantener ambos debe devolver el mismo nombre", () => {
    const fileCreator = new FileCreator(["foo", "bar"]);

    const actual = fileCreator.overwrite("bar");

    expect(actual).toBe("bar");
  });

  it("Si un fichero ya existe y se quiere mantener ambos debe devolver el nombre con el sufijo (n), siendo n la última copia del fichero", () => {
    const fileCreator = new FileCreator(["foo", "bar"]);

    const actual = fileCreator.copy("bar");

    expect(actual).toBe("bar (1)");
  });
});
