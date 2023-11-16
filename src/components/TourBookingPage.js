import React, { useState, useEffect } from 'react';
import './Tour.css'; // Import the CSS file for styles

const TourBookingPage = ({ city, basePrice }) => {
  const [days, setDays] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    const price = basePrice + (days * adults * 20) + (children * 10);
    setTotalPrice(price >= basePrice ? price : basePrice); // Ensuring the total price doesn't go below the base price
  }, [days, adults, children, basePrice]);

  const handleBooking = () => {
    console.log('Total Price: ₹', totalPrice); // Logging the total price in rupees
    // Add the logic to complete the booking
  };

  const handleCounterChange = (setter, value) => {
    setter(prevValue => {
      const newValue = prevValue + value;
      return newValue >= 0 ? newValue : 0; // Ensure the counter doesn't go below 0
    });
  };

  return (
    <div className="booking-page-container">
      <h2 className="booking-header text-2xl">Book Your Trip to {city}</h2>
      <div className="input-fields">
        <label>
          Days:
          <input type="number" value={days} onChange={(e) => setDays(e.target.value >= 0 ? e.target.value : 0)} />
        </label>
        <label>
          Adults:
          <input type="number" value={adults} onChange={(e) => handleCounterChange(setAdults, parseInt(e.target.value) || 0)} />
        </label>
        <label>
          Children:
          <input type="number" value={children} onChange={(e) => handleCounterChange(setChildren, parseInt(e.target.value) || 0)} />
        </label>
      </div>
      <button onClick={handleBooking} className="book-now-button">Book Now</button>
      <p className="total-price">Total Price: ₹{totalPrice}</p>
    </div>
  );
};

export default TourBookingPage;