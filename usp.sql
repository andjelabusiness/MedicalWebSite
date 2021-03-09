CREATE DATABASE  IF NOT EXISTS `usp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `usp`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: usp
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `bolesti`
--

DROP TABLE IF EXISTS `bolesti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bolesti` (
  `id` int NOT NULL AUTO_INCREMENT,
  `naziv` varchar(45) NOT NULL,
  `simptomi` varchar(200) NOT NULL,
  `opasnost` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bolesti`
--

LOCK TABLES `bolesti` WRITE;
/*!40000 ALTER TABLE `bolesti` DISABLE KEYS */;
INSERT INTO `bolesti` VALUES (1,'Bakterijska infekcija','/','srednja'),(2,'Alergija','Osip, kasalj, kijanje','srednja'),(3,'Infekcija krvi','/','velika'),(4,'Infekcija mozga','/','velika'),(5,'Infekcija pluca','/','velika'),(6,'Iinfekcija kostiju','/','velika'),(7,'Infekcija creva','/','velika'),(8,'Dijabetes','/','velika'),(9,'Poremecaj rada stitne zlezde','/','velika'),(10,'Ciroza jetre','/','srednja'),(11,'Hepatitis','/','velka'),(12,'Aritmije','/','velika'),(13,'Kardiovaskularne bolesti','/','velika'),(14,'Hipertenzija','/','velika'),(15,'Adisonova bolest','hirurska intervencija ','velika'),(16,'Alchajmerova bolest','/','velika');
/*!40000 ALTER TABLE `bolesti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `komentari`
--

DROP TABLE IF EXISTS `komentari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `komentari` (
  `idkom` int NOT NULL AUTO_INCREMENT,
  `tekst` varchar(500) NOT NULL,
  `lek` int NOT NULL,
  `user` int NOT NULL,
  PRIMARY KEY (`idkom`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `komentari`
--

LOCK TABLES `komentari` WRITE;
/*!40000 ALTER TABLE `komentari` DISABLE KEYS */;
INSERT INTO `komentari` VALUES (1,'Sjajan protiv glavobolje',1,3),(2,'Sporije deluje u odnosu na neke lekove',1,5),(3,'Dobar za povisenu temperaturu',1,1),(4,'Moze izazvati kasalj',1,1);
/*!40000 ALTER TABLE `komentari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leci`
--

DROP TABLE IF EXISTS `leci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leci` (
  `lek` int NOT NULL,
  `bolest` int NOT NULL,
  PRIMARY KEY (`lek`,`bolest`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leci`
--

LOCK TABLES `leci` WRITE;
/*!40000 ALTER TABLE `leci` DISABLE KEYS */;
INSERT INTO `leci` VALUES (6,2),(9,8),(10,1),(12,3),(12,4),(12,5),(12,6),(12,7),(31,2),(32,2),(33,13),(35,10),(36,8),(36,14),(37,9);
/*!40000 ALTER TABLE `leci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lekovi`
--

DROP TABLE IF EXISTS `lekovi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lekovi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `naziv` varchar(45) NOT NULL,
  `link` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lekovi`
--

LOCK TABLES `lekovi` WRITE;
/*!40000 ALTER TABLE `lekovi` DISABLE KEYS */;
INSERT INTO `lekovi` VALUES (1,'Brufen','https://www.alims.gov.rs/ciril/files/lekovi/pil/6409-2010-12.pdf'),(2,'Kafetin','https://mediately.co/rs/drugs/EtJIbXwUc0jmIWJ7MPRCB9s54uK/caffetin-sc-250mg-210mg-50mg-tableta'),(3,'Aspirin','https://www.alims.gov.rs/ciril/files/lekovi/pil/2781-2008-12.pdf'),(4,'Dexason','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-03604-16-001.pdf'),(5,'Hemomycin','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-00146-14-001.pdf'),(6,'Xsyzal','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-8764-12-001.pdf'),(7,'Alopurinol','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-01095-16-001.pdf'),(8,'Prilenap','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/515-01-01525-13-002.pdf'),(9,'Gluformin','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-3538-12-001.pdf'),(10,'Panklav','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-2740-10-001.pdf'),(11,'Verapamil','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-06844-13-001.pdf'),(12,'Orvagil','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-00946-17-001.pdf'),(13,'Hlorpromazin','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-00303-16-001.pdf'),(14,'Karbapin','https://www.alims.gov.rs/ciril/files/lekovi/smpc/515-01-8880-12-001.pdf'),(15,'Klozapin','https://www.psihocentrala.com/lekovi/klozapin/'),(16,'Escitalopram PharmaS','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/515-01-0410-12-001.pdf'),(17,'Inspra','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-03608-16-001.pdf'),(18,'Flunisan','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/5438-2009-12.pdf'),(19,'Alprazolam','https://www.psihocentrala.com/lekovi/alprazolam-ksalol-xanax/'),(20,'Lidokain','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-05206-16-001.pdf'),(21,'Disulfiram','https://zklas.org/alkoholni-blokatori-u-lecenju-alkoholizma/'),(22,'PK-Merz','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-01710-14-001.pdf'),(23,'Donepezil Alvogen','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-6382-11-001.pdf'),(24,'Kornam','https://www.alims.gov.rs/ciril/files/lekovi/smpc/515-01-04896-14-001.pdf'),(25,'Propranolol','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-01419-17-001.pdf'),(26,'Timadren','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-5208-10-001.pdf'),(27,'Lanzul','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-04312-14-001.pdf'),(28,'Klometol','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-03357-15-001.pdf'),(29,'Eritromicin','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-03044-16-001.pdf'),(30,'Sevoflurane Baxter','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-5979-12-001.pdf'),(31,'Nasonex','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/515-01-03286-13-001.pdf'),(32,'Aerius','https://www.alims.gov.rs/ciril/files/lekovi/pil/3977-2010-12.pdf'),(33,'Concor','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/1857-2008-12.pdf'),(34,'Indapres','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-03705-14-001.pdf'),(35,'Atacor','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/515-01-03209-17-001.pdf'),(36,'Telmikor','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/515-01-0426-12-001.pdf'),(37,'Letrox','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-04275-15-001.pdf'),(38,'Yurinex','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-3413-12-001.pdf'),(39,'Venlax','https://www.alims.gov.rs/ciril/files/lekovi/pil/515-01-02786-14-001.pdf'),(40,'Ketek','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/1174-2008-12.pdf'),(41,'Belbien','https://www.alims.gov.rs/wp-content/blogs.dir/2/files/lekovi/pil/3121-2008-12.pdf'),(42,'Plikamicin','http://mediko.sveznadar.info/20Lijekovi/80Citostatici/Citostatici.html');
/*!40000 ALTER TABLE `lekovi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `tip` varchar(45) NOT NULL,
  `bolnica` varchar(45) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('admin','admin','admin','/'),('dragan','gagigagi','istrazivac','KBC Zvezdara'),('istrazivac','istrazivac','istrazivac','VMA'),('milica','comicomi','istrazivac','VMA'),('zivojin','zikazika','istrazivac','Urgentni centar');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'usp'
--

--
-- Dumping routines for database 'usp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-17 20:12:04
