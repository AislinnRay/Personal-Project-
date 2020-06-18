INSERT INTO users_plants (
    common_name,
    scientific_name,
    note,
    plant_img,
    water_interval
    )
VALUES 
    ($1,
    $2,
    $3,
    $4,
    $5
    )
returning *;