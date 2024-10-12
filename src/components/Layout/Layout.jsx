import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import RouteTour from "../../router/RouteTour";
import { AuthContext } from "../../context/authContext";
import AdminNavbar from "../navbar/AdminNavbar";
import ChatPopup from "../../pages/chat/ChatPopup";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // to render the alternative Navbar or the default Navbar
  const showAdminNavbar =
    location.pathname === "/admin" ||
    location.pathname === "/users" ||
    location.pathname === "/hotels" ||
    location.pathname === "/tours" ||
    location.pathname === "/adduser" ||
    location.pathname === "/userpage" ||
    location.pathname === "/update";

  const showFinaceNavbar =
    location.pathname === "/finace" ||
    location.pathname === "/finance/salary" ||
    location.pathname === "/finance/employee" ||
    location.pathname === "/finance/salarySheet" ||
    location.pathname === "/finance/FinanceHealth" ||
    location.pathname === "/finance/refund" ||
    location.pathname === "/finance/addRefund" ||
    location.pathname === "/finance/updateRefund/:id";


  // Determine if the chat popup should be shown (only on the home page and when user is signed in)
  const showChatPopup = location.pathname === "/" && user;

  return (
    <div>
      {showAdminNavbar || showFinaceNavbar ? (
        <AdminNavbar />
      ) : (
        <Navbar />
      )}
      {showChatPopup && <ChatPopup show={true} />} {/* Show ChatPopup on home page if user is signed in */}
      <RouteTour />
      <Footer />
    </div>
  );
};

export default Layout;
