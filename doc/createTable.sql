// 创建产品
CREATE TABLE IF NOT EXISTS `production` (
	`production_id` INT UNSIGNED AUTO_INCREMENT,
	`title` VARCHAR(100) NOT NULL,
	`month_sell` INT NOT NULL,
	`price` FLOAT NOT NULL,
	`img_id` VARCHAR(50) NOT NULL,
	PRIMARY KEY ( `production_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

// 地址
CREATE TABLE IF NOT EXISTS `address` (
	`address_id` INT UNSIGNED AUTO_INCREMENT,
	`address` VARCHAR(200) NOT NULL,
	`name` VARCHAR(100) NOT NULL,
	`sex` INT NOT NULL,
	`phone` VARCHAR(300) NOT NULL,
	PRIMARY KEY ( `address_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

// 订单 change
CREATE TABLE IF NOT EXISTS `order` (
	`order_id` INT UNSIGNED AUTO_INCREMENT,
	`desc` VARCHAR(100) NOT NULL,
	`count` INT NOT NULL,
	`money` FLOAT NOT NULL,
	`statue` INT NOT NULL,
	`address_id` INT NOT NULL,
	`create_time` DATE NOT NULL,
	PRIMARY KEY ( `order_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

// u_a_relative  用户与收货地址
CREATE TABLE IF NOT EXISTS `u_a_relative` (
	`open_id` VARCHAR(100) NOT NULL,
	`address_id` INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

// u_o_relative  change  用户与订单
CREATE TABLE IF NOT EXISTS `u_o_relative` (
	`open_id` VARCHAR(100) NOT NULL,
	`order_id` INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

// o_p_relative  订单与产品
CREATE TABLE IF NOT EXISTS `o_p_relative` (
	`order_id` INT NOT NULL,
	`production_id` INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


