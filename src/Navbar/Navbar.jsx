import React from "react";
import "./navbar.css";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const [cookie, setCookie] = useState("");
  const [loggedUser, setLoggedUser] = useState({});
  const hamb = useRef("");
  const icon = useRef("");

  const ic = useRef("");
  useEffect(() => {
    setIsActive(true);

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

  return (
    <div className="navbar overflow-hidden" id="navbar">
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-logo navlogo">
            <img
              src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/food-store-logo.png"
              alt=""
            />
          </div>{" "}
          <div className="navbar-list">
            <ul className="flex items-center navbarul">
              {/* <li to="/r3" className="navbar-li-link">
                <a href="#">HOME</a>
              </li> */}
              <li className="navbar-li-link ">
                <a href="/r3/products">PRODUCTS</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="#menu">MENU</a>
              </li>
              {/* <li to="/r3" className="navbar-li-link">
                <a href="/"></a>
              </li> */}
              <li to="/r3" className="navbar-li-link">
                <a href="/r3/website-map">DESCRIPTION</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="/r3/post">OUR BLOG</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="#contact">CONTACT</a>
              </li>

              {/* {loggedUser.name ? (
                <li to="/r3" className="navbar-li-link">
                  <a href="#contact" className="uppercase relative">
                    {loggedUser.name}
                    {isActive && (
                      <span className="active-dot absolute bg-green-500 h-2 w-2 rounded-full top-0 right-0"></span>
                    )}
                  </a>
                </li>
              ) : null} */}

              {loggedUser.name ? (
                <li to="/r3" className="navbar-li-link relative">
                  <div className="flex items-center justify-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAggMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADIQAAICAQEFBgQFBQAAAAAAAAABAgMEEQUhMVFxEhMUIkFhBjJSoSOxwdHwQmKBkeH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAGMpwjulKK6sDIGCtrb0U4t9TMAAAAAAAAAAAAAAAHPm5lWFS7bX0iuMnyA222wqg52TjGK4tshMz4him44lfa/vmt3+ERGdnXZtnatlpFfLBcEcwHTftDMvb7zIno/SL0X2OZ7+O/qAB4lob6crIof4N1kOkt3+jSAJnE+ILq9I5MFZH6o7pfsT2Jl05cO3RNSXquDXVFIM6brKLFZTNwmuDQF7BG7J2pDNj2JrsXxW+P1e6JIAAAAAAAADC2yNVcrLHpGK1bKbtDMnm5DslqocIR5Il/ibL0jDFi/m88+nov5yK+AAAAG/ExLcuzsVJaL5pPgiap2JjQj+K5WS9XrogK8CyWbGw5LdGcHzjL9yJz9mW4i7afeVfUlvXUDhAAGVVk6rI2VycZxeqaLjszMjm4ysS0kt048mUwkdhZbxs6MW/w7fK+vo/5zAtoAAAAAAY2PswlLktQKZtO7v8APvs11Tloui3HMNdd/MAD2KcpKMVq3uSPDfs/Tx+P2uHeICz4eNHFx41R01XzPm/Vm4AAeSipRcZLVNaNcz087ScuyBVNoY/hcudS+Vb49Gc5K/EWniq+fd/qyKADhwej5gAXjCu8RiVW/XBN9TcR3w/Jy2XUn/S5L7kiAAAAwtWtU0vWLMwwKAtx6bsyruMu6r6Ztf49DSAPYScJxnF6OL1TPABbMa3xFMbYPdJc+D5G3STKxgZ9mFJuPmrb80H+fUnadq4lsVrZ3cn/AEzWn3A62mzFxenHT31NNm0cOCbd8H7R3v7EPtHa0smLqoThW+LfGQHNtLI8TlzmnrFeWPRHKj0AADwC2fDqa2XDX1lJ/ckzl2ZV3OBRW+Kgter3nUAAAAAAVr4lxe7yIZMV5bF2ZdV/z8iGLvm40MvGnTPhJbnyfoyl30zotlVbHScXo0BgduBsy3M88vw6vqfr0Mtk4Hi7HOxPuYPf/c+RZUkklFJJbkl6AclGzcSmOiqjPVb5T8zZpt2Lizbce3X7Rf7kiAIuGw8ZPWU7ZLlql+h1+AxO67vw8Oz03/74nSAIHP2NKtOzFbnH1g+K6cyJLoQ+2tnpxllUrSS32R5+4EGdWzMbxebXW1rHXWXRHIWzYeA8TH7di0us3tfSvRASYAAAAAAABG7X2ZHOr7dekb4ryt+vsySAHBi46xceulL5VvfN+ptOiUVLiaZVyj7oDEAAAAAHEyjCUuCNsK1H3YETg7FhVlzvt0cIy1qhy92TIAAAAAAAAAAAAAAB44p8UjHuo8jMAYd1E9UIrgkZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z"
                      alt=""
                    />
                    <a
                      href={`/r3/user/${loggedUser.name}`}
                      className="uppercase"
                    >
                      {loggedUser.name}
                    </a>
                  </div>
                </li>
              ) : (
                // <li to="/r3" className="navbar-li-link relative text-green-600">
                //   <div className="flex items-center justify-center">
                //     <a href={`/r3/log-in`} className="uppercase ">
                //       Login{" "}
                //     </a>
                //   </div>
                // </li>
                <li className="navbar-li-link relative">
                  <div className="flex items-center justify-center">
                    <a
                      href="/r3/log-in"
                      className="bg-green-300 hover:bg-green-400 text-white uppercase px-4 py-2 rounded-full transition-all duration-300"
                    >
                      Login
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-icons">
            {/* <BsCart2 className="nav-i" /> */}
            {/* <Link to="/r3">
              <AiOutlineSearch className="nav-i" />
            </Link> */}
          </div>
          <div className="navbar-image navimage">
            <img
              src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/divi-scooter-left.png"
              alt=""
            />
            <div className="navbar-image-text">
              <p>CALL AND ORDER IN</p>
              <h3>+1 234-567-89</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-smooth">
        <a href="#navbar">
          <AiOutlineArrowUp />{" "}
        </a>
      </div>
      <div className="hamburger-navbar">
        <ul>
          <li>
            <a href="/r3" className="hn-a">
              Home
            </a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#listing">Shop</a>
          </li>
          <li>
            <a href="#product">Pages</a>
          </li>
        </ul>
        <p>
          <AiOutlineArrowUp className="ni" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
