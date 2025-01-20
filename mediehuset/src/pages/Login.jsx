import React, { useContext } from "react";
import { Header } from "../components/Header/Header";
import { Title } from "../components/Title/Title";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { UserContext } from "../context/UserContext";
import { MitProgram } from "../components/MitProgram/MitProgram";
import homeImage from '../assets/images/background3.png';

export const Login = () => {
  const { user } = useContext(UserContext); 

  return (
    <>
      <Header backgroundImage={homeImage} />
      {/* dynamically change title */}
      <Title title={user ? "MIT PROGRAM" : "LOGIN"} />
      {user ? <MitProgram /> : <LoginForm />}
    </>
  );
};
