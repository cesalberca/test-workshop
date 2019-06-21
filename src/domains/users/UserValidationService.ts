import { User } from "./User";

export class UserValidationService {
  public validate(user: User) {
    const parts = user.email.split("@");
    const hasFirstPart = parts[0] !== undefined;
    const hasSecondPart = parts[1] !== undefined;
    const hasAt = user.email.includes("@");

    const validations = [hasAt, hasFirstPart, hasSecondPart];

    return validations.every(validation => !validation);
  }
}
