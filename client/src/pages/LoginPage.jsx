import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-5xl text-center mb-4">Login</h1>
        <form className="max-w-lg mx-auto">
          <input type="email" placeholder="Enter your email..." />
          <input type="password" placeholder="Password..." />
          <button className="primary mt-3">Login</button>
          <div className="text-center py-4 text-gray-600">
            Don't have an account?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
