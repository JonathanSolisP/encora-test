# encora-test

Backend service for a blog app developed using Express and postgres.

## Packages

- [Node.js](https://nodejs.org/) v20.11.1
- [PostgreSQL](https://www.postgresql.org/) v16.2
- [Firebase](https://firebase.google.com/)

## Installation

- Clone the project
- Create a Firebase project for storaging images that you might upload
- Install the require packages by running
    ```sh
    npm i
    ```
- Install ts-node
    ```sh
    npm i -g ts-node
    ```
- create a `.env` file and add the following variables:
    - DB_URL=POSTGRESS_CONNECTION_STRING
    - SERVER_PORT=PREFERED_PORT_FOR_SERVER
    - FIREBASE_API_KEY
    - FIREBASE_AUTH_DOMAIN
    - FIREBASE_PROJECT_ID
    - FIREBASE_STORAGE_BUCKET
    - FIREBASE_MESSAGING_SENDER_ID
    - FIREBASE_APP_ID
    - FIREBASE_MEASUREMENT_ID
- Run `npm run start` for normal execution or `npm run dev` for nodemon execution

## Tech

- NodeJS
- ExpressJS
- Typescript
- PostgreSQL
- TSLint
- Nodemon
- Dotenv
- Firebase

## Examples

![image](https://github.com/JonathanSolisP/encora-test/assets/11906671/5657462f-8d54-46ec-a2ed-c710bec19c90)
![image](https://github.com/JonathanSolisP/encora-test/assets/11906671/496ccb80-906f-4c05-8bd2-7c2c1d912488)
![image](https://github.com/JonathanSolisP/encora-test/assets/11906671/adf02b06-2036-4af5-9bfd-3bc1f08d9eaf)
![image](https://github.com/JonathanSolisP/encora-test/assets/11906671/124863f3-44f5-4614-8923-76936538afbd)
![image](https://github.com/JonathanSolisP/encora-test/assets/11906671/2b9533af-afc4-4e55-ab07-b5875dc34cd6)

