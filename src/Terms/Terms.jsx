import React from "react";
import "./Terms.css"; // You can remove this if not needed
import { Link } from "react-router-dom"; // Import Link if you are using React Router

const Terms = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>

      <p className="mb-4">
        Welcome to our Pizza website! By using our website, you agree to comply
        with and be bound by the following terms of use. Please read these terms
        carefully before using our website.
      </p>

      <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our website, you agree to be bound by these terms
        of use. If you do not agree to these terms, please do not use our
        website.
      </p>

      <h2 className="text-xl font-bold mb-2">2. Use of the Website</h2>
      <p className="mb-4">
        You agree to use the website for lawful purposes and in a way that does
        not infringe on the rights of others or restrict or inhibit anyone
        else's use and enjoyment of the website.
      </p>

      {/* Add more sections as needed */}

      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding these terms, please{" "}
        <Link to="/contact" className="text-blue-500 underline">
          contact us
        </Link>
        .
      </p>

      <p className="text-gray-500">Last updated: [Date]</p>
    </div>
  );
};

export default Terms;
