import { User } from "../../../users/User";
import { AvatarRepository } from "../AvatarRepository";
import { AvatarBlobRepository } from "../AvatarBlobRepository";

describe("AvatarBlobResponse", () => {
  let fetcherMock: any;
  let createObjectUrlMock: any;
  let gravatarRepository: AvatarRepository;

  beforeEach(() => {
    createObjectUrlMock = jest.fn();

    (global as any).URL = {
      createObjectURL: createObjectUrlMock
    };

    fetcherMock = jest.fn(() =>
      Promise.resolve({
        blob: () => Promise.resolve("foo")
      })
    );
    gravatarRepository = new AvatarBlobRepository(fetcherMock);
  });

  it("should get the user email", async () => {
    const hash = "123";

    await gravatarRepository.getUserByEmailHash(hash);

    expect(fetcherMock).toHaveBeenCalledWith(
      "https://cors-anywhere.herokuapp.com/http://cdn.libravatar.org/avatar/123"
    );
  });

  it("should format the response into user", async () => {
    const hash = "123";
    createObjectUrlMock.mockImplementation(() => "foo");

    const result = await gravatarRepository.getUserByEmailHash(hash);

    expect(result).toEqual(new User("foo"));
  });
});
