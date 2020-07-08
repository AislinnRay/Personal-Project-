select * from users
join users_info ui 
on users.user_id = ui.user_id
where email = $1;