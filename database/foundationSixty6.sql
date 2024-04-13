-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 01, 2024 at 04:30 PM
-- Server version: 5.7.39
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: foundationSixty6
--

-- --------------------------------------------------------

--
-- Table structure for table application_form
--

CREATE TABLE application_form (
  id int(10) NOT NULL,
  reference varchar(20) NOT NULL,
  full_name varchar(20) NOT NULL,
  address varchar(20) NOT NULL,
  pho_number int(30) NOT NULL,
  self_description varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table application_form
--

INSERT INTO application_form (id, reference, full_name, address, pho_number, self_description) VALUES
(1, 'C25', 'Maria Gomez', '234 street 1', 226048070, 'I am dhfbcsdjhcbjbzcxjha'),
(2, 'V7', 'Felipe', 'adress 123 ', 12372137, 'This is my description hdbczbc'),
(3, 'C3', 'Scott Print', 'adress 123', 27638213, 'My description: sdjgczxbcdc');

-- --------------------------------------------------------

--
-- Table structure for table careers
--

CREATE TABLE careers (
  id int(10) UNSIGNED NOT NULL,
  reference varchar(20) NOT NULL,
  title varchar(20) NOT NULL,
  description varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table careers
--

INSERT INTO careers (id, reference, title, description) VALUES
(1, 'C25', 'Receptionist', 'Looking for a Receptionist'),
(2, 'C12', 'Counsellor', 'Looking for a Counsellor');

-- --------------------------------------------------------

--
-- Table structure for table contacts
--

CREATE TABLE contacts (
  id int(11) NOT NULL,
  full_name varchar(60) NOT NULL,
  email varchar(40) NOT NULL,
  subject varchar(40) NOT NULL,
  message varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table contacts
--

INSERT INTO contacts (id, full_name, email, subject, message) VALUES
(1, 'Ana Smith', 'ana.smith@gmail.com', 'Congratulations!', 'I\'m really happy for you guys!'),
(2, 'Jacob Hunter', 'jacob@gmail.com', 'Awesome Foundation!', 'I\'m really exciting of hearing about this foundation how can I get more information? Thank you'),
(3, 'Scott Print', 'scott@gmail.com', 'I need Help', 'I want to connect with a professional, please I need help.');

-- --------------------------------------------------------

--
-- Table structure for table events
--

CREATE TABLE `events` (
  id int(11) NOT NULL,
  date date NOT NULL,
  title varchar(50) NOT NULL,
  place varchar(50) NOT NULL,
  description varchar(500) NOT NULL,
  image_filename varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table events
--

INSERT INTO events (id, date, title, place, description, image_filename) VALUES
(1, '2024-03-01', 'THANK YOU FANSHAWE DINNER', 'RBC Place', 'A thank you dinner for the Fanshawe students for their diligent work in kickstarting our foundation!', 'clinking-glasses.jpeg'),
(2, '2024-04-18', 'IDP INDUSTRY NIGHT', 'Centennial Hall', 'We will be attending Fanshawe College\'s Industry Night to select the group of students whose design we will use.', 'night.jpg'),
(3, '2024-04-05', 'IDP Presentations', 'Fanshawe College Downtown Campus', 'Fanshawe College\'s IDP program will be presenting their final ideas and marketing pitches to us, as well as other Industry professionals.', 'presentation.jpg');

-- --------------------------------------------------------

--
-- Table structure for table event_media
--

CREATE TABLE event_media (
  id int(11) UNSIGNED NOT NULL,
  event_id int(11) DEFAULT NULL,
  image_filename varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table event_media
--

INSERT INTO event_media (id, event_id, image_filename) VALUES
(1, 1, 'thank1.jpg'),
(2, 1, 'thank2.jpg'),
(3, 2, 'industry1.jpg'),
(4, 2, 'industry1.jpg'),
(5, 3, 'pres1.jpg'),
(6, 3, 'pres2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table posts
--

CREATE TABLE posts (
  id int(11) UNSIGNED NOT NULL,
  title varchar(100) NOT NULL,
  description varchar(200) NOT NULL,
  author varchar(100) NOT NULL,
  date date NOT NULL,
  image_filename varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table posts
--

INSERT INTO posts (id, title, description, author, date, image_filename) VALUES
(1, 'A Youth Experience With Mental Illness', 'A woman\'s story of childhood mental illness.', 'Sophia Westrop', '2024-04-20', 'sophia.jpg'),
(2, 'Parental Support For Mental Illness', 'How parents can support youth through their mental health struggles.', 'Welt Yang', '2024-04-19', 'hug.jpg'),
(3, 'Bipolar Disorder', 'An in-depth look at how a youth can experience bipolar disorder.', 'Stuart Du Kamp', '2024-04-18', 'bipolar-plant.png');

-- --------------------------------------------------------

--
-- Table structure for table post_media
--

CREATE TABLE post_media (
  id int(11) UNSIGNED NOT NULL,
  post_id int(11) DEFAULT NULL,
  image_filename varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table post_media
--

INSERT INTO post_media (id, post_id, image_filename) VALUES
(1, 1, 'sophia.jpg'),
(2, 2, 'huge.jpg'),
(3, 3, 'bipolar-plant.png');

-- --------------------------------------------------------

--
-- Table structure for table volunteers
--

CREATE TABLE volunteers (
  id int(10) NOT NULL,
  reference varchar(20) NOT NULL,
  title varchar(20) NOT NULL,
  description varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table volunteers
--

INSERT INTO volunteers (id, reference, title, description) VALUES
(1, 'V10', 'Movie Night Usher', 'Looking for a volunteer '),
(2, 'V7', 'Jenga Tagger', 'Looking for a volunteer '),
(3, 'V3', 'Caterer', 'Looking for a volunteer ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table application_form
--
ALTER TABLE application_form
  ADD PRIMARY KEY (id);

--
-- Indexes for table careers
--
ALTER TABLE careers
  ADD PRIMARY KEY (id);

--
-- Indexes for table contacts
--
ALTER TABLE contacts
  ADD PRIMARY KEY (id);

--
-- Indexes for table events
--
ALTER TABLE events
  ADD PRIMARY KEY (id);

--
-- Indexes for table event_media
--
ALTER TABLE event_media
  ADD PRIMARY KEY (id),
  ADD KEY event_id (event_id);

--
-- Indexes for table posts
--
ALTER TABLE posts
  ADD PRIMARY KEY (id);

--
-- Indexes for table post_media
--
ALTER TABLE post_media
  ADD KEY post_id (post_id);

--
-- Indexes for table volunteers
--
ALTER TABLE volunteers
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table application_form
--
ALTER TABLE application_form
  MODIFY id int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table careers
--
ALTER TABLE careers
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table contacts
--
ALTER TABLE contacts
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table events
--
ALTER TABLE events
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table event_media
--
ALTER TABLE event_media
  MODIFY id int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table posts
--
ALTER TABLE posts
  MODIFY id int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table volunteers
--
ALTER TABLE volunteers
  MODIFY id int(10) NOT NULL AUTO_INCREMENT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
