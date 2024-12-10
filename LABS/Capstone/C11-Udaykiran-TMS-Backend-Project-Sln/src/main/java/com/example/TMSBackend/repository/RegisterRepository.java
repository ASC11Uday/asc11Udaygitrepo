package com.example.TMSBackend.repository;

import com.example.TMSBackend.entity.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegisterRepository extends JpaRepository<Register,Integer> {

}
