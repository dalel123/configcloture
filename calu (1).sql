-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 23 Décembre 2019 à 17:38
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `produit`
--

-- --------------------------------------------------------

--
-- Structure de la table `calu`
--

CREATE TABLE IF NOT EXISTS `calu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Com` varchar(25) NOT NULL,
  `Prod` varchar(25) NOT NULL,
  `Usine` varchar(25) NOT NULL,
  `Code` varchar(25) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Fixation` varchar(50) NOT NULL,
  `PrixPoteau` varchar(20) NOT NULL,
  `PrixLame` varchar(20) NOT NULL,
  `PrixBouchon` varchar(20) NOT NULL,
  `PrixPlatine` varchar(20) NOT NULL,
  `PrixEntretoise` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Contenu de la table `calu`
--

INSERT INTO `calu` (`id`, `Com`, `Prod`, `Usine`, `Code`, `Type`, `Fixation`, `PrixPoteau`, `PrixLame`, `PrixBouchon`, `PrixPlatine`, `PrixEntretoise`) VALUES
(1, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Brise vue ', 'Poteau a visser', '9.58', '4.99', '3.20', '5.61', '0.15'),
(2, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Brise vue', 'Poteau a sceller', '9.58', '4.99', '3.20', '5.61', '0.15'),
(3, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Brise vue plein', 'Poteau a visser', '9.58', '4.99', '3.20', '5.61', '0.15'),
(4, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Brise vue plein', 'Poteau a sceller', '9.58', '4.99', '3.20', '5.61', '0.15'),
(5, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Ajoure Lame 150', 'Poteau a visser', '9.58', '8.19', '3.20', '5.61', '0.30'),
(6, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Ajoure Lame 150', 'Poteau a sceller', '9.58', '8.19', '3.20', '5.61', '0.30'),
(7, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Brise vue', 'Pose a langlaise', '9.58', '4.99', '3.20', '20', '0.15'),
(8, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Brise vue plein', 'Pose a langlaise', '9.58', '4.99', '3.20', '20', '0.15'),
(9, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Ajoure Lame 150', 'Pose a langlaise', '9.58', '8.21', '3.20', '20', '0.30'),
(10, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Ajoure Lame 100', 'Poteau a visser', '9.58', '4.99', '3.20', '5.61', '0.30'),
(11, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Ajoure Lame 100', 'Poteau a sceller', '9.58', '4.99', '3.20', '5.61', '0.30'),
(12, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Ajoure Lame 100', 'Pose a langlaise', '9.58', '4.99', '3.20', '5.61', '0.30'),
(13, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Claustra aluminium', 'Poteau a visser', '9.58', '4.99', '3.20', '5.61', '0.15'),
(14, 'Thomas', 'Graziella', 'Mitjavila', 'CALU', 'Claustra aluminium', 'Poteau a sceller', '9.58', '4.99', '3.20', '5.61', '0.15'),
(15, 'Thomas', 'Graziella', 'Mitjavilla', 'CALU', 'Claustra aluminium', 'Pose a langlaise', '9.58', '4.99', '3.20', '20', '0.15');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
