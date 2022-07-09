import { useState } from "react";
import { login } from "../../config/firebase";
// import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminBool, setAdminBool] = useState(false);

  const onSignin = async () => {
    try {
      const loginState = await login(email, password);
      console.log(loginState);
      setAdminBool(true);

      localStorage.setItem("isAdminPresent", JSON.stringify(true));
      // dispatch(addUser(loginState));
    } catch (e) {
      localStorage.setItem("isAdminPresent", JSON.stringify(false));

      alert(e.message);
    }
    // console.log(loginState, "stateOfLogin");
  };

  return (
    <div>
      {!adminBool ? (
        <div className="signin">
          <div className="column">
            <h1>Sign In Please...</h1>
            <div className="inputs">
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Write email here"
              />
              <br />
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Write password here"
              />
            </div>
            <br />
            <div className="takenButtons">
              <button onClick={onSignin}>Sign In</button>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/admin/uploadDocument">click me</Link>
      )}
    </div>
  );
}

export default SignIn;
