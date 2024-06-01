// Importing CSS files and required components
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from "react";
import AddSales from "./Navigates/AddSales";
import TopSales from "./Navigates/TopSales";
import TotalRevenue from "./Navigates/TotalRevenue";
import Login from "./Navigates/Login";
import Register from "./Navigates/Register";
import Logout from "./Navigates/Logout";

// Defining the main App component
function App() {
  // Setting up state variable 'navigate' and its setter function 'setNavigate'
  const [navigate, setNavigate] = useState("addSales");

  // Function to set 'navigate' state to 'addSales'
  const addSales = () => {
    setNavigate("addSales");
  }

  // Function to set 'navigate' state to 'topFiveSales'
  const topFiveSales = () => {
    setNavigate("topFiveSales");
  }

  // Function to set 'navigate' state to 'totalRevenue'
  const totalRevenue = () => {
    setNavigate("totalRevenue");
  }

  // Function to set 'navigate' state to 'login'
  const login = () => {
    setNavigate("login");
  }

  // Function to set 'navigate' state to 'register'
  const register = () => {
    setNavigate("register");
  }

  // Function placeholder for logout functionality
  const logout = () => {
    // Add logout logic here
  }

  // Defining content based on the 'navigate' state
  let content;
  switch (navigate) {
    case "addSales":
      content = <AddSales />;
      break;
    case "topFiveSales":
      content = <TopSales />;
      break;
    case "totalRevenue":
      content = <TotalRevenue />;
      break;
    case "login":
      content = <Login />;
      break;
    case "register":
      content = <Register />;
      break;
    case "logout":
      content = navigate;
      break;
    default:
      content = <AddSales />;
      break;
  }

  // Returning the JSX markup for the App component
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-primary">
        <div className="container-fluid">
          {/* Navbar Brand */}
          <a className="navbar-brand text-light" href="" onClick={addSales}>
            SALES APP
          </a>
          {/* Navbar Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Add Sales Link */}
              <li className="nav-item active" onClick={addSales}>
                <a className={`nav-link ${navigate === 'addSales' ? "text-light" : ""} `} aria-current="page" href="#">
                  ADD SALES
                </a>
              </li>
              {/* Top Five Sales Link */}
              <li className="nav-item" onClick={topFiveSales}>
                <a className={`nav-link ${navigate === 'topFiveSales' ? "text-light" : ""} `} aria-current="page" href="#">
                  TOP 5 SALES
                </a>
              </li>
              {/* Today's Total Revenue Link */}
              <li className="nav-item" onClick={totalRevenue}>
                <a className={`nav-link ${navigate === 'totalRevenue' ? "text-light" : ""} `} aria-current="page" href="#">
                  TODAY'S TOTAL REVENUE
                </a>
              </li>
              {/* Login Link */}
              <li className="nav-item" onClick={login}>
                <a className={`nav-link ${navigate === 'login' ? "text-light" : ""} `} aria-current="page" href="#">
                  LOGIN
                </a>
              </li>
              {/* Register Link */}
              <li className="nav-item" onClick={register}>
                <a className={`nav-link ${navigate === 'register' ? "text-light" : ""} `} aria-current="page" href="#">
                  REGISTER
                </a>
              </li>
              {/* Logout Link */}
              <li className="nav-item" onClick={logout}>
                <a className="nav-link" aria-current="page" href="#">
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content based on 'navigate' state */}
      {content}
    </div>
  );
}

// Exporting the App component as default
export default App;
