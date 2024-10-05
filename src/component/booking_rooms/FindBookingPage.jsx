import React, { useState } from 'react';

const FindBookingPage = () => {
    const [confirmationCode, setConfirmationCode] = useState('');
    const [bookingDetails, setBookingDetails] = useState(null);
    const [error, setError] = useState(null);

    const mockBookingData = {
        bookingConfirmationCode: confirmationCode,
        checkInDate: '2024-10-10',
        checkOutDate: '2024-10-15',
        numOfAdults: 2,
        numOfChildren: 1,
        user: {
            name: 'Tien Ngoc',
            email: 'tienngoc.doe@example.com',
            phoneNumber: '123-456-7890'
        },
        room: {
            roomType: 'Suite',
            roomPhotoUrl: 'https://www.travelandleisure.com/thmb/w5nJuPvqKlvAbf6sAvi7vyK4c_w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rosewood-carlyle-presidential-suite-LUXESUITE0122-0046808a88924e57922d78c7f1d9ca60.jpg'
        }
    };

    const handleSearch = () => {
        if (!confirmationCode.trim()) {
            setError("Please Enter a booking confirmation code");
            setTimeout(() => setError(''), 5000);
            return;
        }

        // Simulate finding booking details
        if (confirmationCode === '123456') { // Mock confirmation code check
            setBookingDetails(mockBookingData);
            setError(null); // Clear error if successful
        } else {
            setError("Booking not found.");
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="find-booking-page">
            <h2>Find Booking</h2>
            <div className="search-container">
                <input
                    required
                    type="text"
                    placeholder="Enter your booking confirmation code"
                    value={confirmationCode}
                    onChange={(e) => setConfirmationCode(e.target.value)}
                />
                <button onClick={handleSearch}>Find</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {bookingDetails && (
                <div className="booking-details">
                    <h3>Booking Details</h3>
                    <p>Confirmation Code: {bookingDetails.bookingConfirmationCode}</p>
                    <p>Check-in Date: {bookingDetails.checkInDate}</p>
                    <p>Check-out Date: {bookingDetails.checkOutDate}</p>
                    <p>Num Of Adults: {bookingDetails.numOfAdults}</p>
                    <p>Num Of Children: {bookingDetails.numOfChildren}</p>

                    <br />
                    <hr />
                    <br />
                    <h3>Booker Details</h3>
                    <div>
                        <p>Name: {bookingDetails.user.name}</p>
                        <p>Email: {bookingDetails.user.email}</p>
                        <p>Phone Number: {bookingDetails.user.phoneNumber}</p>
                    </div>

                    <br />
                    <hr />
                    <br />
                    <h3>Room Details</h3>
                    <div>
                        <p>Room Type: {bookingDetails.room.roomType}</p>
                        <img src={bookingDetails.room.roomPhotoUrl} alt="Room" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindBookingPage;
