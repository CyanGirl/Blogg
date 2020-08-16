import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { adminContext } from "./context";

const Nav = () => {
  const [admin, setAdmin] = useContext(adminContext);

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>

          <div class="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="/new" id="newNav">
                      Create New
                    </Link>
                  </li>
                  <li className={admin ? "notok" : "ok"}>
                    <Link to="/login" id="newNav">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" id="reachNav">
                      Reach Us
                    </Link>
                  </li>
                  <li className={admin ? "ok" : "notok"}>
                    <a
                      href="#"
                      onClick={() => {
                        setAdmin(false);
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
