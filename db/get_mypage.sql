select u.user_id, b.book_id, u.username,b.title, b.pages, u.registered::date from mypage as m
join users u on u.user_id = m.user_id
join book b on b.book_id = m.book_id
where u.user_id = $1;