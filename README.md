# Plantsiful App plantsiful.com

## Idea and User:
More people are discovering the joys of owning plants due to social media. #urbanjungle According to the National Gardening Association, houseplant sales in the U.S. have increase 50% to $1.7 billion in the last three years. This increase in plant ownership has also lead to an increase in preventable plant deaths. While it may sometimes seem that houseplants just love to die, the good news is that plants don't really die without a reason. In truth, houseplants are fairly predictable, depending on the species, and just a handful of reasons are responsible for the principle part of houseplant attrition. The top factors for houseplant casualties are too much water, poor drainage, not repotting, using old potting soil, not enough water, and/or fertilizer issues. 

To support new and experienced plant lovers alike, Plantsiful is a plant care management app designed with plant-parent convenience in mind. Now tracking plant biometrics is as enjoyable as the care itself, letting anyone be a triumphant plant owner. Navigation is made simple and intuitive by allowing users to navigate easily though out the app using a stationary navigation section with icons. 


## Features:
<img src = "./images/.png">

### Current features include:
Users are able to sign in or register. Users will receive an email notification confirming their registration.
App includes the capability to create unique plant profiles with watering schedules. Plant profiles include an image of the plant, common name of plant, scientific name of plant, special instructions, and customizable watering schedule. 
App keeps track of each plant's watering schedule and provides notifications to water right to the user's phone. 
Plants are organized by when they need to be watered which includes care instruction notes for easy reference.

### Future features will include:
- Updated plant profile that includes plant's location, acquisition date, fertilizer specifics and schedule, rotation log, photo gallery with timestamps and comments to track growth/damage/disease.
- Plants will be searchable by common name, scientific name, location.
- Users will have access to an in-app plant store where they can purchase new varieties of plants to add to their collection. Display plants from Trefle (global plant API).
- Plant growth will be charted over time using input of measurements and unique plant biometrics. 
- Virtual house map with interactive location of each plant.


## Functionality/Technologies utilized:
NodeMailer
Sass
Chart.js
Hosting
Hooks
D3

## App Colors:
<img src = "./images/colorHex.png">


## View/ Controller:
### Wireframe (View)
<img src = "./images/WireFrame.png">
<img src = "./images/WireFrame with Redux.png">

### Landing.js (View)
- This will be the first screen displayed before a user logs in. It will show a navbar with five icons for view pages, "Features, About, Contact, Register, SignIn". In the center view it will show a nice quote to show the importance of this site with a Sign In button or a register button below. Next, it will have a carousel that will move through the navbar giving a brief explanation into the next clickable view. Then lastly a footer with social media pages and copyright. These last two features along with the navbar will persist in the log in and register components.
<img src = "./images/Landing.png">

### SignIn.js (View) 
- This is the Sign in page where the user will be able to Sign into their already existing account. It will handle authentication. Below is a route to the register page if the user needs to register. 
<img src = "./images/SignIn.png"> 

### Register.js (View)
- This is the Register page where the user will be able to register a new account and then be redirected back to the login component. This component will have similar functionality as SignIn.
<img src = "./images/Register.png">

### Collection.js (View)
- This will be the first screen when a user is successfully logged in. It will show a navbar with five icons for view pages, "Collection, Add, Plant Metrics, Shop, Profile." A list of plant profiles will be displayed centered on the screen. The navbar will persist no matter what view user is in.

### Profile.js (View)
- If the user clicks on profile from the Collection.js (or other view),  they will be directed to the profile page where they will be able to view their profile information: username, and profile pic, and button to log out.

- In the example the user 
<img src = "./images/Profile.png">

### UpdateProfile.js (View)
- The user will access this component view by clicking the profile image in the top right corner once signed in. Here the user will be able to update their username and profile picture after filling in the required field and clicking "Update" or to cancel it by clicking "Cancel." 
<img src = "./images/UpdateProfile.png">

### Features.js (View)
-  This component will display the main features of the application and reason for it being made. This component will aid the user by providing an understanding of the solutions this app provides and influence them to use the app.
<img src = "./images/Features.png">

### About.js (View)
- This component will just show the user about Plantsiful and how it came to be.
<img src = "./images/About.png">

### Contact.js (View)
- The contact component will be useful in that it has the potential to allow users to send me emails regarding the app/website’s functionality. If bugs are detected or errors occur on the site this will be helpful in allowing the user to provide some simple feedback. 
<img src = "./images/Contact.png">


## Endpoints
URL, REST methods, and a sample of the data that is being sent or received for every endpoint in the application are listed here.

### Auth Endpoints
- POST: push a new user to the database. app.post(`/auth/register`)
- POST: push an existing user to the database. app.post(`/auth/login`)
- GET: this will get the user from the database to login in. app.get(`/api/user`)
- DELETE: Can logout of the website. app.delete(`/api/logout`)
- PUT: Can update the username or profile picture. app.put(`/api/user`)

### User Plant Collection Endpoints 
- GET: This will get all user specific plants because we are already logged in. app.get(`/api/plants`)
- POST: will add new plant to the list of plants in the User's collection. app.post(`/api/plants`)
- DELETE: Can delete plant from the list of plants in the User's collection. app.delete(`/api/plants/:id`)
- PUT: Can edit plant in the list of plants. app.put(`/api/plants/:id`)

#### Store Endpoints
- GET: This will get 10 random plants from the plant API. app.get(`https://trefle.io/api/plants/{id}`)

#### Chart Endpoints 
- - GET: This will get the chart? app.get(`/api/plants`)
- POST: The line chart will update when plant biometrics are added to the database. app.post(`/api/plants`)


## Schema (Database Design):
	• roles table
		○ role_id serial primary key
		○ name varchar(25)
	• users table
		○ user_id serial primary key
		○ email varchar(255)
		○ hash text
		○ role_id int references roles(roles_id)
	• users_info table
		○ info_id serial primary key
		○ first_name text
		○ last_name text
		○ user_id int references users(user_id)
	• user_plants table
		○ plant_id serial primary key 
		○ common_name text
		○ scientific_name text
		○ note text
		○ image varchar(1000)
		○ water_interval int 
		○ user_id int reference users(user_id)
        ○ timestamp of water - interval of how many minutes between watering
    • plants table
		○ id serial primary key 
		○ common_name text
		○ scientific_name text
		○ note text
		○ image varchar(1000) -->
    • need to update if adding shopping cart functionality
    • need to update if adding location functionality

