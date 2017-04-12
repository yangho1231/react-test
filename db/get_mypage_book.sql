select u.user_id, b.book_id, u.username,b.title, b.pages, to_char(u.registered, 'YYYY-MM-DD') as joined from mypage as m
join users u on u.user_id = m.user_id
join book b on b.book_id = m.book_id
