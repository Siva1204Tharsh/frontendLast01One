import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

import Register from "../pages/Register";
import Userlist from "../pages/Userlist";
import ToursHome from "../pages/Tour/Home";
import TourDetails from "../pages/Tour/TourDetails";
import TourView from "../pages/Tour/Admin/ViewTour";
import UpdateTour from "../pages/Tour/Admin/updateAddedTour";
import SearchResults from "../pages/Tour/SerachResults";
import AllTourCategories from "../components/Tour/AllTourCategories";
import AddTourPackage from "../pages/Tour/Admin/AddTourPackage";
import { AuthContext } from "../context/authContext";
import {
  hotelColumns,
  tourColumns,
  tourReservationColumns,
  userColumns,
} from "../components/datatable/datatablesource";

import ReservationPage from "../pages/special_activity/Reservations";
import PendingReservationsPage from "../pages/special_activity/PendingReservations";
import UserpageA from "../pages/UserpageA";
import UpdateuserA from "../pages/UpdateuserA";
import Profile from "../pages/Profile";
import Profileupdate from "../pages/Profileupdate";

import Adduser from "../pages/Adduser";
import { HotelHome } from "../pages/hotel/HotelHome";
import AddHotel from "../pages/hotel/AddHotel";
import { AddRoom } from "../pages/hotel/AddRoom";
import UpdateHotel from "../pages/hotel/UpdateHotel";

import HotelView from "../components/hotel/HotelView";
import HotelOverView from "../components/hotel/HotelOverview";

import HadminView from "../pages/hotel/HadminView";
import HotelReserve from "../components/hotel/HotelReserve";
import Hotellist from "../pages/Hotellist";
import Tourlist from "../pages/Tourlist";

import ContactUs from "../pages/ContactUs";
import HotelBook from "../pages/hotel/HotelBook";
import ResetPassword from "../pages/ResetPassword";
import Tourreservations from "../pages/Tourreservations";

import GuideChatApp from "../pages/Tour/Admin/GuideChatApp.jsx";
import Chatbot from '../pages/Chatbot.jsx';

import { Main } from "../pages/Main";




const RouteTour = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Userlist columns={userColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotels"
        element={
          <ProtectedRoute>
            <Hotellist columns={hotelColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tours"
        element={
          <ProtectedRoute>
            <Tourlist columns={tourColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tourreservation"
        element={
          <ProtectedRoute>
            <Tourreservations columns={tourReservationColumns} />
          </ProtectedRoute>
        }
      />

      <Route path="/userpage" element={<UserpageA />} />
      <Route path="/update" element={<UpdateuserA />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/updateProfile" element={<Profileupdate />} />
      <Route path="/adduser" element={<Adduser />} />

      <Route path="/tours/home" element={<ToursHome />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route
        path="/tours/search/:destination/:duration/:maxsize"
        element={<SearchResults />}
      />
      <Route path="/addtour" element={<AddTourPackage />} />
      <Route path="/tour/view" element={<TourView />} />
      <Route path="/tour/update" element={<UpdateTour />} />

      <Route path="/sunandbeach" element={<AllTourCategories />} />
      <Route path="/hikingandtrekking" element={<AllTourCategories />} />
      <Route path="/wildsafari" element={<AllTourCategories />} />
      <Route path="/special" element={<AllTourCategories />} />
      <Route path="/cultural" element={<AllTourCategories />} />
      <Route path="/festival" element={<AllTourCategories />} />

      <Route path="/contactus" element={<ContactUs />} />

      <Route
        path="/pending-reservations"
        element={<PendingReservationsPage />}
      />

      <Route path="/my-reservations" element={<ReservationPage />} />

      <Route path="/hotelhome" element={<HotelHome />} />
      <Route path="/hotels/new" element={<AddHotel />} />
      <Route path="/rooms/new/:id" element={<AddRoom />} />
      <Route path="/hotels/update/:id" element={<UpdateHotel />} />
      <Route path="/hotel/:id" element={<HotelView />} />
      <Route path="/hoteloverview/:id" element={<HotelOverView />} />
      <Route path="/hoteladmin" element={<HadminView />} />
      <Route path="/hotelreserve/:id" element={<HotelReserve />} />
      <Route path="/hotelbooking" element={<HotelBook />} />

      {/* rout chat admin */}
      <Route path="/guideChatApp" element={<GuideChatApp />} />
      <Route path="/chatbot" element={<Chatbot />} />


      <Route path="/finance" element={<Main />} />

      
    
      
          


    </Routes>
  );
};

export default RouteTour;
