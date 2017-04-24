SELECT user_id, username, email, password, to_char(registered, 'YYYY-MM-DD') AS joined 
FROM users 
ORDER BY username ASC;