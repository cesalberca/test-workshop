import { UserValidationService } from "../UserValidationService";
import { User } from "../User";

describe("UserValidationService", () => {
  let userValidationService: UserValidationService;

  beforeEach(() => {
    userValidationService = new UserValidationService();
  });

  it("should check if the email is valid", () => {
    const notValidEmail = "not valid email";
    const user = new User(notValidEmail, "");

    const actual = userValidationService.validate(user);

    expect(actual).toBe(false);
  });

  it("should check if the email has a domain", () => {
    const notValidEmail = "user@";
    const user = new User(notValidEmail, "");

    const actual = userValidationService.validate(user);

    expect(actual).toBe(false);
  });

  it("should check if the email has a name", () => {
    const notValidEmail = "@domain.com";
    const user = new User(notValidEmail, "");

    const actual = userValidationService.validate(user);

    expect(actual).toBe(false);
  });

  it("should check if the email is valid", () => {
    const validEmail = "user@domain.com";
    const user = new User(validEmail, "");

    const actual = userValidationService.validate(user);

    expect(actual).toBe(false);
  });
});
