import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { user, loginWithRedirect } = useAuth0();
  return (
    <div className="flex w-full  min-h-screen flex-col ">
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="md:text-6xl text-3xl md:mb-14 mb-7 text-black text-center font-bold">
          LOGIN TO DASHBOARD
        </h1>
        <button
          className="bg-white text-black md:h-20 md:w-60 md:text-2xl h-10 w-40 text-lg px-3 py-1 rounded-md border-2 border-black
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
