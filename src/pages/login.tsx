import Button from "@/components/button/button";
import TextField from "@/components/text-field/text-field";
import { AuthContext } from "@/contexts/AuthContext";
import { LOGIN_API } from "@/utils/constants";
import jwt_decode from "jwt-decode";
import Head from "next/head";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./login.module.scss";

const Login = () => {
  // Hooks
  const { setAuthToken, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const clear = () => {
    setUsername("");
    setPassword("");
  };

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(LOGIN_API, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setAuthToken(data);
          setUser(jwt_decode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
          clear();
          enqueueSnackbar("Submit clicked", {
            anchorOrigin: {
              horizontal: "center",
              vertical: "top",
            },
            variant: "success",
          });
        }
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          anchorOrigin: {
            horizontal: "center",
            vertical: "top",
          },
          variant: "error",
        });
      });
  };

  return (
    <>
      <Head>
        <title>Login | Little Lemon</title>
      </Head>

      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            type="text"
            placeholder="Username"
            label="Username"
            name="username"
            value={username}
            onChange={handleUsername}
          />

          <TextField
            type="password"
            placeholder="Password"
            label="Password"
            name="password"
            value={password}
            onChange={handlePassword}
          />

          <div className={styles.btn__cntr}>
            <Button type="submit">Sign In</Button>
          </div>

          <div className={styles.registration__cta}>
            Don&apos;t have an account?
            <Link href="/registration" className={styles.registration__link}>
              {" "}
              Sign up now.
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
