import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import CommentInput from "../CommentInput";
import CommentList from "../CommentList";
import Cookies from "js-cookie";
const PostPage = () => {
  const url = window.location.href;
  const id = url.split("/")[5];
  const [post, setPost] = useState([]);
  const [cookie, setCookie] = useState("");

  const [recentPosts, setRecentPosts] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");
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
              "Content-type": "application/json",
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
    const getPost = async () => {
      const res = await fetch(
        "https://pizzaback-cews.onrender.com/v1/get-post",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        setPost(data);
      }
    };

    const getRecentPosts = async () => {
      const res = await fetch(
        "https://pizzaback-cews.onrender.com/v1/all-posts"
      );
      if (res.ok) {
        const data = await res.json();
        setRecentPosts(data);
      }
    };

    getPost();
    getRecentPosts();
  }, [cookie]);
  return (
    <div className="flex max-w-3xl mx-auto mt-8">
      {/* Individual Post */}
      <div className="flex-1 mr-4">
        <h1 className="text-3xl font-bold mb-4">{post.name}</h1>
        <img
          src={`https://pizzaback-cews.onrender.com/images/${post.image}`}
          alt=""
          className="w-full h-auto mb-4"
        />
        <p className="text-gray-600">{post.description}</p>

        <CommentInput author={loggedUser.name} postID={id} />
        <CommentList productId={id} />
      </div>

      {/* Recent Posts */}
      <div className="flex-none w-1/4 ml-auto">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        {recentPosts.map((recentPost) => (
          <div
            key={recentPost.id}
            className="border border-gray-300 p-2 mb-2 rounded-md"
          >
            <img
              src={`https://pizzaback-cews.onrender.com/images/${recentPost.image}`}
              //  src={recentPost.image}
              alt=""
              className="w-full h-auto mb-2"
            />
            <h3 className="text-xl font-bold mb-2">{recentPost.name}</h3>
            <p className="text-gray-600 mb-2 text-sm overflow-hidden overflow-ellipsis max-h-16">
              {recentPost.description}
            </p>
            <a
              href={`/post/${recentPost._id}`}
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
