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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `img` varchar(45) DEFAULT NULL,
  `cat` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `uid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `uidd_idx` (`uid`),
  CONSTRAINT `uidd` FOREIGN KEY (`uid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 08:41:59',3),(2,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:12:50',3),(3,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:17:37',3),(4,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:18:44',3),(5,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:19:50',3),(6,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:33:32',3),(7,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:34:03',3),(8,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:34:45',3),(9,'sadsad','<p>asdasdsad</p>','[object Object]','state?.cat','2023-04-01 09:34:58',3),(10,'zcxzcczx','<p>zxczxczxczxc</p>','[object Object]','state?.cat','2023-04-01 12:15:11',3),(11,'zcxzcczx','<p>zxczxczxczxc</p>','[object Object]','state?.cat','2023-04-01 12:17:50',3);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-12 23:53:23
