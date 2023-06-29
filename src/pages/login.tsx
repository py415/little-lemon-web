import Button from "@/components/button/button";
import TextField from "@/components/text-field/text-field";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import styles from "./login.module.scss";

const Login = () => {
  // Hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <>
      <Head>
        <title>Login | Little Lemon</title>
      </Head>

      <div className={styles.login}>
        <form className={styles.form}>
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
