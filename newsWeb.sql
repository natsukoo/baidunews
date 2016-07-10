/*
 Navicat MySQL Data Transfer

 Source Server         : connectTest
 Source Server Version : 50616
 Source Host           : localhost
 Source Database       : newsWeb

 Target Server Version : 50616
 File Encoding         : utf-8

 Date: 03/02/2016 16:02:28 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;
CREATE DATABASE IF NOT EXISTS `baidunews` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `newsWeb`;
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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `news`
-- ----------------------------
BEGIN;
INSERT INTO `news` VALUES ('4', '俄一架苏-25战机坠毁 一名飞行员遇难', 'tupianzhushi', '2016-03-07', 'ww', '资料图：俄苏-25战斗机（人民网记者 屈海齐 摄）\n\n人民网莫斯科2月29日电（记者 屈海齐）据俄媒体报道，莫斯科时间2月29日19点23分，俄一架苏-25战斗机在俄罗斯南部斯塔夫罗波尔边疆区坠毁，一名飞行员遇难。\n\n俄有关部门透露，莫斯科时间19点23分，一架进行例行飞行训练的苏-25战斗机在俄罗斯南部斯塔夫罗波尔边疆区一无人区域坠毁。该架战机在飞行时并未携带弹药，故未造成其他附带破坏，但一名飞行员不幸遇难。\n\n目前，俄国防部已就此事成立专门委员会，事故原因仍在调查之中。\n\n李曦 本文来源：人民网 责任编辑：李曦_NN2587\n分享到：\n已推荐 0\n \n关键词阅读： 苏-25 坠毁 飞行员\n俄战机在叙利亚挂弹出击 官兵住集装箱2016/02/29\n俄叙首次对IS实施联合空袭 叙战机为俄护航2016/01/16\n俄国防部证实俄战机坠毁 飞行员疑弹射逃生2015/11/24\n土耳其在边境击落一架俄罗斯军机2015/11/25\n俄军苏24战机在土叙边境坠毁2015/11/25\n延伸阅读\n哥伦比亚小飞机坠毁\n伊朗客机坠毁\n阿航坠毁客机\nMH17坠毁卫星图\n名校美女法律硕士\n网易首页军事首页\n下载网易新闻客户端338人参与\n聚合阅读\n天价鱼老板失联做梦吃猪蹄捐资助学求表扬奥巴马访问古巴三军仪仗队退伍军哥名校大美女法律硕士\n美女直播约会所APP下载PC客户端下载清新女孩唤醒快乐\n人美声甜 女神范1273\n人美声甜 女神范\n女神逗比热唱小苹果3914\n女神逗比热唱小苹果\n白雪公主歌艺惊人930\n白雪公主歌艺惊人\n气质丽人 唱响心扉494\n气质丽人 唱响心扉\n网友跟贴 42人跟贴 | 338人参与 |  手机发跟贴 | 注册\n文明上网，登录发贴\n懒小觉  我的跟贴 | 我的LOFTER | 退出 马上发表\n网友评论仅供其表达个人看法，并不表明网易立场。\n\n\n \n \n\n大家都爱看进入新闻频道\n女老外上海地铁逃票被抓 被教育并罚款84元\n人间 | 副市长安置的工作，她为何“不买账”\n财经 | 历次降准后股市表现一览\n科技 | 直播造人后 斗鱼又来\"更衣门\"\n体育 | 虎父无犬子!郝海东儿子加盟克罗地亚首都俱乐部\n娱乐 | 山下智久推首张个人精选碟 1月27日发行\n时尚 | 美男鉴定团：从欧阳震华怀念港剧美男\n哒哒 | 它逍遥了11年，最终还是逃不过一颗子弹(图)\n \n新闻推荐进入新闻频道\n武警部队统一更换新式标志服饰(图)', null), ('5', 'pdatedfdup女竟变成了这个样子…', 'tupian', '2016-03-08', 'dddddd', '记忆中隔壁是一个还算不错的妹子，那天 Z 来找我的时候恰巧碰到了，进屋后跑到我耳边说：“隔壁那个妹子你能不能要到微信，我觉得挺不错的呢~”\n\n这么三俗的场景竟然发生在我的身边，我说等两天我给你消息。\n\n入口\n\n既然是住在隔壁的年轻人，必然不可缺少的就是路由器，于是我打算从路由器当做入口开始这次旅程，将 wifi 打开后发现了三个信号，我首先选择这个名字非常独特的路由： ** LOVE *', null), ('43', 'zheshi测试测试', '123', '2016-03-03', '测试', '我只想知道到底能不能上传成功呢', null), ('44', '是你哈', 'pic', '2016-03-08', '我是谁', '记忆中的嗯那颗心', null), ('45', '我好', 'piddddd', '2016-03-26', '真的没那么多数据了', '好', null), ('46', '内容', '我是', '2016-03-18', '内容在内', '内容在哪里。虽然笃信爱你短小真的渐寒啊', null), ('47', '我是', '你', '2016-03-10', '多了', '附近开了多少借口酸辣粉啊叫风粉色', null);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `news2`
-- ----------------------------
BEGIN;
INSERT INTO `news2` VALUES ('1', '这是第二个表', '这是第二个表', '2016-02-24', '这是第二个表', 'woshineirong ', null), ('2', '这是第二个表', '这是第二个表', '2016-02-22', '这是第二个表', 'contejklrjsklfdj', null), ('3', '这是第二个表4444', '这是第二个表ww', '2016-02-01', '这是第二个表', 'neirongneirong', null), ('4', '这是第二个表33333', '这是第二个表', '2016-02-11', '这是第二个表', 'testtesitjkdf', null), ('5', '这是第二个表', '这是第二个表ddd', '2016-02-25', '这是第二个表', 'ceshiceshi', null), ('6', '这是第二个表1234', '这是第二个表dddddd', '2016-02-24', '', 'shujushujufidls', null), ('7', '第二个表新增功能过测试', '借记卡；打飞机就哭了', '2016-03-31', '了；就', '放到沙发但撒风', null), ('8', '在测试测试测试', '', '0000-00-00', '加快了健康', 'fdsfdsfd', null), ('9', '第二个表', '就哭了', '2016-03-18', '表', '2分的时刻了', null), ('10', 'inset', 'fdlsa', '2016-03-11', 'fjk', '反复反反复复', null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
