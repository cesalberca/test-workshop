import { AvatarRepository } from "./AvatarRepository";
import { AvatarBlobRepository } from "./AvatarBlobRepository";
import { Fetcher } from "../../Fetcher";

export class AvatarRepositoryFactory {
  public static createAvatarPhotoRepository(): AvatarRepository {
    const fetcher = window.fetch.bind(window) as Fetcher;
    return new AvatarBlobRepository(fetcher);
  }
}
