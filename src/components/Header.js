import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  const addClass = () => {
    return setToggle(true);
  };

  const removeClass = () => {
    return setToggle(false);
  };

  return (
    <>
      <div className={toggle ? "nav active" : "nav"}>
        <Link to="/">
          <img
            className="nav-logo"
            src="/images/logo_transparent.png"
            alt="nav-logo"
          />
        </Link>
        <div className="nav-list">
          <button className="cross" onClick={removeClass}>
            <img src="/images/cross.svg" alt=""></img>
          </button>

          <ul>
            <Link to="/">
              <li className="list-item" onClick={removeClass}>
                home
              </li>
            </Link>
            <Link to="/blog">
            <li className="list-item" onClick={removeClass}>
              blog
            </li>
            </Link>
            <Link to="/work">
            <li className="list-item" onClick={removeClass}>
              work
            </li>
            </Link>
            <a
                id="contact"
                href="https://www.linkedin.com/in/bobby-sadhwani/"
                target="_blank"
              >
            <li className="list-item">
                Contact
            </li>
            </a>
          </ul>

          <div className="nav-icons">
            <a
              className="nav-icon-link"
              href="https://github.com/Bobby-coder"
              target="_blank"
            >
              <img
                className="icon"
                id="github-logo"
                src="/images/github.svg"
                alt="github-icon"
              />
            </a>
            <a
              className="nav-icon-link"
              href="https://www.linkedin.com/in/bobby-sadhwani/"
              target="_blank"
            >
              <img
                className="icon"
                id="linkedin-logo"
                src="/images/linkedin.svg"
                alt="linkedin-icon"
              />
            </a>
            <a
              className="nav-icon-link"
              href="https://bobby-sadhwani.hashnode.dev"
              target="_blank"
            >
              <img
                className="icon"
                id="hashnode-logo"
                src="/images/hashnode-red.svg"
                alt="linkedin-icon"
              />
            </a>
            <a
              className="nav-icon-link"
              href="https://twitter.com/BOBBY__SADHWANI"
              target="_blank"
            >
              <img
                className="icon"
                id="twitter-logo"
                src="/images/twitter.svg"
                alt="linkedin-icon"
              />
            </a>
            <a
              className="nav-icon-link"
              href="https://www.findcoder.io/u/bobbysadhwani"
              target="_blank"
            >
              <svg
                className="icon"
                id="findcoder-logo"
                width="38"
                height="22"
                viewBox="0 0 38 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.356678 11.4956C-0.118893 11.2104 -0.118892 10.4976 0.356679 10.2125L14.7197 1.60122C15.4408 1.16889 16.1693 2.15119 15.5826 2.76473L8.34608 10.3321C8.06984 10.6209 8.06984 11.0871 8.34608 11.376L15.5826 18.9433C16.1693 19.5569 15.4408 20.5392 14.7197 20.1068L0.356678 11.4956Z"
                  fill="#E21717"
                ></path>
                <path
                  fill="#E21717"
                  d="M8.51066 1.55168C8.23967 1.27027 8.23967 0.824966 8.51066 0.543559C8.7965 0.246733 9.2717 0.246733 9.55753 0.543559L28.7255 20.4483C28.9964 20.7297 28.9964 21.175 28.7255 21.4564C28.4396 21.7533 27.9644 21.7533 27.6786 21.4564L8.51066 1.55168Z"
                ></path>
                <path
                  d="M37.6433 10.2125C38.1189 10.4976 38.1189 11.2104 37.6433 11.4956L23.2803 20.1068C22.5592 20.5392 21.8307 19.5569 22.4174 18.9433L29.6539 11.376C29.9302 11.0871 29.9302 10.6209 29.6539 10.332L22.4174 2.76473C21.8307 2.15118 22.5592 1.16888 23.2803 1.60122L37.6433 10.2125Z"
                  fill="#E21717"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <button className="display" onClick={addClass}>
          <img src="/images/menu.svg" alt="" className="menu-icon"></img>
        </button>
      </div>
    </>
  );
}

export default Header;
