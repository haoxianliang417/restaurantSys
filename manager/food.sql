/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : food

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-23 20:25:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `useId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `integration` int(11) DEFAULT NULL,
  PRIMARY KEY (`useId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('1', 'admin', 'admin', '1000');

-- ----------------------------
-- Table structure for bill
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill` (
  `orderId` int(11) NOT NULL,
  `orderMenuNum` int(11) NOT NULL,
  `detail` varchar(500) NOT NULL,
  `state` int(11) NOT NULL,
  `time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bill
-- ----------------------------

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `menuId` int(11) NOT NULL AUTO_INCREMENT,
  `menuName` varchar(255) NOT NULL,
  `menuPrice` float(100,2) unsigned NOT NULL,
  `type` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`menuId`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '白灼菜心', '18.00', '粤菜', '[1.jpg,1_1.jpg]', '粤菜崇尚清而不淡，常见的“白灼”，可以突出清鲜之味，少油健康。');
INSERT INTO `menu` VALUES ('2', '荷香南瓜蒸排骨', '25.00', '粤菜', '[2.jpg,2_1.jpg]', '蒸笼特殊的结构能够使水气在蒸发过程中很好的触碰食材，蒸熟后的食材依然可以保持纯正的原味。荷叶和蒸笼可谓绝妙的搭配，清香解腻，消暑利湿。猪小排和南瓜，味蕾之上，便是天作之合，便是唇齿留香。');
INSERT INTO `menu` VALUES ('3', '砂锅盐焗鸡', '50.00', '粤菜', '[3.jpg,3_1.jpg]', '盐焗鸡是广东的一道特色传统佳肴，也是广东本地客家招牌菜式之一，属于粤菜系 - 客家菜');
INSERT INTO `menu` VALUES ('4', '清蒸珍珠斑', '48.00', '粤菜', '[4.jpg,4_1.jpg]', '清蒸鱼在粤菜里的地位不输白切鸡，鱼又有“余”的寓意，尤其是过年不可或缺的吉祥食物。');
INSERT INTO `menu` VALUES ('5', '菠萝咕咾肉', '45.00', '粤菜', '[5.jpg,5_1.jpg]', '菠萝咕咾肉是一道广东传统名菜，属于粤菜系。此菜口感清新解腻，酸甜的味道能增进食欲，颜色也非常艳丽，很讨孩子喜欢。');
INSERT INTO `menu` VALUES ('6', '白切鸡', '60.00', '粤菜', '[6.jpg,6_1.jpg]', '成品皮滑肉嫩，原汁原味，吃的时候可以搭上自己喜欢的蘸汁，入口香滑，非常的鲜美可口。');
INSERT INTO `menu` VALUES ('7', '生啫滑鸡煲', '59.00', '粤菜', '[7.jpg,7_1.jpg]', '啫啫煲就是生鲜的食材直接放进烧的极热的砂煲里炒制，砂锅的储热功能极强，能瞬间将食材表面烹熟，快速锁住水分，再配以葱姜蒜和各种酱汁爆香，出锅淋少许黄酒爆燃，香气火爆，口感极脆嫩');
INSERT INTO `menu` VALUES ('8', '客家酿豆腐', '26.00', '粤菜', '[8.jpg,8_1.jpg]', '用肉糜、红葱头、姜末和调味料混合，多用来酿油豆腐或水豆腐。');
INSERT INTO `menu` VALUES ('9', '金银蒜蒸鲜鲍', '66.00', '粤菜', '[9.jpg,9_1.jpg]', '蒜茸蒸鲜鲍，用蒜茸来蒸海鲜是广东人特别重要的一种烹调方式，既能去掉一部分海鲜的腥味，又不会压制海鲜的鲜香之气，特别是用了炸蒜茸来配和鲜蒜茸，味道更是蒜香浓郁，然后海鲜的鲜气从蒜茸中挣扎而出，慢慢占据主导');
INSERT INTO `menu` VALUES ('10', '茶树菇炖排骨', '40.00', '粤菜', '[10.jpg,10_1.jpg]', '名目，降糖，抗衰老，润肺，防癌，养肾，助消化');
INSERT INTO `menu` VALUES ('11', '水煮肉片', '50.00', '川菜', '[11.jpg,11_1.jpg]', '水煮肉片为正宗的川菜，因肉片未经划油，以水煮熟故名水煮肉片');
INSERT INTO `menu` VALUES ('12', '辣子鸡', '28.00', '川菜', '[12.jpg,12_1.jpg]', '抵抗力，养肾，美容养颜，降压，驱蛔虫');
INSERT INTO `menu` VALUES ('13', '蚂蚁上树', '40.00', '川菜', '[13.jpg,13_1.jpg]', '蚂蚁上树是川菜馆热销的一道菜，蚂蚁上树别号肉末粉条，是四川及重庆地域的特色激进名菜之一，属于川菜系。因肉末贴在粉丝上，形似蚂蚁爬在树枝上，是以得名。');
INSERT INTO `menu` VALUES ('14', '宫保鸡丁', '35.00', '川菜', '[14.jpg,14_1.jpg]', '抵抗力，养肾，消食');
INSERT INTO `menu` VALUES ('15', '酸菜鱼', '45.00', '川菜', '[15.jpg,15_1.jpg]', '助消化，消食，不该，缓解更年期，预防疾病，有益大脑');
INSERT INTO `menu` VALUES ('16', '回锅肉', '49.00', '川菜', '[16.jpg,16_1.jpg]', '缓解疲劳，消热去火，散瘀止疼，心血管病，消食，助消化');
INSERT INTO `menu` VALUES ('17', '麻婆豆腐', '39.00', '川菜', '[17.jpg,17_1.jpg]', '菜色泽淡黄，豆腐软嫩而有光泽、其味麻、辣、酥、香、嫩、鲜、烫。趁热吃味道更佳，花椒面也扑鼻。');
INSERT INTO `menu` VALUES ('18', '鱼香肉丝', '30.00', '川菜', '[18.jpg,18_1.jpg]', '肉丝软嫩、配料脆嫩。色泽红润，红白黑相间。味觉特点：咸甜酸辣兼备，葱姜蒜味浓郁。');
INSERT INTO `menu` VALUES ('19', '火爆腰花', '38.00', '川菜', '[19.jpg,19_1.jpg]', '抵抗力，减肥，骨质疏松，美容养颜，防癌、抗癌，预防感冒');
INSERT INTO `menu` VALUES ('20', '酱烧牛肉', '66.66', '川菜', '[20.jpg,20_1.jpg]', '强身健体，抵抗力，贫血，抗衰老，健胃，预防结石，糖尿病');

-- ----------------------------
-- Table structure for menustate
-- ----------------------------
DROP TABLE IF EXISTS `menustate`;
CREATE TABLE `menustate` (
  `id` int(11) NOT NULL,
  `
materialId` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menustate
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
