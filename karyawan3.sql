-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 03:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_jfd_sep`
--

-- --------------------------------------------------------

--
-- Table structure for table `karyawan3`
--

CREATE TABLE `karyawan3` (
  `id` int(100) NOT NULL,
  `name` varchar(250) NOT NULL,
  `religion` int(100) DEFAULT NULL,
  `position` varchar(255) NOT NULL,
  `join_date` varchar(100) NOT NULL,
  `join_month` varchar(100) NOT NULL,
  `join_year` varchar(100) NOT NULL,
  `release_date` varchar(100) DEFAULT NULL,
  `release_month` varchar(100) DEFAULT NULL,
  `release_year` varchar(100) DEFAULT NULL,
  `experience` varchar(100) NOT NULL,
  `salary` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `karyawan3`
--

INSERT INTO `karyawan3` (`id`, `name`, `religion`, `position`, `join_date`, `join_month`, `join_year`, `release_date`, `release_month`, `release_year`, `experience`, `salary`) VALUES
(1, 'Jacky', NULL, 'Solution Architect', '25', '07', '2018', '25', '07', '2022', '8', '150'),
(2, 'John', NULL, 'Assistant Manager', '02', '02', '2010', '02', '02', '2021', '12', '155'),
(3, 'Alano', NULL, 'Manager', '09', '11', '2010', NULL, NULL, NULL, '14', '175'),
(4, 'Aaron', NULL, 'Engineer', '16', '08', '2021', '16', '08', '2022', '1', '80'),
(5, 'Allen', NULL, 'Engineer', '06', '06', '2024', '', '', '', '4', '75'),
(6, 'Peter', NULL, 'Team Leader', '09', '01', '2020', NULL, NULL, NULL, '3', '85');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `karyawan3`
--
ALTER TABLE `karyawan3`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `karyawan3`
--
ALTER TABLE `karyawan3`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
