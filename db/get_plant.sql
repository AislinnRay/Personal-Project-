SELECT * FROM users_plants WHERE post_id = $1;


-- select p.post_id, p.title, p.img, p.content, u.username, u.profile_pic
-- from posts2 p
-- join users2 u on p.user_id = u.user_id
-- where post_id = $1;