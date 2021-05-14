import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setMessage("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(login.tryLogin(username, password))
    //   .then((response) => {
    //     if (response.status === 400) {
    //       setMessage("Incorrect username or password.");
    //     } else if (response.status === 500) {
    //       setMessage("Internal server errror. Try again in a few minutes.");
    //     }
    //   })
    //   .catch((error) => {
    //     setMessage("Server down. Try again in a few minutes.");
    //   });
  };

  const history = useHistory();
  const isLoggedIn = false;

  if (isLoggedIn) {
    history.push("/");
    window.location.reload();
  }

  useEffect(() => {
    document.title = "Login";
  });

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className='box'>
          {message && (
            <div className='alert alert-danger' role='alert'>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={handleEmail}
              autoComplete='on'
              required
            />
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={handlePassword}
              autoComplete='on'
              required
            />
            <button className='styledButton'>Log In</button>
            <a href='#'>Forgot password?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
