import { User } from "../../users/User";
import { Fetcher } from "../../Fetcher";
import { AvatarRepository } from "./AvatarRepository";

export class AvatarBlobRepository implements AvatarRepository {
  private url: string;

  public constructor(private readonly fetcher: Fetcher) {
    this.url =
      "https://cors-anywhere.herokuapp.com/http://cdn.libravatar.org/avatar";
  }

  public async getUserByEmailHash(hash: string): Promise<User> {
    const response = await this.fetcher(`${this.url}/${hash}`);
    const result = await response.blob();
    const object = URL.createObjectURL(result);
    return new User(object);
  }
}
