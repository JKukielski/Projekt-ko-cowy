import React, { useEffect, useState } from "react";
import "./login.scss";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(username));
  }, [username]);

  return (
    <div className="app__login">
      <div className="app__login-content">
        <h2 className="app__login-heading">LOGIN</h2>
        <p className="app__login-subheading">
          Please enter your username below:
        </p>
        <form className="app__login-form" onSubmit={handleLogin}>
          <input type="text" value={username} onChange={handleChange} />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
