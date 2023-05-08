-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: wedding
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sad','sad','$2a$10$mWAK3IBLADjl4eab5v81fOcPt7LSuznQjJW6cHaIMi2JdsWFqrU3W','https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'),(2,'Geethu','Andro','$2a$10$QFtdHuHH7i74RAqb30U6pO59g0GZ0CaxYEj/YW2HKUTD7AOzAXVz2','https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'),(3,'A','a','$2a$10$mag6u1jBaH9QG0EzDLyH5eiI70G/Ewzb1l.vpfUZ8EGH9k0ycLzOC','https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'),(4,'AndroGeetu','aswin.knight@gmail.com','$2a$10$JSYo4Sm9x/Zx7/uh8HW/IOgh0ps4xoQj2G2AK0pfbxH5e6dSSZWvS',NULL),(5,'','','$2a$10$KR8YimRvxdcThEkWVNk.A.P6NheiSuq0/LUW/Yqs28R7mZ3AJcoJe',NULL),(6,'AndroGeethu','xczxc','$2a$10$qyPYkQYKdGeGriWdfHgyAuQnnerCrr4DTo6lEUQ4G2h/PQJuLVF3u',NULL),(7,'Vennila','venillathomas@gmail.com','$2a$10$.LAP04vVFjXHTSVftKoba.tVjAqzpSuz7Jrf/MhfLjMGyW4pZWCQC',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-12 23:53:24
