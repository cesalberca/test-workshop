import { User } from "./User";

export class UserValidationService {
  public isValid(user: User) {
    const parts = user.email.split("@");
    const hasFirstPart = this.hasPart(parts[0])
    const hasSecondPart = this.hasPart(parts[1])
    const hasAt = user.email.includes("@");

    const validations = [hasAt, hasFirstPart, hasSecondPart];

    return validations.every(Boolean);
  }

  private hasPart(part: string) {
    return ![undefined, ""].includes(part);
  }
}
