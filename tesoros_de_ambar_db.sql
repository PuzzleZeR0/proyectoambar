-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 172.18.158.170    Database: tesoros_de_ambar
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.24.04.1

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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_productos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Pulsera Tejida Con Ámbar Auténtico - Roja','Pulsera tejida ajustable con ámbar auténtico en color rojo.',950.00,9,'../images/p1.jpg'),(2,'Pulsera Tejida Con Ámbar Auténtico - Negra','Pulsera tejida ajustable con ámbar auténtico en color negro.',100.00,14,'../images/p2.jpg'),(3,'Pulsera con obsidiana, ojo de Tigre y ámbar','Pulsera con mezcla de piedras preciosas: obsidiana, ojo de tigre y ámbar.',279.00,20,'../images/p3.jpg'),(4,'Dije de colibrí de ámbar y plata laminada','Colibrí diseñado en ámbar y plata laminada de alta calidad.',590.00,5,'../images/p4.jpg'),(5,'Dije de corazón de ámbar rojo y Plata','Dije en forma de corazón con ámbar rojo y detalles en plata.',1200.00,3,'../images/p5.jpg'),(6,'Pulsera tejida con esferas de ámbar - Roja','Pulsera con esferas de ámbar rojo de 4.5 mm, diseño tejida.',470.00,8,'../images/p6.jpg'),(7,'Pulsera tejida con esferas de ámbar - Azul','Pulsera con esferas de ámbar azul de 4.5 mm, diseño tejida.',470.00,6,'../images/p7.jpg'),(8,'Pulsera tejida con esferas de ámbar - Rosa','Pulsera con esferas de ámbar rosa de 4.5 mm, diseño tejida.',470.00,4,'../images/p8.jpg'),(9,'Pulseras tejidas con esferas de ámbar','Pulseras color oro de 4.5 mm.',470.00,10,'../images/p9.jpg'),(10,'Dije corazón De ámbar & plata','Corazón de ámbar.',179.00,15,'../images/p10.jpg'),(11,'Pulsera con ámbar para bebé','Pulsera de 12cm para tu bebé.',279.00,20,'../images/p11.jpg'),(12,'Collar tejido con esferas de ámbar','Collar de 50 cm.',950.00,5,'../images/p12.jpg'),(13,'Pulsera con ámbar y nudo de bruja','Pulsera tejida.',270.00,25,'../images/p13.jpg'),(14,'Collar con donas de ámbar rojo y plata','Collar de 52 cm.',7500.00,2,'../images/p14.jpg'),(15,'Pulsera con esferas de jade negro y ámbar','Calidad premium.',1590.00,6,'../images/p15.jpg'),(16,'Pulsera con esferas de ámbar','Tejido ajustable.',4700.00,3,'../images/p16.jpg'),(17,'Dije Baby Yoda de ámbar y plata','Dije con diseño de Baby Yoda elaborado en ámbar y plata.',1850.00,5,'../images/p17.jpg'),(18,'Dije de búho de ámbar y plata','Dije en forma de búho hecho con ámbar y plata.',1350.00,8,'../images/p18.jpg'),(19,'Dije de cabeza de caballo de ámbar y plata','Dije con diseño de cabeza de caballo, en ámbar y plata.',1350.00,6,'../images/p19.jpg'),(20,'Dije de mariposa de ámbar y plata','Dije en forma de mariposa, elaborado en ámbar y plata.',1650.00,7,'../images/p20.jpg'),(21,'Aretes de ámbar y plata en forma de búho','Aretes con diseño de búho, en ámbar y plata.',450.00,12,'../images/p21.jpg'),(22,'Aretes de ámbar y plata estilo flor','Aretes con diseño floral hechos con ámbar y plata.',650.00,10,'../images/p22.jpg'),(23,'Anillo de ámbar y plata ajustable','Anillo de ámbar con ajuste personalizado, elaborado en plata.',850.00,15,'../images/p23.jpg'),(24,'Dije de ámbar en forma de gato y plata','Dije en forma de gato, elaborado en ámbar y plata.',1250.00,9,'../images/p24.jpg'),(25,'Dije de sol de ámbar','Dije en forma de sol con detalles de plata.',2185.00,5,'../images/p25.jpg'),(26,'Dije de sol y luna','Dije en forma de sol y luna con detalles de plata.',1060.00,7,'../images/p26.jpg'),(27,'Dije de gatito de ámbar','Dije en forma de gatito con detalles de ámbar.',664.00,12,'../images/p27.jpg'),(28,'Dije de caballo de mar','Dije en forma de caballo de mar con ámbar.',974.00,8,'../images/p28.jpg'),(29,'Dije de estrella de ámbar','Dije en forma de estrella con ámbar y plata 925.',430.00,15,'../images/p29.jpg'),(30,'Pendientes abeja de ámbar','Aretes en forma de abeja con plata.',840.00,10,'../images/p30.jpg'),(31,'Aretes de plata con ámbar','Aretes en forma de bolita con plata.',1080.00,9,'../images/p31.jpg'),(32,'Collar de ámbar mediano','Collar mediano con ámbar de 60 cm tejido.',1445.00,3,'../images/p32.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id_roles` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int NOT NULL AUTO_INCREMENT,
  `user` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Puzzle','p@p.com','p',1),(2,'brisingr','b@b.com','b',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tesoros_de_ambar'
--

--
-- Dumping routines for database 'tesoros_de_ambar'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-02 17:52:16
