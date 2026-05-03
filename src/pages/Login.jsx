import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Welcome Back</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn-primary">Sign In</button>
      </form>
      <div className="form-footer">
        <p>Don't have an account? <Link to="/register">Create Account</Link></p>
      </div>
    </div>
  );
};

export default Login;
