package com.example.TMSBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.TMSBackend.entity.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, String> {
}
