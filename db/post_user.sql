INSERT INTO users (username, email, password, registered) VALUES ($1, $2, $3, $4)
RETURNING *;