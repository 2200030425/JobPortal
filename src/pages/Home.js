// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css"; // Import your CSS file

// function Home() {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="home-container">
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             Job Portal
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-end"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <button
//                   className="btn btn-outline-primary me-2"
//                   onClick={() => handleNavigation("/admin")}
//                 >
//                   Admin Login
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className="btn btn-outline-success me-2"
//                   onClick={() => handleNavigation("/loginuser")}
//                 >
//                   User Login
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className="btn btn-outline-info"
//                   onClick={() => handleNavigation("/loginrecruiter")}
//                 >
//                   Recruiter Login
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="content">
//         <h1>Welcome to the Job Portal</h1>
//         <p>Select a login option from the top-right to continue.</p>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Import your CSS file

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Job Portal
          </a>
        </div>
      </nav>

      {/* Content Section */}
      <div className="content">
        <h1>Welcome to Online Job Portal</h1>
        <p>Select a login option to continue.</p>

        {/* Login Buttons Section */}
        <div className="button-group">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleNavigation("/admin")}
          >
            Admin Login
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => handleNavigation("/loginuser")}
          >
            User Login
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => handleNavigation("/loginrecruiter")}
          >
            Recruiter Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
