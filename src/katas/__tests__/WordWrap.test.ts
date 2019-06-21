import { WordWrap } from "../WordWrap";

describe("WordWrap", () => {
  it("debería no añadir saltos de línea si el texto cabe en el número establecido de columnas", () => {
    const text = "hola";
    const columns = 20;

    const result = WordWrap.wrap(text, columns);

    expect(result).toEqual("hola");
  });

  it("debería añadir un salto de línea si el texto no encaja en el número de columnas establecido", () => {
    const text = "hola";
    const columns = 2;

    const result = WordWrap.wrap(text, columns);

    expect(result).toEqual("ho\nla");
  });

  it("debería añadir tantos saltos de línea como fuesen necesarios si el texto no cabe en el número de columnas establecidos", () => {
    const text = "hola mundo que tal";
    const columns = 4;

    const result = WordWrap.wrap(text, columns);

    expect(result).toEqual("hola\n" + "mund\n" + "o\n" + "que\n" + "tal");
  });

  it("debería añadir un salto de línea intentando no romper las palabras", () => {
    const text = "hola mundo";
    const columns = 7;

    const result = WordWrap.wrap(text, columns);

    expect(result).toEqual("hola\nmundo");
  });
});

