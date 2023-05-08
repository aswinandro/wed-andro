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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `gname` varchar(255) NOT NULL,
  `bname` varchar(255) DEFAULT NULL,
  `gaddress` varchar(400) DEFAULT NULL,
  `baddress` varchar(400) DEFAULT NULL,
  `venue` varchar(255) DEFAULT NULL,
  `desc` varchar(1000) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `eventstartdate` datetime DEFAULT NULL,
  `eventenddate` datetime DEFAULT NULL,
  `cat` varchar(45) DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `uid` int DEFAULT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `id_UNIQUE` (`pid`),
  KEY `uid_idx` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,'','Groom Namee','Bride Namee','Groom Address','Bride Address','Location String','Simple Description Check Stuff','https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-29 17:59:42',NULL,NULL,'sim',NULL,NULL,NULL,NULL,3),(5,'','Groom Namee','Bride Namee','Groom Address','Bride Address','Location String','Simple Description Check Stuff','https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-29 18:31:03',NULL,NULL,'sim',NULL,NULL,NULL,NULL,1),(6,'Wedding Card Title','Groom Namee','Bride Namee','Groom Address','Bride Address','Location String','Simple Description Check Stuff','https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','2023-03-29 18:38:51',NULL,NULL,'sim',NULL,NULL,NULL,NULL,3),(18,'sadsad','asdasd','asdas','asdas','asdas',NULL,'<p>dasddads</p>',NULL,'2023-04-01 12:46:27',NULL,NULL,'state?.cat',NULL,NULL,NULL,NULL,3),(19,'qweq','qweq','wqeqwe','weqweqw','qwewqeqwe','weqwew','<p>qweqewq</p>','','2023-04-03 21:08:59',NULL,NULL,'state?.cat',333.5,33.5,'weqeqeq','ewqewqe',3),(20,'qweq','qweq','wqeqwe','weqweqw','qwewqeqwe','weqwew','<p>qweqewq</p>','','2023-04-03 21:14:44','2023-04-11 00:00:00',NULL,'state?.cat',333.5,33.5,'weqeqeq','ewqewqe',3),(23,'My Wedding Title','Andro','Geethu','Asasa','dasda','Auditoriom','<p>Simple Description We invite cordially</p>','','2023-04-04 11:28:26','2023-04-27 00:00:00',NULL,'state?.cat',8.18159253506489,77.4137888656067,'90475054645','aswin.knight@gmail.com',3),(24,'Simple Wedding Title','Andro','Geetu','24/632 Uk Prayer','Kannyakumari','Kannyakumari Beach','<p>Simple Description</p>','','2023-04-04 21:35:53','2023-05-26 10:00:00','2023-05-26 12:42:00','state?.cat',8.081033161813666,77.54715167442629,'9047505645','aswin.knight@gmail.com',4),(25,'Wedding Material','Simpasd','asdad','asdasd','Anducode.  Alt.Mob:9786005038','Mandasd','<p>asdasdasd</p>',NULL,'2023-04-10 14:14:04','2023-04-11 17:15:00','2023-04-14 17:16:00','state?.cat',8.347583535877575,77.20777232911374,'435434535353453','androcodesr@gmail.com',3),(26,'Wedding Material','Simpasd','asdad','asdasd','Anducode.  Alt.Mob:9786005038','Mandasd','<p>asdasdasd</p>',NULL,'2023-04-10 17:22:42','2023-04-11 17:15:00','2023-04-14 17:16:00','state?.cat',8.347003350057609,77.20558027570331,'435434535353453','androcodesr@gmail.com',3),(27,'Wedding Material','Simpasd','asdad','asdasd','Anducode.  Alt.Mob:9786005038','Mandasd','<p>asdasdasd</p>',NULL,'2023-04-10 17:24:13','2023-04-11 17:15:00','2023-04-14 17:16:00','state?.cat',8.350063636591274,77.20602930290222,'435434535353453','androcodesr@gmail.com',3),(28,'sadasd','sadasdasasdas','sadasd','dasdsad','Anducode.  Alt.Mob:9786005038','asdsad','<p>asdasdasd</p>','','2023-04-10 17:35:32','2023-04-11 17:36:00','2023-04-13 17:38:00','state?.cat',8.349154577886726,77.20468242432858,'6554654646','androcodesr@gmail.com',3),(29,'sadsadads','saddsadsad','sadsada','24-62 UK Prayer Home','Anducode.  Alt.Mob:9786005038','sadasdas','<p>asdasdsa</p>',NULL,'2023-04-10 19:43:16','2023-04-10 19:46:00','2023-04-10 19:46:00','state?.cat',8.34994009652058,77.20747192170407,'','aswin.knight@gmail.com',3),(30,'sadsadads','saddsadsad','sadsada','24-62 UK Prayer Home','Anducode.  Alt.Mob:9786005038','sadasdas','<p>asdasdsa</p>',NULL,'2023-04-10 19:45:07','2023-04-10 19:46:00','2023-04-10 19:46:00','state?.cat',8.350570036208635,77.20927436616208,'sdfsdfs','aswin.knight@gmail.com',3),(31,'sadsadads','saddsadsad','sadsada','24-62 UK Prayer Home','Anducode.  Alt.Mob:9786005038','sadasdas','<p>asdasdsa</p>',NULL,'2023-04-10 19:45:26','2023-04-10 19:46:00','2023-04-10 19:46:00','state?.cat',8.34757656967215,77.2078367021301,'sdfsdfs','aswin.knight@gmail.com',3),(32,'Wedding Simple Title Vennila Chek','Shamsddddd','Vennasdadsdadsad','Grooome Address','asdsadsadfasfdsfds','Auditoriumdsdfdfdsgfsgfgs','<p>Simple dfsdffsffsdf </p>','','2023-04-12 15:23:24','2023-04-13 15:24:00','2023-04-14 15:24:00','state?.cat',8.079407889614403,77.54647754411724,'34345436547657658769','aswin.knight@gmail.com',7),(33,'sadsdffdfs','asdadasda','dasdsadas','sadsadada','asdadasdsa','sadsaddas','<p>sadsad</p>','','2023-04-12 20:30:32','2023-04-12 20:34:00','2023-04-12 23:34:00','state?.cat',8.152607796232175,77.54853540950928,'asdsad','sadasdadsa',7),(34,'sadsdffdfs','asdadasda','dasdsadas','sadsadada','asdadasdsa','sadsaddas','<p>sadsad</p>','','2023-04-12 20:31:29','2023-04-12 20:34:00','2023-04-12 23:34:00','state?.cat',8.151097703973377,77.5526981979004,'asdsad','sadasdadsa',7),(35,'zxczds','sadsad','sdfdsf','dsfdsfs','dsfdsfsdf','Auditoriumdsdfdfdsgfsgfgs','<p>sdfdsfdsfsd</p>','','2023-04-12 21:00:02','2023-04-12 20:02:00','2023-04-12 20:02:00','state?.cat',8.151267631123215,77.54986578518067,'sdfdsfsd','dsfdsfds',7),(36,'zxczds','sadsad','sdfdsf','dsfdsfs','dsfdsfsdf','Auditoriumdsdfdfdsgfsgfgs','<p>sdfdsfdsfsd</p>','','2023-04-12 21:01:04','2023-04-12 20:02:00','2023-04-12 20:02:00','state?.cat',8.145242347284146,77.55040246643958,'sdfdsfsd','dsfdsfds',7),(37,'zxczds','sadsad','sdfdsf','dsfdsfs','dsfdsfsdf','Auditoriumdsdfdfdsgfsgfgs','<p>sdfdsfdsfsd</p>','','2023-04-12 21:01:33','2023-04-12 20:02:00','2023-04-12 20:02:00','state?.cat',8.145242347284146,77.55040246643958,'sdfdsfsd','dsfdsfds',7),(38,'zxczds','sadsad','sdfdsf','dsfdsfs','dsfdsfsdf','Auditoriumdsdfdfdsgfsgfgs','<p>sdfdsfdsfsd</p>','','2023-04-12 21:01:37','2023-04-12 20:02:00','2023-04-12 20:02:00','state?.cat',8.145242347284146,77.55040246643958,'sdfdsfsd','dsfdsfds',7),(39,'sdadasdsa','dasdsad','asdasdas','dasdasd','sadasdas','adsasd','<p>dsadsada</p>','','2023-04-12 22:35:40','2023-04-12 22:38:00','2023-04-13 22:38:00','state?.cat',8.149722021557924,77.55044480705176,'adsdasd','asdsadsada',7);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
