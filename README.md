# Regitration Form

This project is a secure user registration form developed with [Nodejs](https://nodejs.org/en/download) and [Express](https://expressjs.com/). It captures user details, including username, email, and password, and securely stores them in a database after hashing the password with [bcrypt](https://www.npmjs.com/package/bcrypt). Environment variables, like database credentials, are managed with [dotenv](https://www.npmjs.com/package/dotenv) for secure configuration. Using [EJS](https://ejs.co/) for templating, the app renders dynamic HTML pages, and nodemon provides a smooth development experience by automatically updating the server on file changes. This project is a solid foundation for learning server-side development, data security, and user authentication.

## ⚙️ Requirements
+ [Npm](https://www.npmjs.com/package/download)
+ [mongoDB Compass](https://www.mongodb.com/try/download/shell)
+ [Express](https://expressjs.com/)
+ [Nodejs](https://nodejs.org/en/download)


##  🛠 Languages or Frameworks Used
### Steps to create project and install required module:

#### step 1: Start the project using the following command in your project folder:

+ `npm init`

###  📃 Package.json file look like 👇

![Screenshot from 2023-04-04 22-24-59](https://user-images.githubusercontent.com/128680209/229863193-8225570b-8c60-4eb8-82c2-3de9462d3552.png)

####  📥 Step 2: Install the required modules using following command:

+ `npm install express`
+ `npm install ejs`
+ `npm install mongoose`
+ `npm install -D nodemon`

#### Step 3: Create two folders inside the project directory using the following command:

+ mkdir models
+ mkdir views
+ mkdir controllers
+ mkdir db
+ mkdir routes


#### Step 4: Creates routes file inside project directory:

+ cd routes
  + touch web.js

#### Step 5: Create another file named app.js inside project directory:

+ touch app.js

#### Step 6: Navigate inside model folder and create a file student.js which will contain our Schema

+ cd model
    + User.js

#### Step 7: Navigate inside views folder and create the following ejs files:

+ cd  views
   
  + index.ejs
  + login.ejs
  + registration.ejs
  
+ cd partials
  + footer.ejs
  + header.ejs
  + navbar.ejs
  
#### step 8: Navigate inside constrollers folder and create a files which will contain our constrollers files:

+ cd controllers
  + userController.js
  
#### Step 9: Run the following command to ensure all modules are loaded:

+ `npm install`
  
## 🌟 Steps to run the application -
#### Step 1: Type the following command in terminal of your project directory:

+ `npm run dev` or
+ `npm start`

#### Step 2: Open your web browser and type the following address in the URL bar:

+ `(http://localhost:3000/` or 
+ `http://localhost:8000/)`
