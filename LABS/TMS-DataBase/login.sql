CREATE DATABASE TMS;

use tms;

CREATE Table register (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT null UNIQUE
);

DESC register;

INSERT INTO
    register (name, email, password, phone)
VALUES (
        "Super Admin",
        "admin@example.com",
        "Admin@123",
        "1234567890"
    ),
    (
        "uday",
        "uday@gmail.com",
        "Uday@123",
        "9876543211"
    )

SELECT *from register;

CREATE TABLE bookings (
    id VARCHAR(10) PRIMARY KEY,
    guest VARCHAR(255) NOT NULL,
    hotel VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    status VARCHAR(50) NOT NULL
);

DESCRIBE bookings;


SHOW TABLES;

DESC bookings;
INSERT INTO bookings (id, guest, hotel, date, status) VALUES
('B1001', 'John Doe', 'Grand Hotel', '2023-12-10', 'Cancelled'),
('B5499', 'Uday', 'Grand Hotel', '2024-12-12', 'Confirmed'),
('B5384', 'SunnyLeon', 'Novotel', '2024-12-11', 'Confirmed');
SELECT * FROM bookings;

SET @counter = 1;

UPDATE bookings
SET id = CONCAT('B', LPAD(@counter := @counter + 1, 4, '0'))
WHERE id LIKE 'B%';

CREATE TABLE hotels (
    id VARCHAR(5) PRIMARY KEY,
    Hotel_Name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    rating DECIMAL(2,1) NOT NULL
);
DESC hotels;
INSERT INTO hotels (id, Hotel_Name, location, rating) VALUES
('H0001', 'Sea Breeze Resort', 'Miami', 4),
('H0002', 'Mountain View Lodge', 'Denver', 4),
('H0003', 'Sandeep OYO', 'Vizag', 4.5),
('H0004', 'Novotel', 'Vijayawada', 5);

SELECT *from register;

