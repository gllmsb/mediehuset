import React, { useContext, useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Title } from "../components/Title/Title";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { UserContext } from "../context/UserContext";
import { MitProgram } from "../components/MitProgram/MitProgram";
import homeImage from '../assets/images/background3.png';
import homeImage2 from '../assets/images/Background.png';
import styles from './Login.module.scss';

export const Login = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true); // track loading state

  useEffect(() => {
    // simulate loading user state before rendering content
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {/* header and title are always visible */}
      <Header backgroundImage={user ? homeImage : homeImage2} />
      <Title title={user ? "MIT PROGRAM" : "LOGIN"} />

      {/* prevent flickering by showing loading state */}
      {isLoading ? (
        <p className={styles.loading}>Indlæser...</p>
      ) : user ? (
        <MitProgram />
      ) : (
        <LoginForm />
      )}
    </>
  );
};
