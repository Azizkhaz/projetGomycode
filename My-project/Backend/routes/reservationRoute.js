const express = require('express');
const router = express.Router();
const Reservation = require('../model/reservation'); // Adjust the path to your reservation model

// Create a new reservation
router.post('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { name, number, date, time, guests } = req.body;

    if (!userId || !name || !number || !date || !time || !guests) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newReservation = new Reservation({
            userId,
            name,
            number,
            date,
            time,
            guests,
        });

        await newReservation.save();
        res.status(201).json({ message: 'Reservation created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create reservation', error });
    }
});

// Get all reservations for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const reservations = await Reservation.find({ userId });
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch reservations', error });
    }
});

// Update reservation status (confirm or cancel)
router.patch('/:reservationId', async (req, res) => {
    const { reservationId } = req.params;
    const { status } = req.body;

    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(
            reservationId,
            { status },
            { new: true }
        );

        res.status(200).json(updatedReservation);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update reservation status', error });
    }
});

module.exports = router;
