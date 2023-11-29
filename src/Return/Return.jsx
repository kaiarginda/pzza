import React from "react";
import "./Return.css"; // You can remove this if not needed
import { Link } from "react-router-dom"; // Import Link if you are using React Router

const Return = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Return Policy</h1>

      <p className="mb-4">
        We want you to be satisfied with your order from our Pizza website. If
        you have any issues with your order, please review our return policy
        below.
      </p>

      <h2 className="text-xl font-bold mb-2">1. Returns</h2>
      <p className="mb-4">
        We accept returns within 30 days of the purchase date. To be eligible
        for a return, your item must be unused and in the same condition that
        you received it. It must also be in the original packaging.
      </p>

      <h2 className="text-xl font-bold mb-2">2. Refunds</h2>
      <p className="mb-4">
        Once your return is received and inspected, we will send you an email to
        notify you that we have received your returned item. We will also notify
        you of the approval or rejection of your refund.
      </p>

      {/* Add more sections as needed */}

      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding our return policy,
        please{" "}
        <Link to="/r3/contact" className="text-blue-500 underline">
          contact us
        </Link>
        .
      </p>

      <p className="text-gray-500">Last updated: [Date]</p>
    </div>
  );
};

export default Return;
