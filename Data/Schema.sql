DROP DATABASE resta;
CREATE DATABASE resta;

\c resta;
-- Table: Users --
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(40)
);

-- Table: User-Like relationship --
CREATE TABLE users_likes (
  user_id Number,
  resta_id Number
);

CREATE INDEX luser_id ON users_likes(user_id);
CREATE INDEX lresta_id ON users_likes(resta_id);

-- Table: Dates --
CREATE TABLE dates (
  date_id SERIAL PRIMARY KEY,
  ini_user INT,
  resta_id INT,
  time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ntotal INT,
  ncur INT,
  full BOOLEAN DEFAULT FALSE
);

CREATE INDEX dini_id ON dates(ini_id);
CREATE INDEX dresta_id ON dates(resta_id);

-- Table: User-Date relationship --
CREATE TABLE user_dates (
  date_id INT,
  user_id INT
);

CREATE INDEX duser_id ON user_dates(user_id);
CREATE INDEX ddate_id ON user_dates(date_id);
