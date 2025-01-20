import React, { useContext } from "react";
import styles from "./MinSide.module.scss";
import { UserContext } from "../context/UserContext";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { MitProgram } from "../components/MitProgram/MitProgram";


export const MinSide = () => {
  const { user } = useContext(UserContext); // get user data from context

  return (
    <div className={styles.minSide}>
      {user ? (
        <MitProgram/> // show mit program if logged in
      ) : ( 
        // show login form if NOT logged in 
        <LoginForm /> 
      )}
    </div>
  );
};
