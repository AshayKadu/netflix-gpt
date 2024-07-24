import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute overflow-auto pl-28 w-full pt-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-52"
        src={NETFLIX_LOGO}
        alt="Netflix"
      />
      {user && (
        <div className="flex pt-6 justify-end">
          <img className="w-10 h-10" src={user.photoURL} alt="user" />
          <button className="mb-5 font-bold text-white" onClick={handleSignout}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
