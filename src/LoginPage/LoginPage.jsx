// src/App.js
import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    // Handle login logic here'

    const res = await fetch("http://localhost:5000/v1/log-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      credentials: "include", // Include cookies
      xhrFields: {
        withCredentials: true,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);

    if (data === "invalid") {
      setLoading(false);
      setError(true);
      return;
    }
    if (!res.ok) {
      // setSuccess(true);
      setLoading(false);
      setError(true);
      // return;
    }

    setSuccess(true);
    setLoading(false);

    window.location.href = "/r3";
  };

  useEffect(() => {
    setSuccess(false);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        {success ? (
          <div className="bg-green-500 text-white px-4 py-2 rounded shadow-md">
            Login Succesfully{" "}
          </div>
        ) : null}
        {error ? (
          <div className="bg-red-500 text-white px-4 py-2 rounded shadow-md">
            Login Failed. try again{" "}
          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </form>
        {loading ? (
          <div className="flex justify-center items-center">
            <TailSpin
              height="40"
              width="40"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : null}

        <div className="p-3">
          <Link
            to="/r3/create-user"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Don't Have an account? Create One.
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
