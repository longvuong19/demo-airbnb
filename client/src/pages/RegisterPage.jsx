import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-5xl text-center mb-4">Register</h1>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Create your username..." />
          <input type="email" placeholder="What is your email?" />
          <input type="password" placeholder="And your password..." />
          <button className="primary mt-3">Login</button>
          <div className="text-center py-4 text-gray-600">
            Already had an account?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login here.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
