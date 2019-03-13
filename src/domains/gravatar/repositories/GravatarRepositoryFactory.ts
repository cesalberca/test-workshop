import { GravatarRepository } from "./GravatarRepository";
import { GravatarBlobRepository } from "./GravatarBlobRepository";
import { Fetcher } from "../../Fetcher";

export class GravatarRepositoryFactory {
  public static createGravatarPhotoRepository(): GravatarRepository {
    const fetcher = window.fetch.bind(window) as Fetcher;
    return new GravatarBlobRepository(fetcher);
  }
}
