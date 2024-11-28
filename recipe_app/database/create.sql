CREATE TABLE users(
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(60) NOT NULL
);

INSERT INTO users (username, password)
VALUES ('sarthak', 'admin'),
       ('admin1', 'admin2');