//Test schema to pull mypage with information
select u.user_id, b.book_id, u.username,b.title, b.pages from mypage as m
join users u on u.user_id = m.user_id
join book b on b.book_id = m.book_id
where u.user_id = 10;



CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password TEXT,
    admin boolean,
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