import { User } from "../../users/User";

export interface AvatarRepository {
  getUserByEmailHash(hash: string): Promise<User>;
}
