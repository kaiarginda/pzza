import React from "react";
import "./Contact.css"; // You can remove this if not needed

const Contact = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4">
        Have questions, suggestions, or feedback? We'd love to hear from you!
        Please feel free to reach out to us using the contact information below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Customer Support</h2>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:customersupport@example.com"
              className="text-blue-500 underline"
            >
              customersupport@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="text-blue-500">123-456-7890</span>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Business Inquiries</h2>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:business@example.com"
              className="text-blue-500 underline"
            >
              business@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="text-blue-500">987-654-3210</span>
          </p>
        </div>
      </div>

      {/* Add a contact form if needed */}

      <p className="mt-4 text-gray-500">
        We strive to respond to all inquiries within 24 hours. Thank you for
        reaching out to us!
      </p>
    </div>
  );
};

export default Contact;
