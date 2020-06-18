INSERT INTO users_info (first_name
, last_name
, profile_pic
, user_id)
VALUES 
    ($1
    , $2
    , $3
    , $4
    )
returning *;



--instead of two insert statements https://stackoverflow.com/questions/20561254/insert-data-in-3-tables-at-a-time-using-postgres