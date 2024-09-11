import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addReservation } from '../../../api/reservationApi';
import './Reservation.css';

function Reservation() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');

    const navigate = useNavigate();
    const { userId } = useParams();

    const handleReservation = async (e) => {
        e.preventDefault();

        const reservationData = {
            name,
            number,
            date,
            time,
            guests,
        };

        try {
            await addReservation(userId, reservationData);
           await  alert('Reservation created successfully');
           // navigate(`/user/${userId}`);
        } catch (error) {
            console.error('Failed to create reservation', error);
            alert('Failed to create reservation');
        }
    };

    return (
        <div className="reservation-container">
            <h2>Make a Reservation</h2>
            <form className="reservation-form" onSubmit={handleReservation}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Phone Number</label>
                    <input
                        type="text"
                        name="number"
                        required
                        placeholder="Enter your phone number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        name="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <input
                        type="number"
                        name="guests"
                        required
                        placeholder="Number of guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>
                <button type="submit">Reserve Now</button>
            </form>
        </div>
    );
}

export default Reservation;
