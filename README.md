# INSTRUCTIONS FOR INSTALLMENT

## Prerequisites

- Node.js

  - Make sure you have [Node.js](https://nodejs.org/) installed (Recommended: Latest LTS version)
  - node -v and npm -v to check if properly installed
  - node app_name.js to run in the terminal

- MYSQL

  - Make sure you have [MYSQL](https://www.mysql.com/) installed
  - mysql -u root -p
    - This command will prompt for your password and open mysql in the terminal
    - type **exit** to quit

---

## SETTING UP FRONT END

### Cloning from Git

After cloning a repository, you need to install the dependencies before running the project.

- mac/Linux:
  - sudo npm install
- windows:
  - npm install

This will read the package.json and package-lock.json files and install the necessary node_modules.

### If you're setting up the project for the first time, use Vite:

- npm create vite@4.1.0

  - You will get prompted to first enter the project name
  - Then select React
  - Then select TypeScript
  - cd into the created folder
  - nmp i

- Now you need to add dependincies within the project folder
  - npm i bootstrap@5.2.3
  - add "bootstrap": "^5.2.3" in the package.json file under 'dependencies'

Now in order to run the server type: **npm run dev**
control -> c to stop the server from running

---

## SETTING UP FRONT END

### Cloning from Git

After cloning the repo from git, there are a few steps you need to follow:

- install mysql2 ( mysql2 package is a drop-in replacement for mysql that aims to be faster and more efficient)
  - npm i mysyspl2
- install dotenv
  - npm i dotenv

This will install necessary dependencies and node_modules.

Now navigate to database.js and notice the process.env variables in the pool.
You will need to create your own values for those variables in a seperate file.

create an .env file, and write your information in this format

MYSQL_HOST = '127.0.0.1'<br/>
MYSQL_USER = 'root'<br/>
MYSQL_PASSWORD = **write your own password here**<br/>
MYSQL_DATABASE = 'notes_app'<br/>

<ins>These values may change later but follow this for now</ins>

### running the program

node [file_name].js

control -> c to stop the server from running

### using notes_app

As a sample database we will use notes_app. Open up mysql in the terminal (refer to prerequisites to see how)
and copy the code from schema.sql and paste. You can then type **show databases;** and if you see notes_app listed everything worked correctly!

### Thunder Client

Install the Thunder Client extension on vs code to test the code and make sure the right values are being retrived from the database!

You should now see a thunderbolt on the panel on the left side. Click new request and write
http://localhost:8080/[whatever extension]

\*\*the number after the colon depends on the port, in this case it is 8080

If you only retrieve from the database than you can select 'get' on the left side on the http
If you want to insert into the database then you can select 'post' on the left side of the http

Press send and you should recieve some output in the response section
