import React, { useState } from 'react';

const BookingForm = (props) => {
    const [selectedDate, setSelectedDate] = useState();

    const [selectedSlot, setSelectedSlot] = useState('17:00');
    const [noOfGuests, setNoOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            selectedDate: selectedDate,
            selectedSlot: selectedSlot,
            noOfGuests: noOfGuests,
            occasion: occasion,
        };
        props.handleSubmit(data);
    };
    return (
        <>
            <h1>Book Now</h1>
            <form
                style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={selectedDate}
                    required
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time "
                    value={selectedSlot}
                    required
                    onChange={(e) => setSelectedSlot(e.target.value)}
                >
                    {props.availableSlots?.map((it) => (
                        <option value={it}>{it}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    required
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={noOfGuests}
                    onChange={(e) => setNoOfGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
};

export default BookingForm;
