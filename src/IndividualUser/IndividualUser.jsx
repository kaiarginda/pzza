import React, { useEffect } from "react";
import "./IndividualUser.css";
import { useState } from "react";
import Cookies from "js-cookie";

const IndividualUser = () => {
  const url = window.location.href;
  const name = url.split("/")[5];
  const [user, setUser] = useState({});
  const [products, setProducts] = useState(0);
  const [reviews, setReviews] = useState(0);

  const [cookie, setCookie] = useState("");
  const [loggedUser, setLoggedUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await fetch(
          "https://pizzaback-cews.onrender.com/v1/getUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any other headers if needed
            },
            credentials: "include", // Include cookies
            xhrFields: {
              withCredentials: true,
            },
            body: JSON.stringify({ name }),
          }
        );

        // Check if the request was successful (status code 2xx)
        if (result.ok) {
          const data = await result.json(); // Parse the JSON response
          // console.log("User data:", data);
          if (data.user) {
            setUser(data.user);
            return;
          }
          return data; // You might want to return the data to the caller
        } else {
          // If the request was not successful, handle the error
          console.error("Error:", result.statusText);
          throw new Error(result.statusText);
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Error:", error.message);
        throw error;
      }
    };

    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://pizzaback-cews.onrender.com/v1/userdata",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any other headers if needed
            },
            credentials: "include", // Include cookies
            xhrFields: {
              withCredentials: true,
            },
            body: JSON.stringify({ name }),
          }
        );

        // Check if the request was successful (status code 2xx)
        if (result.ok) {
          const data = await result.json(); // Parse the JSON response
          console.log(data, "data from user");
          setProducts(data.prod);
          setReviews(data.rev);
          if (data.user) {
            setUser(data.user);
            return;
          }
          return data; // You might want to return the data to the caller
        } else {
          // If the request was not successful, handle the error
          console.error("Error:", result.statusText);
          throw new Error(result.statusText);
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Error:", error.message);
        throw error;
      }
    };

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

    fetchUser();
    fetchData();
  }, [cookie, name]);

  const logoutHandler = (e) => {
    Cookies.remove("token", { path: "/" });
    window.location.href = "/r3";
  };
  // console.log(user, "user loggin");
  // console.log(loggedUser, "logguser");
  if (!user.name)
    return (
      <div className="text-3xl text-red-600 text-center">
        NO USER FOUND WITH THIS DETAILS
      </div>
    );

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      {/* <img
        src={user.avatar}
        alt={`Avatar of ${user.name}`}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      /> */}
      <h2 className="text-lg font-semibold text-gray-800">
        User Name: {user.name}
      </h2>
      {/* <p className="text-sm text-gray-600">{user.email}</p> */}
      <p className="text-sm text-gray-600">Reviews: {reviews}</p>
      <p className="text-sm text-gray-600">Products: {products}</p>
      {loggedUser.name === name ? (
        <div className="bg-red-500 text-white p-2 rounded cursor-pointer">
          <button type="button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : null}{" "}
    </div>
  );
};

export default IndividualUser;
