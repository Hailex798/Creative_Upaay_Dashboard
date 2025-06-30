import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { user, loginWithRedirect } = useAuth0();
  return (
    <div className="flex w-full  min-h-screen flex-col ">
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-14 text-black text-center font-bold text-6xl">
          LOGIN TO DASHBOARD
        </h1>
        <button
          className="bg-white text-black h-20 w-60 text-2xl px-3 py-1 rounded-md border-2 border-black
             transition-all duration-200 ease-in-out 
             hover:scale-105 
             active:scale-95 active:shadow-inner"
          onClick={() => loginWithRedirect()}
        >
          Login / SignUp
        </button>
      </div>
    </div>
  );
};

export default Login;
