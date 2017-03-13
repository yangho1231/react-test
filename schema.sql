CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password TEXT,
    registered timestamp without time zone
)

CREATE TABLE book