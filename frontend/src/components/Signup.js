import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [classStudying, setClassStudying] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setMessage("");
  };

  const handleClassStudyingChange = (e) => {
    setClassStudying(e.target.value);
    setMessage("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(signup.trySignup(email, username, password))
    //   .then((response) => {
    //     if (response.status === 400) {
    //       if ("email" in response.data && "username" in response.data) {
    //         setMessage("Email and username already exists.");
    //       } else if ("email" in response.data) {
    //         setMessage("Email already exists.");
    //       } else {
    //         setMessage("Username already exists.");
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     alert(
    //       "An unknown error occurred. Try again. If the error persists, please contact us. Generated error:\n" +
    //         err
    //     );
    //   });
  };

  useEffect(() => {
    document.title = "Signup";
  });

  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

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
              type='text'
              name='name'
              value={name}
              placeholder='Name'
              onChange={handleNameChange}
              required
            />
            <select
              className='w-100'
              name='classStudying'
              style={{ textAlignLast: "center" }}
              onChange={handleClassStudyingChange}
              value={classStudying}>
              <option value='0' disabled hidden>
                Class
              </option>
              <option className='bg-black' value='LKG'>
                LKG-A
              </option>
              <option className='bg-black' value='UKG'>
                UKG-A
              </option>
              <option className='bg-black' value='1'>
                1-A
              </option>
            </select>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={handleEmailChange}
              required
            />
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={handlePasswordChange}
              required
            />
            <button className='styledButton'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
