import React from "react";

const Register = () => {
  return (
    <div className="contanier">
      <div className="login-box">
        <div className="header-login">
          <h1 className="login">Register</h1>
        </div>

        <form>
          <div className="form-group">
            <input type="text" className="form-input" />
            <label className="form-label">First Name</label>
          </div>
          <div className="form-group">
            <input type="text" className="form-input" />
            <label className="form-label">Last Name</label>
          </div>
          <div className="form-group">
            <input type="email" className="form-input" />
            <label className="form-label">Email address</label>
          </div>
          <div className="form-group">
            <input type="password" className="form-input" />
            <label className="form-label">Password</label>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
