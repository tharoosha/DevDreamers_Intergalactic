CREATE DATABASE  IF NOT EXISTS `intergalactic` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `intergalactic`;
-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: intergalactic
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

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
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookedSeats` int NOT NULL,
  `userId` int DEFAULT NULL,
  `spaceCraftSectionId` int DEFAULT NULL,
  `tripId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_336b3f4a235460dc93645fbf222` (`userId`),
  KEY `FK_5a9d59b88478f68c4585ad0e69a` (`spaceCraftSectionId`),
  KEY `FK_0b077a08d53cfe075a04ea31d7a` (`tripId`),
  CONSTRAINT `FK_0b077a08d53cfe075a04ea31d7a` FOREIGN KEY (`tripId`) REFERENCES `trip` (`id`),
  CONSTRAINT `FK_336b3f4a235460dc93645fbf222` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_5a9d59b88478f68c4585ad0e69a` FOREIGN KEY (`spaceCraftSectionId`) REFERENCES `space_craft_section` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (7,3,1,3,3),(8,2,1,2,3);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'SpaceX'),(2,'Jetwings');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planet`
--

DROP TABLE IF EXISTS `planet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet`
--

LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
INSERT INTO `planet` VALUES (1,'Mars'),(2,'Jupiter'),(3,'Neptune'),(4,'Saturn'),(5,'Venus');
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `region` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `planetId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_32a7d5b20b03c2521b84e5439a6` (`planetId`),
  CONSTRAINT `FK_32a7d5b20b03c2521b84e5439a6` FOREIGN KEY (`planetId`) REFERENCES `planet` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Valora Crater',1),(2,'Jovian Crests',4),(3,'Astralux Oasis',5),(4,'Saturnian Splendor',4),(5,'Venusian Reverie',5),(6,'Elysium Shores',2);
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `space_craft`
--

DROP TABLE IF EXISTS `space_craft`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `space_craft` (
  `id` int NOT NULL AUTO_INCREMENT,
  `travelMode` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `space_craft`
--

LOCK TABLES `space_craft` WRITE;
/*!40000 ALTER TABLE `space_craft` DISABLE KEYS */;
INSERT INTO `space_craft` VALUES (1,'lightner','Boeing 1323'),(2,'ultraH2','Airbus 5kTx');
/*!40000 ALTER TABLE `space_craft` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `space_craft_section`
--

DROP TABLE IF EXISTS `space_craft_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `space_craft_section` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` enum('BUSINESS','ECONOMY','FIRST') NOT NULL,
  `numberOfPeople` int NOT NULL,
  `spacecraftId` int DEFAULT NULL,
  `priceFactor` decimal(3,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5bbfb14a8d494fb11f26969b897` (`spacecraftId`),
  CONSTRAINT `FK_5bbfb14a8d494fb11f26969b897` FOREIGN KEY (`spacecraftId`) REFERENCES `space_craft` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `space_craft_section`
--

LOCK TABLES `space_craft_section` WRITE;
/*!40000 ALTER TABLE `space_craft_section` DISABLE KEYS */;
INSERT INTO `space_craft_section` VALUES (1,'BUSINESS',7,1,1.50),(2,'ECONOMY',13,1,1.00),(3,'FIRST',3,1,2.00);
/*!40000 ALTER TABLE `space_craft_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip`
--

DROP TABLE IF EXISTS `trip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trip` (
  `id` int NOT NULL AUTO_INCREMENT,
  `departureTime` datetime NOT NULL,
  `spaceCraftId` int DEFAULT NULL,
  `fromRegionId` int DEFAULT NULL,
  `toRegionId` int DEFAULT NULL,
  `companyId` int DEFAULT NULL,
  `basePrice` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ad09b556065f5046626eddedc92` (`spaceCraftId`),
  KEY `FK_473c2c492280ffcd4871515fa37` (`fromRegionId`),
  KEY `FK_9382c0c80d5be1e6af19ab4e433` (`toRegionId`),
  KEY `FK_f305ef7679578126f13945be292` (`companyId`),
  CONSTRAINT `FK_473c2c492280ffcd4871515fa37` FOREIGN KEY (`fromRegionId`) REFERENCES `region` (`id`),
  CONSTRAINT `FK_9382c0c80d5be1e6af19ab4e433` FOREIGN KEY (`toRegionId`) REFERENCES `region` (`id`),
  CONSTRAINT `FK_ad09b556065f5046626eddedc92` FOREIGN KEY (`spaceCraftId`) REFERENCES `space_craft` (`id`),
  CONSTRAINT `FK_f305ef7679578126f13945be292` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip`
--

LOCK TABLES `trip` WRITE;
/*!40000 ALTER TABLE `trip` DISABLE KEYS */;
INSERT INTO `trip` VALUES (3,'2157-05-23 12:30:00',1,1,6,1,4000),(4,'2157-04-03 00:00:00',2,4,1,2,1500),(5,'2157-04-03 00:00:00',2,3,1,2,1500);
/*!40000 ALTER TABLE `trip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typeorm_metadata`
--

DROP TABLE IF EXISTS `typeorm_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeorm_metadata` (
  `type` varchar(255) NOT NULL,
  `database` varchar(255) DEFAULT NULL,
  `schema` varchar(255) DEFAULT NULL,
  `table` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `value` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeorm_metadata`
--

LOCK TABLES `typeorm_metadata` WRITE;
/*!40000 ALTER TABLE `typeorm_metadata` DISABLE KEYS */;
INSERT INTO `typeorm_metadata` VALUES ('VIEW',NULL,'intergalactic',NULL,'trip_view','SELECT\n        trip.id as id,\n        trip.departureTime as departureTime,\n        trip.basePrice as minimumPrice,\n        fromRegion.name as fromRegion,\n        toRegion.name as toRegion,\n        space_craft.model as spaceCraftModel,\n        space_craft.travelMode as spaceCraftTravelMode,\n        company.name as companyName\n    FROM trip\n    INNER JOIN region AS fromRegion ON trip.fromRegionId = fromRegion.id\n    INNER JOIN region AS toRegion ON trip.toRegionId = toRegion.id\n    INNER JOIN space_craft ON trip.spacecraftId = space_craft.id\n    INNER JOIN company ON trip.companyId = company.id');
/*!40000 ALTER TABLE `typeorm_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Mohamed','Mushraf','mushrafmim@gmail.com','$2b$10$N9rbUW6bhtOX4pHs8k4bQ.E9qXDYw82dLdd16G14.D7ZpSKiiq/Cy'),(2,'Mohamed','Mushraf','imushraf1234@gmail.com','$2b$10$ydKLF/HP7.6u/oEIcWjk1uHueo7pjBVUqbEgYfGU9Ezt6k4IHzlOS'),(3,NULL,'','','$2b$10$A17H807IgEQ1RrOpFDErL.Rqk0GXSsLX7TY4t434.oVGPWouuHOB2'),(4,NULL,'Mushraf','123@gmail.com','$2b$10$m7ABWjthl4BfZaPLm3P4se2OFxqWf/aAHUTgAIEvGS64DUDKt1VL2');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-20 23:35:00
