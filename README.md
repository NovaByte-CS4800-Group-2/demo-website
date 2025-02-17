# INSTRUCTIONS FOR INSTALLMENT

## FRONT END

### FIRST TIME CREATING

- npm create vite@4.1.0

  - You will get prompted to first enter the project name
  - Then select React
  - Then select TypeScript
  - cd into the created folder
  - nmp i

- Now you need to add dependincies within the project folder
  - npm i bootstrap@5.2.3
  - add "bootstrap": "^5.2.3" in the package.json file under 'dependencies'

### CLONING FROM GIT

After cloning a repository, you need to install the dependencies before running the project.

- mac/Linux:
  - sudo npm install
- windows:
  - npm install

This will read the package.json and package-lock.json files and install the necessary node_modules.

Now in order to run the server type: **npm run dev**
