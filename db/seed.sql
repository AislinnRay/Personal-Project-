CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role VARCHAR(25)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password TEXT,
    phone VARCHAR(10),
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
    plant_img VARCHAR(1000),
    water_interval INT,
    room VARCHAR(45),
    created_at TIMESTAMPTZ(2) DEFAULT now(),
    user_id INT REFERENCES users(user_id)
);

-- CREATE TABLE plants_shop (
--     plant_shop_id SERIAL PRIMARY KEY,
--     common_name VARCHAR(45),
--     scientific_name VARCHAR(200),
--     note TEXT,
--     plant_img TEXT
-- );


    • need to update if adding shopping cart functionality
    • need to update if adding location functionality

-- alter table users_plants
-- alter column plant_img type VARCHAR(1000);


--Add plants   
INSERT INTO users_plants (
    common_name,
    scientific_name,
    note,
    plant_img,
    water_interval,
    room,
    user_id
    )
VALUES 
    ('Devils Ivy'
    , 'Epipremnum aureum'
    , 'Water once a week. Likes bright light for more growth.'
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbhiKX2t5BJIMCc6vLaa0GtFulk52hVQh7Rw&usqp=CAU'
    , 7
    , 'Living Room'
    , 1
    ),
    ('Snake Plant'
    , 'Dracaena trifasciata'
    , 'Water every two weeks.'
    , 'https://secure.img1-fg.wfcdn.com/im/33278590/compr-r85/8064/80643595/romam-snake-plant-in-planter.jpg'
    , 14
    , 'Living Room'
    , 1
    ),
    ('Spider Plant'
    , 'Chlorophytum comosum'
    , 'Water every two weeks.'
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqHdHjbYPPzAoPvuFPyi3wIdTgJGF75CKVZQ&usqp=CAU'
    , 14
    , 'Den'
    , 1
    ),
    ('Christmas Cactus'
    , 'Schlumbergera truncata'
    , 'Water every two weeks.'
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG4IdYG_6EClofvi24CmpMY8SPSXKwFExsXQ&usqp=CAU'
    , 14
    , 'Bathroom'
    , 1
    ),
    ('Umbrella Tree'
    , 'Schefflera S. actinophylla'
    , 'Water every two weeks.'
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsEtro32VyRC3oFvxiE53Q5TjTCm9CMLU64Q&usqp=CAU'
    , 14
    , 'Dining Room'
    , 1
    ),
    ('Hens and Chicks'
    , 'Sempervivum tectorum'
    , 'Water once a month.'
    , 'https://cdn.pixabay.com/photo/2017/08/25/01/24/cacti-2678917__480.jpg'
    , 30
    , 'Kitchen'
    , 1
    ),
    ('Mosaic Plant'
    , 'Fittonia argyroneura'
    , 'Water once a month.'
    , 'https://cdn.pixabay.com/photo/2017/11/06/23/25/fittonia-2925192__480.jpg'
    , 30
    , 'Bathroom'
    , 1
    ),
      ('Tiger Tooth Aloe'
    , 'Aloe juvenna'
    , 'Water once a week.'
    , 'https://cdn.pixabay.com/photo/2018/01/05/12/22/leaf-3062792__480.jpg'
    , 7
    , 'Kitchen'
    , 1
    ),
      ('Pink Passion Dracaena'
    , 'Dracaena marginata'
    , 'Water once a week.'
    , 'https://cdn.pixabay.com/photo/2015/05/31/10/56/plant-791052__480.jpg'
    , 7
    , 'Kitchen'
    , 1
    ),
    ('Staghorn Fern'
    , 'Platycerium bifurcatum'
    , 'Soak thoroughly once a week.'
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOL2J6m5uBYCgbtIvxO-ZbRquX1YaQkrnVtg&usqp=CAU'
    , 7
    , 'Bathroom'
    , 1
    )
returning *;

--nodemailer deleting email
delete from users_info where first_name = 'Ais';
delete from users_plants where plant_id = 
delete from users where email = 'aislinn.ray.m@gmail.com';

drop table users_info;
drop table users_plants;
drop table users;



