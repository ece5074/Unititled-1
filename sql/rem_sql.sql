CREATE TABLE USERS(
    USER_NO         INT(10) AUTO_INCREMENT,
    USER_ID         CHAR(20)    NOT NULL    UNIQUE,
    USER_PW         CHAR(20)    NOT NULL,
    NICKNAME        CHAR(20)    NOT NULL    UNIQUE,
    EMAIL           CHAR(50)    NOT NULL,
    REG_DATE        DATE            NOT NULL,
    LAST_LOGIN      DATE		DEFAULT NULL,
    CONSTRAINT pk_user PRIMARY KEY (user_no)
);

INSERT INTO users (USER_ID, USER_PW, NICKNAME, EMAIL, REG_DATE, LAST_LOGIN)
VALUES ('admin', 'admin', 'ADMINISTRATOR', 'test@test.ts', now(), null);