SELECT * FROM users_plants WHERE user_id = $1 ORDER BY plant_id Asc;

-- select p.post_id, p.title, p.img, p.content, u.username, u.profile_pic, u.user_id
-- from posts2 p
-- join users2 u on p.user_id = u.user_id;