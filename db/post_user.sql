INSERT INTO users (username, email, password, admin, registered) VALUES ($1, $2, $3, $4, $5)
RETURNING *;