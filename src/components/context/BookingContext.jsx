import React, { createContext, useState } from "react";

// Create Context
const BookingContext = createContext();

// Provider Component
export const BookingProvider = ({ children }) => {
  const [bookingdata, setBookingData] = useState(""); // Store first name

  return (
    <BookingContext.Provider value={{ bookingdata, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
