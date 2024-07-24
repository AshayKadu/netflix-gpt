import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_LOGO } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid , email:email, displayName:displayName, photoURL:photoURL}))
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrMessage(errorCode + "-" + errorMessage);
            });
          

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-black bg-opacity-25"
          src={BG_IMG}
          alt="Netflix"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 absolute bg-black bg-opacity-70 p-12 my-36 mx-auto right-0 left-0 rounded-md"
      >
        <ul className="mx-10">
          <li className="font-bold text-3xl text-white pb-10">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </li>
          {!isSignInForm && (
            <li>
              <input
                ref={name}
                className="w-full p-4 rounded mb-5 bg-black border text-slate-300 bg-opacity-10"
                type="text"
                placeholder="Full Name"
              />
            </li>
          )}
          <li>
            <input
              ref={email}
              className="w-full p-4 rounded mb-5 bg-black border text-slate-300 bg-opacity-10"
              type="text"
              placeholder="Email or mobile number"
            />
          </li>
          <li>
            <input
              ref={password}
              className="w-full p-4 rounded mb-5 bg-black border text-slate-300 bg-opacity-10"
              type="password"
              placeholder="Password"
            />
          </li>
          <li>
            <p className="text-red-500 mb-5"> {errMessage}</p>
          </li>
          <li className="bg-red-600 text-white w-full text-center p-3 rounded mb-5">
            <button onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </li>
          <li>
            <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix? Sign up now."
                : "Already registered? Sign in now."}
            </p>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
