import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import axios from "axios";

const HotelBook = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [error, setError] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  const handlePayment = (e) => {
    e.preventDefault();

    // Basic validation (you can expand this)
    if (cardNumber.length !== 16) {
      setError("Card number must be 16 digits");
      return;
    }
    if (cvv.length < 3 || cvv.length > 4) {
      setError("CVV must be 3 or 4 digits");
      return;
    }
    if (!expiryMonth || !expiryYear) {
      setError("Please enter a valid expiration date");
      return;
    }

    // Clear the error if validation passes
    setError("");

    // Mock API request (replace with actual API call)
    const paymentData = {
      cardNumber,
      cvv,
      expiryDate: `${expiryMonth}/${expiryYear}`,
      amount: {totalPrice}, // This should match the total amount to be paid
    };

    console.log("Processing payment with data:", paymentData);

    //Here, you would send the paymentData to your backend or payment gateway
    axios.post("/api/pay", paymentData)
      .then(response => {
        console.log("Payment successful:", response.data);
        // Handle success (e.g., redirect to a confirmation page)
      })
      .catch(error => {
        console.error("Payment failed:", error);
        // Handle failure (e.g., show an error message)
      });
  };

  return (
    <div className="lg:p-24 p-6">
      <form className="w-full pt-2 flex flex-col lg:flex-row justify-between" onSubmit={handlePayment}>
        <div className="p-8">
          <h1 className="lg:text-2xl text-2xl font-bold">Payment Method</h1>
          <br></br>
          <h1 className="font-semibold text-[#565656] lg:text-lg">Card Number</h1>
          <p className="text-[#929292] text-sm pt-2">Enter the 16 digit card number on the card</p>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="2412 7654 1234 0987"
            className="border rounded-md p-2 w-[200px] mt-2 text-center"
          />

          <h1 className="font-semibold text-[#565656] lg:text-lg pt-6">CVV</h1>
          <p className="text-[#929292] text-sm pt-2">Enter the 3 or 4 digit number on the back side of the card</p>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="241"
            className="border rounded-md p-2 w-[45px] mt-2 text-center"
          />

          <h1 className="font-semibold text-[#565656] lg:text-lg pt-6">Expiry Date</h1>
          <p className="text-[#929292] text-sm pt-2">Enter the expire date of the card</p>

          <div className="flex">
            <input
              type="text"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              placeholder="MM"
              className="border rounded-md p-2 w-[50px] mt-2 text-center"
            />
            <input
              type="text"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              placeholder="YY"
              className="border rounded-md p-2 w-[50px] mt-2 ml-4 text-center"
            />
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="border rounded-lg p-10 m-8 w-full">
            <h1 className="font-semibold py-6">Order Summary</h1>

            <div className="flex gap-28">
              <p>Hotel fee</p>
              <p className="ml-auto">Rs.4000.00</p>
            </div>

            <div className="flex gap-28 border-b py-2">
              <p>Room fee</p>
              <p className="ml-auto">Rs.0.00</p>
            </div>
            <div className="flex items-center">
              <p className="font-bold py-2">Total</p>
              <p className="ml-auto">Rs. 40000.00</p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#41A4FF] rounded-lg text-white p-2 w-full"
          >
            Confirm and Pay Now
          </button>
          <div className="flex items-center pt-2">
            <FaLock className="text-[#b4b4b4]" />
            <h1 className="text-[#b4b4b4] font-extralight pl-4">
              Payments are secured and encrypted.
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelBook;
