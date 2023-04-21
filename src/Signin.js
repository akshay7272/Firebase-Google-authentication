import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import { GoogleButton } from "react-google-button";

function SignIn() {
  const [value, setValue] = useState("");
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <GoogleButton
          className="g-btn"
          style={{ marginLeft: "45%", marginTop: "20%" }}
          variant="contained"
          onClick={handleGoogleSignIn}
        />
      )}
    </div>
  );
}
export default SignIn;
