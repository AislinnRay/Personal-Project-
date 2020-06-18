UPDATE users_plants SET common_name = $2, scientific_name = $3, note = $4, plant_image $5 WHERE plant_id = $1
returning *;

--could maybe add pictures to a gallery by having another component and database that this joins and references?