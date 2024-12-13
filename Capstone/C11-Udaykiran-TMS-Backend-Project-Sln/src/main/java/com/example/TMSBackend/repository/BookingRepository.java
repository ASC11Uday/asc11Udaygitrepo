package com.example.TMSBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.TMSBackend.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, String> {
    // JpaRepository provides the necessary methods for CRUD operations (save, findAll, findById, delete, etc.)
}
