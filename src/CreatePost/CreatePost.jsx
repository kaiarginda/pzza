import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "./CreatePost.css";

const CreatePost = () => {
  const [postText, setPostText] = useState("");
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useState("");
  const [loggedUser, setLoggedUser] = useState({});

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setPicture(selectedImage);
  };

  useEffect(() => {
    const cookieValue = Cookies.get("token");
    if (cookieValue) setCookie(cookieValue);
    setCookie(cookieValue);
    const getLoggedUser = async () => {
      try {
        const response = await fetch(
          "https://pizzaback-cews.onrender.com/v1/getLoggedUser",
          {
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
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoggedUser(data.user);
        // Log data after the fetch operation is complete
      } catch (error) {}
    };
    getLoggedUser();
  }, [cookie]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("postText", postText);
    formData.append("description", description);
    formData.append("picture", picture);

    await fetch("https://pizzaback-cews.onrender.com/v1/create-post", {
      method: "POST",
      body: formData,
    });

    // Reset form fields after submission
    setLoading(false);

    setPostText("");
    setDescription("");
    setPicture(null);
  };

  if (!loggedUser.name) {
    return (
      <div className="bg-red-500 text-white p-4 rounded">
        <div> Log in to Create New Post</div>
        <div>
          <Link to={"/r3/log-in"} className="text-2xl text-blue-500">
            Log-In and try again
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="postText"
          >
            Post Text
          </label>
          <textarea
            id="postText"
            name="postText"
            value={postText}
            onChange={handleTextChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="postText"
          >
            Post Description
          </label>
          <textarea
            id="postText"
            name="postText"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="postImage"
          >
            Post Image
          </label>
          <input
            type="file"
            id="postImage"
            name="postImage"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-700"
        >
          Create Post
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
  );
};

export default CreatePost;
