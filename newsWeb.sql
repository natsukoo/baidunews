/*
 Navicat Premium Data Transfer

 Source Server         : newsWeb
 Source Server Type    : MySQL
 Source Server Version : 50616
 Source Host           : localhost
 Source Database       : newsWeb

 Target Server Type    : MySQL
 Target Server Version : 50616
 File Encoding         : utf-8

 Date: 03/29/2016 16:18:48 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `newsID` int(11) NOT NULL /*!50606 COLUMN_FORMAT FIXED */ AUTO_INCREMENT COMMENT '自动计数',
  `newsTitle` varchar(100) NOT NULL,
  `newsPic` varchar(200) NOT NULL,
  `newsDate` date NOT NULL,
  `newsAuthor` varchar(100) NOT NULL,
  `newsContent` text NOT NULL,
  `newsComment` text,
  PRIMARY KEY (`newsID`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `news`
-- ----------------------------
BEGIN;
INSERT INTO `news` VALUES ('5', 'pdatedfdup女竟变成了这个样子…', 'tupian', '2016-03-08', 'dddddd', '记忆中隔壁是一个还算不错的妹子，那天 Z 来找我的时候恰巧碰到了，进屋后跑到我耳边说：“隔壁那个妹子你能不能要到微信，我觉得挺不错的呢~”\n\n这么三俗的场景竟然发生在我的身边，我说等两天我给你消息。\n\n入口\n\n既然是住在隔壁的年轻人，必然不可缺少的就是路由器，于是我打算从路由器当做入口开始这次旅程，将 wifi 打开后发现了三个信号，我首先选择这个名字非常独特的路由： ** LOVE *', null), ('64', '就哭了', 'dfv', '2016-03-08', '尽快了解', '就离开', null), ('66', '分开久了', '加快立法的', '2016-03-17', 'fdsaf', '', null), ('68', 'upjlkdfsa了撒；fd', '就哭了；方法', '2016-03-24', '飞机了', '', null), ('70', 'xinzeng&gt;nbsp;', 'jkl;&gt;nbsp;', '2016-03-02', 'jkl&gt;nbsp;', 'woshi&gt;nbsp;neirong&gt;nbsp;jkl;akjlfd;sjkalds;', null), ('71', 'node我是i&nbsp;u&nbsp;细节看过来；', '将考虑尽快了解', '2016-03-16', '就离开；&nbsp;', '放到空间啦；放大镜', null), ('72', 'fdsnodefff', 'hjk', '2016-03-15', 'k', 'fdsf', null), ('77', 'node', 'jkl', '2016-03-25', 'jkl', 'fds', null);
COMMIT;

-- ----------------------------
--  Table structure for `news2`
-- ----------------------------
DROP TABLE IF EXISTS `news2`;
CREATE TABLE `news2` (
  `newsID` int(10) NOT NULL AUTO_INCREMENT,
  `newsTitle` varchar(100) NOT NULL,
  `newsPic` varchar(200) NOT NULL,
  `newsDate` date NOT NULL,
  `newsAuthor` varchar(100) NOT NULL,
  `newsContent` text NOT NULL,
  `newsComment` text,
  PRIMARY KEY (`newsID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `news2`
-- ----------------------------
BEGIN;
INSERT INTO `news2` VALUES ('1', '这是第二个表', '这是第二个表', '2016-02-24', '这是第二个表', 'woshineirong ', null), ('2', '这是第二个表', '这是第二个表', '2016-02-22', '这是第二个表', 'contejklrjsklfdj', null), ('3', '这是第二个表4444', '这是第二个表ww', '2016-02-01', '这是第二个表', 'neirongneirong', null), ('4', '这是第二个表33333', '这是第二个表', '2016-02-11', '这是第二个表', 'testtesitjkdf', null), ('5', '这是第二个表', '这是第二个表ddd', '2016-02-25', '这是第二个表', 'ceshiceshi', null), ('6', '这是第二个表1234', '这是第二个表dddddd', '2016-02-24', '', 'shujushujufidls', null), ('7', '第二个表新增功能过测试', '借记卡；打飞机就哭了', '2016-03-31', '了；就', '放到沙发但撒风', null), ('8', '在测试测试测试', '', '0000-00-00', '加快了健康', 'fdsfdsfd', null), ('9', '第二个表', '就哭了', '2016-03-18', '表', '2分的时刻了', null), ('10', 'inset', 'fdlsa', '2016-03-11', 'fjk', '反复反反复复', null), ('11', 'woyaoshangjingxuen ', 'jkl; jkl;', '2016-03-03', 'jkl;jkl ;', 'fdafd', null);
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(16) NOT NULL /*!50606 COLUMN_FORMAT FIXED */ DEFAULT '(UNIQUE)',
  `userpwd` varchar(16) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('admin', '123', '1'), ('adminastrator', '12233', '2'), ('admineeee', '123', '3'), ('test', 'jfdklsa', '4'), ('xyz', '3fdsafds', '5'), ('xyfffffz', '3fdsafds', '6'), ('ddxyz', 'jkl;', '7');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
