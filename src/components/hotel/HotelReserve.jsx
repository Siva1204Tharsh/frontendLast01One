import React, { useContext, useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/authContext';

const HotelReserve = ({ setOpen, hotelId, checkInDate, checkOutDate, date_difference }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const [totalPrice, setTotalPrice] = useState(0);

  const hotelName = data?.name || '';
  const userName = user?.name || '';
  const totalDays = date_difference;

  useEffect(() => {
    if (data.length > 0) {
      let price = 0;
      data.forEach((item) => {
        item.roomNumbers.forEach((roomNumber) => {
          if (selectedRooms.includes(roomNumber._id)) {
            price += item.price;
          }
        });
      });
      setTotalPrice(price * date_difference);
    }
  }, [selectedRooms, data, date_difference]);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const alldates = getDatesInRange(checkInDate, checkOutDate);

  const isAvailable = (roomNumber) => {
    return !roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const sendData = () => {
    const newReservation = {
      hotelName,
      checkInDate,
      checkOutDate,
      userName,
      totalPrice,
      totalDays,
    };

    axios
      .post(`/hotelreservation/reservation`, newReservation)
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Rooms reserved successfully',
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err.message,
        });
      });
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) =>
          axios.put(`/rooms/availability/${roomId}`, { dates: alldates })
        )
      );

      sendData();
      setOpen(false);
      navigate('/hotelhome');
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Failed to reserve rooms',
        text: 'Please try again.',
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-md p-8 max-w-md w-full h-[600px] overflow-y-auto">
        <div className="flex justify-end">
          <FaWindowClose
            className="text-gray-600 text-2xl cursor-pointer hover:text-red-500 transition-all duration-200"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="font-bold text-xl mb-4">Select your rooms:</div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading rooms.</div>
        ) : (
          data.map((item) => (
            <div className="mb-6" key={item._id}>
              <div className="font-bold mb-2">{item.title}</div>
              <div className="text-gray-600 mb-4">{item.description}</div>
              <div className="flex items-center mb-4">
                <div className="font-semibold mr-2">Max people:</div>
                <div className="text-gray-600">{item.maxPeople}</div>
              </div>

              <div className="flex items-center mb-4">
                <div className="font-semibold mr-2">Price per day:</div>
                <div className="text-gray-600">Rs.{item.price}</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="flex flex-col items-center" key={roomNumber.number}>
                    <div className="font-bold mb-2">Room {roomNumber.number}</div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={handleSelect}
                        disabled={!isAvailable(roomNumber)}
                        className="mr-2 cursor-pointer"
                      />
                      <div
                        className={
                          isAvailable(roomNumber)
                            ? 'text-green-600 font-semibold'
                            : 'text-red-600 font-semibold'
                        }
                      >
                        {isAvailable(roomNumber) ? 'Available' : 'Unavailable'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
        <div className="flex justify-between items-center mt-6">
          <div className="font-bold text-lg">Total Payment: Rs.{totalPrice}</div>
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 mt-6"
          disabled={selectedRooms.length === 0}
        >
          Reserve now
        </button>
      </div>
    </div>
  );
};

export default HotelReserve;
