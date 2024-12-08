package com.demo.SpringBoot01.entity;

import jakarta.persistence.*;

@Entity
@Table(name="EMPLOYEE")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name='EMPLOYEE_NAME',nullable = false)
    private String name;
    private int salary;
}

