import "./login.css";
import { useState } from "react";
import loginService from "../../services/login";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    console.log("The form has been submitted", email, password);
    loginService
      .login({ email, password })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return (
    <div className="contanier">
      <div className="login-box">
        <h1 className="login">Login</h1>
        <form onSubmit={formHandler}>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label">Email address</label>
          </div>
          <div className="form-group">
            <input type="password" className="form-input" />
            <label
              className="form-label"
              onChange={(e) => setPassword(e.target.value)}
            >
              Password
            </label>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
