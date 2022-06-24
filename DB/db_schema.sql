DROP DATABASE resta;
CREATE DATABASE resta;

\c resta;
-- Table: Users --
CREATE TABLE users (
  uid VARCHAR(30),
  displayName VARCHAR(30),
  email VARCHAR(40),
  photoURL varchar(150)
);

-- Table: User-Like relationship --
CREATE TABLE users_likes (
  user_id Int,
  resta_id Int
);

CREATE INDEX luser_id ON users_likes(user_id);
CREATE INDEX lresta_id ON users_likes(resta_id);

-- Table: Dates --
CREATE TABLE dates (
  date_id SERIAL PRIMARY KEY,
  ini_user_id VARCHAR(40),
  displayName VARCHAR(40),
  photoURL VARCHAR(140),
  resta_id VARCHAR(40),
  name VARCHAR(40),
  datetime TIMESTAMP,
  size INT DEFAULT 2,
  cur INT DEFAULT 1,
  info TEXT,
  vacancy BOOLEAN DEFAULT TRUE
);

CREATE INDEX dini_id ON dates(ini_user_id);
CREATE INDEX dresta_id ON dates(resta_id);

-- Table: User-Date relationship --
CREATE TABLE user_dates (
  date_id INT,
  user_id INT
);

CREATE INDEX duser_id ON user_dates(user_id);
CREATE INDEX ddate_id ON user_dates(date_id);
