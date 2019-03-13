import { UserValidationService } from "../UserValidationService";
import { User } from "../User";

describe("UserValidationService", () => {
  let userValidationService: UserValidationService;

  beforeEach(() => {
    userValidationService = new UserValidationService();
  });

  it("should check if the email is valid", () => {
    const email = "not valid email";
    const user = new User(email, "");

    const result = userValidationService.validate(user);

    expect(result).toBeFalsy();
  });
});
