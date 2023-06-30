import Button from "@/components/button/button";
import TextField from "@/components/text-field/text-field";
import { AuthContext } from "@/contexts/AuthContext";
import { LOGIN_API } from "@/utils/constants";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./login.module.scss";

const Login = () => {
  // Hooks
  const { setAuthTokens, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

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

    const data = {
      username,
      password,
    };

    axios
      .post(LOGIN_API, data)
      .then((response) => {
        const data = response.data;
        if (data) {
          setAuthTokens(data);
          setUser(jwt_decode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
          clear();
          enqueueSnackbar("Success! You are now logged in.", {
            anchorOrigin: {
              horizontal: "center",
              vertical: "top",
            },
            variant: "success",
          });
          router.push("/");
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

      <hr />
    </>
  );
};

export default Login;
