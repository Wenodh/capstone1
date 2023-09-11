import React, { useState } from 'react';

const BookingForm = ({
    availableTimes,
    initializeTimes,
    updateTimes,
    bookingData,
    setBookingData,
    submitForm,
}) => {
    const [selectedDate, setSelectedDate] = useState();

    const [selectedSlot, setSelectedSlot] = useState('17:00');
    const [noOfGuests, setNoOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e.target);
        initializeTimes();
    };

    return (
        <>
            <h1>Book Now</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res_date" className="lead-text">
                    Choose date
                </label>
                <input
                    type="date"
                    id="res_date"
                    required
                    value={bookingData.date}
                    onChange={(e) => {
                        setBookingData({
                            ...bookingData,
                            date: e.target.value,
                        });
                        updateTimes(new Date(e.target.value));
                    }}
                    aria-label="Date"
                />
                <label htmlFor="res_time" className="lead-text">
                    Choose time
                </label>
                <select
                    id="res_time"
                    className="p-text"
                    value={bookingData.time}
                    required
                    onChange={(e) => {
                        setBookingData({
                            ...bookingData,
                            time: e.target.value,
                        });
                    }}
                    aria-label="Time"
                >
                    <option value="">-- Select Time --</option>
                    {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <label htmlFor="guests" className="lead-text">
                    Number of guests
                </label>
                <input
                    type="number"
                    required
                    placeholder="Guest number"
                    min="1"
                    max="10"
                    id="guests"
                    name="guests"
                    className="p-text"
                    value={bookingData.guests}
                    onChange={(e) => {
                        setBookingData({
                            ...bookingData,
                            guests: e.target.value,
                        });
                    }}
                    aria-label="Guests"
                />
                <label htmlFor="occasion" className="lead-text">
                    Occasion
                </label>
                <select
                    id="occasion"
                    required
                    name="occasion"
                    className="p-text"
                    value={bookingData.occasion}
                    onChange={(e) => {
                        setBookingData({
                            ...bookingData,
                            occasion: e.target.value,
                        });
                    }}
                    aria-label="Occasion"
                >
                    <option value="">-- Select Occasion --</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button
                    type="submit"
                    className="pillBtn"
                    id="submitBtn"
                    data-testid="submitBtn"
                    disabled={
                        !bookingData.date ||
                        !bookingData.time ||
                        !bookingData.guests ||
                        !bookingData.occasion
                    }
                    aria-label="On Click"
                >
                    Make Your reservation
                </button>

                <div>
                    <p className="lead-text">Your reservation information: </p>
                    <p>Date: {bookingData.date}</p>
                    <p>Time: {bookingData.time}</p>
                    <p>Guests: {bookingData.guests}</p>
                    <p>Occasion: {bookingData.occasion}</p>
                </div>
            </form>
        </>
    );
};

export default BookingForm;
