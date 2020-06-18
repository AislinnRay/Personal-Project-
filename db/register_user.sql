insert into users (email, password)
values ($1, $2, $3)
returning *;

