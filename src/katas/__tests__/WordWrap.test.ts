import { WordWrap } from "../WordWrap";

describe("WordWrap", () => {
  it("debería no añadir saltos de línea si el texto cabe en el número establecido de columnas", () => {
    const text = "hola";
    const columns = 20;

    const result = WordWrap.wrap(text, columns);

    expect(result).toEqual("hola");
  });
});
