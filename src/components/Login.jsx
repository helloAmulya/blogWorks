import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[80vh] mb-20 bg-transparent">
      <div className="mx-auto w-full max-w-sm bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-8 border border-white/20 text-white">
        <h2 className="text-center text-2xl font-semibold">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-white/70">
          Don't have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-400 transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        <form
          onSubmit={handleSubmit(login)}
          className="mt-6 flex flex-col items-center"
        >
          <div className="space-y-5 w-full">
            <Input
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />

            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />

            <Button
              type="submit"
              // className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              className="w-full max-w-xs  px-4 py-2 rounded-lg bg-white/10 text-white  border border-white/20
          focus:outline-none transition duration-200
        hover:bg-white/20"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
