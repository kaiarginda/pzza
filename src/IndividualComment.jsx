import { useState, useEffect } from "react";
import React from "react";
import Cookies from "js-cookie";

const IndividualComment = ({
  comment,
  parentId,
  productId,
  allComments,
  loggedUser,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [cookie, setCookie] = useState("");
  const [user, setUser] = useState({});
  const url = window.location.href.split("/")[4];
  useEffect(() => {
    const cookieValue = Cookies.get("token");
    if (cookieValue) setCookie(cookieValue);

    const getLoggedUser = async () => {
      try {
        const response = await fetch(
          "https://pizzaback-cews.onrender.com/v1/getLoggedUser",
          {
            method: "POST",
            headers: {
              "Content-type": "Application/json",
            },
            credentials: "include",
            body: JSON.stringify({ token: cookieValue }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching logged user:", error);
      }
    };

    getLoggedUser();
  }, [cookie]);

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const submitReply = async (com) => {
    if (user && user.name) {
      await fetch("http://localhost:5000/v1/reply", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          reply: replyText,
          parentId,
          productId,
          root: "no",
          author: user.name,
        }),
      });
    }

    setReplyText("");
    setShowReplyForm(false);
  };

  return (
    <div
      key={comment._id}
      className="border rounded-lg p-4 my-4 shadow-md transition duration-300 ease-in-out transform"
    >
      author : {comment.author}
      <h1 className="text-lg font-bold mb-2 text-blue-800">{comment.text}</h1>
      <button
        className="text-blue-500 hover:underline transition duration-300 ease-in-out transform"
        onClick={toggleReplyForm}
      >
        Reply
      </button>
      {showReplyForm && (
        <div className="mt-4">
          <textarea
            value={replyText}
            onChange={handleReplyTextChange}
            className="w-full p-2 border rounded-md text-black"
            placeholder="Your reply..."
          />
          <button
            onClick={() => {
              submitReply(comment);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition duration-300 ease-in-out transform"
          >
            Submit Reply
          </button>
        </div>
      )}
      {allComments.map((com) => {
        if (com.parentId === comment._id) {
          if (url !== productId) return;
          return (
            <IndividualComment
              key={com._id}
              allComments={allComments}
              parentId={com._id}
              productId={productId}
              comment={com}
              loggedUser={loggedUser}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default IndividualComment;
