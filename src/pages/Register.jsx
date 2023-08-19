import React, { useState } from "react";
import file from "../img/file.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { auth, storage } from "../firebase";
function Register() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName: userName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <span className="logo">Chat App</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img className="add-file" src={file} alt="" />
              <span>Add an Avatar</span>
            </label>
            <button className="primary-button">Sign Up</button>
            {err && <span style={{ color: "red" }}>Something went Wrong</span>}
          </form>
          <p>You do have an account? Login</p>
        </div>
      </div>
    </>
  );
}

export default Register;
