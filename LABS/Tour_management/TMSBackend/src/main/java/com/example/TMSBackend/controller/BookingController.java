package com.example.TMSBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.TMSBackend.entity.Booking;
import com.example.TMSBackend.repository.BookingRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;


    @GetMapping("/bookings")
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Get booking by ID
    @GetMapping("/bookings/{id}")
    public Booking getBookingById(@PathVariable("id") String id) {
        return bookingRepository.findById(id).orElse(null);
    }

    // Create new booking
    @PostMapping("/bookings")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    // Update an existing booking
    @PutMapping("/bookings/{id}")
    public Booking updateBooking(@PathVariable("id") String id, @RequestBody Booking booking) {

        if (bookingRepository.existsById(id)) {
            booking.setId(id);
            return bookingRepository.save(booking);
        }
        return null;
    }


    @DeleteMapping("/bookings/{id}")
    public String deleteBooking(@PathVariable("id") String id) {
        if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id);
            return "Booking with ID " + id + " has been deleted";
        }
        return "Booking not found";
    }
}
