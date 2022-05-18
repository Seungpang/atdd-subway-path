CREATE TABLE IF NOT EXISTS station
(
    id BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS line
(
    id BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    color VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS section
(
    id BIGINT AUTO_INCREMENT NOT NULL,
    line_id BIGINT NOT NULL,
    up_station_id BIGINT NOT NULL,
    down_station_id BIGINT NOT NULL,
    distance INT,
    PRIMARY KEY(id),
    FOREIGN KEY (up_station_id) REFERENCES STATION (id) ON DELETE CASCADE,
    FOREIGN KEY (down_station_id) REFERENCES STATION (id) ON DELETE CASCADE
);

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE line RESTART IDENTITY;
ALTER TABLE line ALTER COLUMN id RESTART WITH 1;

TRUNCATE TABLE station RESTART IDENTITY;
ALTER TABLE station ALTER COLUMN id RESTART WITH 1;

TRUNCATE TABLE section RESTART IDENTITY;
ALTER TABLE section ALTER COLUMN id RESTART WITH 1;

SET FOREIGN_KEY_CHECKS = 1;