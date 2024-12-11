package com.example.TMSBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.TMSBackend.entity.Hotel;
import com.example.TMSBackend.repository.HotelRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;

    // GET: Retrieve all hotels
    @GetMapping("/hotels")
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    // GET: Retrieve a hotel by ID
    @GetMapping("/hotels/{id}")
    public Hotel getHotelById(@PathVariable String id) {
        return hotelRepository.findById(id).orElseThrow(() -> new RuntimeException("Hotel not found"));
    }

    // POST: Create a new hotel
    @PostMapping("/hotels")
    public Hotel createHotel(@RequestBody Hotel hotel) {
        hotel.setId(generateHotelId());
        return hotelRepository.save(hotel);
    }

    // PUT: Update an existing hotel
    @PutMapping("/hotels/{id}")
    public Hotel updateHotel(@PathVariable String id, @RequestBody Hotel hotelDetails) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(() -> new RuntimeException("Hotel not found"));
        hotel.setName(hotelDetails.getName());
        hotel.setLocation(hotelDetails.getLocation());
        hotel.setRating(hotelDetails.getRating());
        return hotelRepository.save(hotel);
    }

    // DELETE: Delete a hotel by ID
    @DeleteMapping("/hotels/{id}")
    public void deleteHotel(@PathVariable String id) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(() -> new RuntimeException("Hotel not found"));
        hotelRepository.delete(hotel);
    }

    // Custom method for generating hotel ID
    private String generateHotelId() {
        long count = hotelRepository.count() + 2; // Assuming starting ID should be C0002
        return String.format("H%04d", count);
    }
}
