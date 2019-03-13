import { User } from "./User";

export class UserValidationService {
  /**
   * 1. Should check if the email has one @
   * 2. Should check that there is at least one character before the @
   * 3. Should have a dot after the @
   */
  public validate(user: User) {
    if (!user.email.includes("@")) {
      return false;
    }

    return true;
  }
}
