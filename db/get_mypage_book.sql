SELECT u.user_id, b.book_id, u.username,b.title, b.pages, to_char(u.registered, 'YYYY-MM-DD') AS joined FROM mypage AS m
JOIN users u ON u.user_id = m.user_id
JOIN book b ON b.book_id = m.book_id
WHERE u.user_id = $1;
