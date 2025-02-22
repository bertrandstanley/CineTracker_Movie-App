import { UserLogin } from "../interfaces/UserLogin";  // Import UserLogin interface
import { UserSignUp } from "../interfaces/UserSignUp"; // Import UserSignUp interface

// POST request to '/auth/login' endpoint with user login information
const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    // Throw error if response status is not valid
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response as JSON
      throw new Error(errorData.message || "Invalid username or password"); // Throw a detailed error message
    }

    // Parse the response body as JSON
    const data = await response.json();
    return data; // Return the data received from the server
  } catch (err) {
    console.log("Error from user login: ", err);
    // Check if the error has a message, otherwise use a default
    return Promise.reject(err instanceof Error ? err.message : "Could not fetch user info");
  }
}

const signUp = async (userInfo: UserSignUp) => {
  try {
    // Send a POST request to '/auth/login' with user signup information
    const response = await fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    // Throw error if response status is not valid
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response as JSON
      throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message
    }

    // Parse the response body as JSON
    const data = await response.json();
    return data; // Return the data received from the server
  } catch (err) {
    console.log("Error from user login: ", err);
    return Promise.reject("Could not fetch user info"); // Return a rejected promise with an error message
  }
};

export { login, signUp };
