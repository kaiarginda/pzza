import React from "react";

import "./Register.css";
import { useState } from "react";
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-black">
      <div className="bg-green-500 p-8 rounded shadow-md w-96">
        <h2 className="text-white text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700  text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700  text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700  text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white text-green-500 px-4 py-2 rounded focus:outline-none hover:bg-green-700 hover:text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
