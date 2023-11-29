import React, { useState, useEffect } from "react";
import "./CreatePizzaForm.css";
import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
const CreatePizzaForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);
  // const imageUrl = "http://localhost:5000/images/170029591315811.jpg";

  const [cookie, setCookie] = useState("");
  const [loggedUser, setLoggedUser] = useState({});

  const [author, setAuthor] = useState(loggedUser.name);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const cookieValue = Cookies.get("token");
    if (cookieValue) setCookie(cookieValue);
    setCookie(cookieValue);
    const getLoggedUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/v1/getLoggedUser", {
          method: "POST",
          headers: {
            // "Content-type": "multipart/form-data",
            "Content-type": "Application/json",
          },
          credentials: "include", // Include cookies
          xhrFields: {
            withCredentials: true,
          },
          // body: { ...formData, price, description, name },
          body: JSON.stringify({ token: cookie }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoggedUser(data.user);
        setAuthor(data.user.name);
        // Log data after the fetch operation is complete
      } catch (error) {}
    };
    getLoggedUser();
  }, [cookie, author]);

  console.log(loggedUser, "currently log user");

  const formData = new FormData();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    formData.append("picture", picture);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("author", author);
    // console.log(name, description, price, picture);

    try {
      const response = await fetch("http://localhost:5000/v1/create-product", {
        method: "POST",
        headers: {
          // "Content-type": "multipart/form-data",
          // "Content-type": "Application/json",
        },
        // body: { ...formData, price, description, name },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Log data after the fetch operation is complete
    } catch (error) {
      console.error("Error during fetch:", error);
    }

    setLoading(false);
  };

  if (!loggedUser.name) {
    return (
      <div className="bg-red-500 text-white p-4 rounded">
        <div> Log in to Create Your Pizza</div>
        <div>
          <Link to={"/r3/log-in"} className="text-2xl text-blue-500">
            Log-In and try again
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-green-500 p-8 rounded shadow-md w-96">
        <h1>{loggedUser.name}</h1>
        <h2 className="text-white text-2xl font-semibold mb-4">Create Pizza</h2>
        <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="picture">
              Pizza Picture URL
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              // value={picture}
              onChange={(e) => {
                setPicture(e.target.files[0]);
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700  text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="price">
              Pizza Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700  text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="name">
              Pizza Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="description">
              Pizza Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-green-700  text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white text-green-500 px-4 py-2 rounded focus:outline-none hover:bg-green-700 hover:text-white"
          >
            Create Pizza
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
      </div>
    </div>
  );
};

export default CreatePizzaForm;
