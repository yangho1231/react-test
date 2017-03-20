CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password TEXT,
    registered timestamp without time zone
)

CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title TEXT,
    pages INT,
    images TEXT
)

create table mypage (
	user_id int references users(user_id), 
    book_id int references book(book_id)    
)