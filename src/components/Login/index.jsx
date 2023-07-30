import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import {
  SignInButton,
  StyledTextField,
  LoginContent,
  SignIn,
  SignUp,
  SpotifySection,
  SpotifyWrapper,
  TextFieldWrapper,
  ErrorMessage,
  FormWrapper
} from "../../styles/Login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../Schema";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const loginFunction = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      alert("Login successful");
      navigate("/AdminPanel");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setLoginError("User not found.");
          break;
        case "auth/wrong-password":
          setLoginError("Incorrect password.");
          break;
        default:
          setLoginError("");
          break;
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <SpotifySection>
      <SpotifyWrapper>
        <LoginContent>
          <FormWrapper>
            <SignIn onSubmit={handleSubmit(onSubmitHandler)}>
              <div>
                <h1 style={{color:"white"}}>Welcome Admin !</h1>
              </div>
              <TextFieldWrapper>
                <StyledTextField
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  placeholder="Email address"
                  {...register("email")}
                  value={loginEmail}
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                <StyledTextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  {...register("password")}
                  value={loginPassword}
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <div
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? <HiEye /> : <HiEyeOff />}
                      </div>
                    ),
                  }}
                />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </TextFieldWrapper>
              {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
              <SignInButton
                type="submit"
                variant="contained"
                onClick={loginFunction}
              >
                Sign In
              </SignInButton>
            </SignIn>
            <SignUp></SignUp>
          </FormWrapper>
        </LoginContent>
      </SpotifyWrapper>
    </SpotifySection>
  );
};

export default Login;
