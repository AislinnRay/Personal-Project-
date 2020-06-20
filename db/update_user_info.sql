UPDATE users_info SET first_name = $2, last_name = $3, profile_pic = $4 WHERE user_id = $1
--returning *
;