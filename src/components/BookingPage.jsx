import React, { useState } from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({
    availableTimes,
    initializeTimes,
    updateTimes,
    bookingData,
    setBookingData,
    submitForm,
}) => {
    const handleSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <BookingForm
                handleSubmit={handleSubmit}
                availableTimes={availableTimes}
                initializeTimes={initializeTimes}
                updateTimes={updateTimes}
                bookingData={bookingData}
                setBookingData={setBookingData}
                submitForm={submitForm}
            />
        </>
    );
};

export default BookingPage;
