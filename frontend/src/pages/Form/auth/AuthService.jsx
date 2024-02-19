import axios from "axios";

export const registerAuthService = async (form) => {
  const submitform = {
    email: form.email,
    staffId: form.staffId,
    name: form.name,
    password: form.password,
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/api/admin/register",
      submitform
    );

    if (response.status === 201 && response.data.token) {
      return response.data.token;
    } else {
      throw new Error("Attempt failed. Please try again.");
    }
  } catch (error) {
    console.error("Error occurred during authentication:", error);
    throw new Error("Error occurred during authentication.");
  }
};

export const loginAuthService = async (form) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/admin/login",
      form
    );

    if (response.status === 200 && response.data.token) {
      return response.data.token;
    } else if (response.status === 401) {
      return "unauthorized";
    } else {
      throw new Error("Login failed please try again");
    }
  } catch (error) {
    console.error("Error occurred during authentication:", error);
    throw new Error("Error occurred during authentication.");
  }
};
