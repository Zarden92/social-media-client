import { login } from "../../api/auth/login.js";
import * as storage from "../../storage/index.js";
import MockLocalStorage from "../../mock/mockLocalStorage.js";

const access_token = "1337";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ accessToken: access_token }),
});

describe("the login function", () => {
  let originalFetch;
  let originalLocalStorage;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = mockFetchSuccess;

    originalLocalStorage = global.localStorage;
    global.localStorage = new MockLocalStorage();
  });

  afterEach(() => {
    global.fetch = originalFetch;
    global.localStorage = originalLocalStorage;
  });

  it("stores a token when provided with valid credentials", async () => {
    await login("email", "password");
    expect(storage.load("token")).toEqual(access_token);
  });
});
