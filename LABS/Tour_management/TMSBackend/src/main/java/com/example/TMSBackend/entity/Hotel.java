package com.example.TMSBackend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hotels")
public class Hotel {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "Hotel_Name", nullable = false)
    @JsonProperty("Hotel_Name")
    private String name; // Maps to Hotel_Name in the database

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "rating", nullable = false)
    private double rating;

    // Default constructor
    public Hotel() {}

    // Constructor with parameters
    public Hotel(String id, String name, String location, double rating) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.rating = rating;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
