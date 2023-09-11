import React, { useState } from 'react';
import BookingForm from './BookingForm';

const BookingPage = (props) => {
    const handleSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div>
                BookingPage - the component for the table reservations page
            </div>
            <BookingForm
                handleSubmit={handleSubmit}
                availableSlots={props.availableSlots}
            />
        </>
    );
};

export default BookingPage;
