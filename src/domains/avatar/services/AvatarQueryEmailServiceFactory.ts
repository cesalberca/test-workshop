import { AvatarQueryEmailService } from "./AvatarQueryEmailService";
import { Hasher } from "../../../utils/Hasher";
import { AvatarRepositoryFactory } from "../repositories/AvatarRepositoryFactory";

export class AvatarQueryEmailServiceFactory {
  public static build() {
    return new AvatarQueryEmailService(
      new Hasher(),
      AvatarRepositoryFactory.createAvatarPhotoRepository()
    );
  }
}
