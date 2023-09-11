const ConfirmedBooking = ({ bookingData }) => {
    return (
        <>
            <div className="confirm-box">
                <p className="lead-text">Your booking is confirmed</p>
                <p>Date: {bookingData.date}</p>
                <p>Time: {bookingData.time}</p>
                <p>Guests: {bookingData.guests}</p>
                <p>Occasion: {bookingData.occasion}</p>
            </div>
        </>
    );
};

export default ConfirmedBooking;
