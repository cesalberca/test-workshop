import { Hasher } from "../../../utils/Hasher";
import { User } from "../../users/User";
import { AvatarRepository } from "../repositories/AvatarRepository";

export class AvatarQueryEmailService {
  constructor(
    private readonly hasher: Hasher,
    private readonly avatarRepository: AvatarRepository
  ) {}

  public async queryEmail(email: string): Promise<User> {
    const hash = this.hasher.hash(email);
    const user = await this.avatarRepository.getUserByEmailHash(hash);
    return user;
  }
}
