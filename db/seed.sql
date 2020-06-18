CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role VARCHAR(25)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password TEXT,
    role_id INT REFERENCES roles(role_id)
);

CREATE TABLE users_info (
    info_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    profile_pic TEXT,
	user_id int references users(user_id)
);

CREATE TABLE users_plants (
    plant_id SERIAL PRIMARY KEY,
    common_name VARCHAR(45),
    scientific_name VARCHAR(200),
    note TEXT,
    plant_img TEXT,
    water_interval INT,
    created_at TIMESTAMPTZ(2) DEFAULT now(),
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE plants_shop (
    plant_shop_id SERIAL PRIMARY KEY,
    common_name VARCHAR(45),
    scientific_name VARCHAR(200),
    note TEXT,
    plant_img TEXT
);


    • need to update if adding shopping cart functionality
    • need to update if adding location functionality