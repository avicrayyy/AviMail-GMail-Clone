import React from "react";
import { Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import "./styles.css";

// Reducers
import { login } from "../../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png"
            alt="avi-mail-logo-lmao"
          />
        </div>
        <span className="login__logoName">AviMail</span>
        <Button
          onClick={signIn}
          variant="contained"
          color="primary"
          startIcon={<AccountCircle />}
        >
          Sign-In with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
