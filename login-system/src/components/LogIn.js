import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const [username, setUsername] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [usernameEmpty, setUsernameEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "") {
      setUsernameEmpty(true);
      alert("Enter a username");
      return; // Stop the submit
    }

    if (password === "") {
      setPasswordEmpty(true);
      alert("Enter a password");

      return; // Stop the submit
    }

    const userData = database.find((user) => user.username === username);

    if (userData) {
      if (userData.password === password) {
        navigate("/successful", { state: { username } });
      } else {
        navigate("/unsuccessful");
      }
    } else {
      navigate("/unsuccessful");
    }
  };
  //hi
  return (
    <body>
      <div className="page-container">
        <div className="log-in-container">
          <div className="contents">
            <div className="header">
              <h1>Sign in</h1>
              <p>Welcome back</p>
            </div>
            <div className="log-in-details">
              <div className="username-container">
                <h1>Username</h1>
                <form className="text-container">
                  <input
                    type="text"
                    name="uname"
                    onChange={handleUsernameChange}
                  />{" "}
                  {/* Add onChange handler */}
                </form>
              </div>
              <div className="password-container">
                <h1>Password</h1>
                <form className="text-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="pass"
                    onChange={handlePasswordChange}
                  />
                  {password.length > 0 && (
                    <FontAwesomeIcon
                      id="visibility-toggle"
                      icon={passwordVisible ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      style={{ display: "block" }}
                    />
                  )}
                </form>
              </div>
            </div>
            <button type="submit" onClick={handleSubmit} id="submit-btn">
              Log in
            </button>
            <div id="sign-up">
              <span>Don't have an account?</span>
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
