import md5 from "md5";

export class Hasher {
  public hash(string: string) {
    return md5(string);
  }
}
