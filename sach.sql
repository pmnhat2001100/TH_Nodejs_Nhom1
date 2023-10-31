-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 23, 2023 lúc 05:55 PM
-- Phiên bản máy phục vụ: 10.1.32-MariaDB
-- Phiên bản PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sach`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `groupproduct`
--

CREATE TABLE `groupproduct` (
  `idgroup` int(10) NOT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `groupproduct`
--

INSERT INTO `groupproduct` (`idgroup`, `type`) VALUES
(1, 'Mùa Xuân'),
(2, 'Mùa Hạ'),
(3, 'Mùa Thu'),
(4, 'Mùa Đông');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `groupuser`
--

CREATE TABLE `groupuser` (
  `idgroup` int(10) NOT NULL,
  `role` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `groupuser`
--

INSERT INTO `groupuser` (`idgroup`, `role`) VALUES
(1, 'Nam'),
(2, 'Nữ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `listnews`
--

CREATE TABLE `listnews` (
  `idnews` int(10) NOT NULL,
  `title` varchar(1000) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `image` varchar(10000) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `listproduct`
--

CREATE TABLE `listproduct` (
  `idpro` int(10) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `giagoc` int(100) NOT NULL,
  `giaban` int(100) NOT NULL,
  `image` varchar(10000) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `information` varchar(1000) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `idgroup` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `listproduct`
--

INSERT INTO `listproduct` (`idpro`, `name`, `giagoc`, `giaban`, `image`, `information`, `idgroup`) VALUES
(15, 'Mùa xuân vắng lặng', 700000, 560000, 'muaxuanvanglang.jpg', 'Đây là một quyển sách mô tả về một mùa xuân theo một mặt hoàn toàn khác với bầu không khí của nó mang lại', 1),
(16, 'Thân gửi mùa hạ', 500000, 350000, 'thanguimuaha.jpg', 'Đây là một quyển sách chứa rất nhiều tâm tình và kỹ niệm của người viết dành cho một mùa hạ mang đầy dấu ấn tuổi thơ', 2),
(18, 'Mua xuan ', 600000, 300000, 'muaxuan.jpg', 'Đây là một cuốn sách', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `listuser`
--

CREATE TABLE `listuser` (
  `idacc` int(10) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `account` varchar(30) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `address` varchar(300) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `idgender` int(2) NOT NULL,
  `idgroup` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `listuser`
--

INSERT INTO `listuser` (`idacc`, `name`, `account`, `password`, `email`, `address`, `idgender`, `idgroup`) VALUES
(16, 'Phạm Minh Nhật', 'minhnhatacc123', 'minhnhat2001100', 'minhnhat2001100@gmail.com', 'Cái Răng', 1, 1),
(17, 'Đỗ Ngọc Khôi Nguyên', 'Nguyênacc321', 'nguyen2022', 'nguyenkhoi2022@gmail.com', 'Vĩnh Long', 1, 2),
(18, 'Nguyễn Thành Nam', 'Namaccc08', 'namnguyen123', 'namnguyen321@gmail.com', 'Hậu Giang', 1, 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `groupproduct`
--
ALTER TABLE `groupproduct`
  ADD PRIMARY KEY (`idgroup`);

--
-- Chỉ mục cho bảng `groupuser`
--
ALTER TABLE `groupuser`
  ADD PRIMARY KEY (`idgroup`);

--
-- Chỉ mục cho bảng `listnews`
--
ALTER TABLE `listnews`
  ADD PRIMARY KEY (`idnews`);

--
-- Chỉ mục cho bảng `listproduct`
--
ALTER TABLE `listproduct`
  ADD PRIMARY KEY (`idpro`),
  ADD KEY `idgroup` (`idgroup`);

--
-- Chỉ mục cho bảng `listuser`
--
ALTER TABLE `listuser`
  ADD PRIMARY KEY (`idacc`),
  ADD KEY `idgroup` (`idgroup`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `groupproduct`
--
ALTER TABLE `groupproduct`
  MODIFY `idgroup` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `groupuser`
--
ALTER TABLE `groupuser`
  MODIFY `idgroup` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `listnews`
--
ALTER TABLE `listnews`
  MODIFY `idnews` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `listproduct`
--
ALTER TABLE `listproduct`
  MODIFY `idpro` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `listuser`
--
ALTER TABLE `listuser`
  MODIFY `idacc` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `listproduct`
--
ALTER TABLE `listproduct`
  ADD CONSTRAINT `listproduct_ibfk_1` FOREIGN KEY (`idgroup`) REFERENCES `groupproduct` (`idgroup`);

--
-- Các ràng buộc cho bảng `listuser`
--
ALTER TABLE `listuser`
  ADD CONSTRAINT `listuser_ibfk_1` FOREIGN KEY (`idgroup`) REFERENCES `groupuser` (`idgroup`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
