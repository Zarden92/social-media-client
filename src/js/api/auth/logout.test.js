import { logout } from "../../api/auth/logout.js";
import MockLocalStorage from "../../mock/mockLocalStorage.js";

describe("the logout function", () => {
  it("removes token from storage", () => {
    // Arrange: Create a new instance of MockLocalStorage
    const mockStorage = new MockLocalStorage();

    // Act: Set global.localStorage to the mock storage instance
    global.localStorage = mockStorage;

    // Set a token initially
    mockStorage.setItem("token", "1337");

    // Act: Call the logout function
    logout();

    // Assert: Check if the token is removed from storage
    expect(global.localStorage.getItem("token")).toBeNull();
  });
});
