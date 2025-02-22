import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Auth from '../utils/auth';
import { signUp } from "../api/authAPI";
import { UserSignUp } from "../interfaces/UserSignUp";

const SignUp = () => {
  const navigate = useNavigate();

  // State to manage the login form data
  const [signUpData, setSignUpData] = useState<UserSignUp>({
    username: "",
    email: "",
    password: "",
  });

  // Handle changes in the input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  // Handle form submission for singup
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signUp(signUpData);
      Auth.login(data.token);
      navigate("/Movies");
    } catch (err) {
      console.error("Failed to sign up", err);
    }
  };

  return (
    <div className="form-container">
      <form className="form sign-up-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            value={signUpData.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-input"
            type="text"
            name="email"
            value={signUpData.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={signUpData.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
