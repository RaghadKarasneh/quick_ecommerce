-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2022 at 07:54 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quick_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(14) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Suit', '2022-09-11 12:00:08', '2022-09-11 12:00:08'),
(2, 'Shoes', '2022-09-11 12:00:48', '2022-09-11 12:00:48'),
(3, 'Accessories', '2022-09-11 12:02:42', '2022-09-11 12:02:42'),
(4, 'Dress', '2022-09-11 12:04:37', '2022-09-11 12:04:37');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(14) NOT NULL,
  `user_id` int(14) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` double(14,2) NOT NULL,
  `description` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `user_id`, `product_name`, `image`, `price`, `description`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 1, 'STRAPLESS STREAKED DRESS', 'dress 1-1.PNG', 5500.00, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis odio dignissimos pariatur dolore praesentium error incidunt nostrum, voluptates rerum asperiores eum. Fugiat suscipit aliquid atque quam! Libero, exercitationem.', 0, '2022-09-11 11:46:27', '2022-09-11 11:46:27'),
(2, 2, 'Navy Havana Tuxedo Suit', 'suit 1-1.PNG', 699.00, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis odio dignissimos pariatur dolore praesentium error incidunt nostrum, voluptates rerum asperiores eum. Fugiat suscipit aliquid atque quam! Libero, exercitationem.', 0, '2022-09-11 11:48:33', '2022-09-11 11:48:33'),
(3, 2, 'Dark Green Satin Crystal Embellished Sandals', 'shoes 7-1.webp', 1395.00, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi maxime facilis odio dignissimos pariatur dolore praesentium error incidunt nostrum, voluptates rerum asperiores eum. Fugiat suscipit aliquid atque quam! Libero, exercitationem.', 0, '2022-09-11 11:51:42', '2022-09-11 11:51:42'),
(11, 1, 'Specialized fit navigator sunglasses', 'access 8-1.PNG', 699.00, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores ipsum tenetur, porro animi provident? Asperiores laboriosam quibusdam, distinctio odit, quidem illo quasi nihil repellat quam ipsam est sequi inventore?', 0, '2022-09-12 17:53:20', '2022-09-12 17:53:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(14) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Sara Mohamaad', 'sara@yahoo.com', '77f65c29bd705004badfb4b224f42f1e', '2022-09-11 23:47:04', '2022-09-11 23:47:04'),
(2, 'Raghad Ibrahim ALKarasneh', 'raghad@gmail.com', 'a432828380cd96104b4c171f00076f72', '2022-09-12 00:06:05', '2022-09-12 00:06:05'),
(3, 'Sami Mohammad', 'sami@gmail.com', 'AABBCCDD22', '2022-09-12 11:13:36', '2022-09-12 11:13:36'),
(4, 'Raghad Ibrahim ALKarasneh', 'hadi@gmail.com', 'a432828380cd96104b4c171f00076f72', '2022-09-12 11:34:37', '2022-09-12 11:34:37'),
(5, 'Roa ahmad', 'roa@yahoo.com', 'a432828380cd96104b4c171f00076f72', '2022-09-12 12:41:16', '2022-09-12 12:41:16'),
(6, 'Ali Rami', 'ali@gmail.com', 'a432828380cd96104b4c171f00076f72', '2022-09-12 12:56:31', '2022-09-12 12:56:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user_id_2` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
