# encora-test

Backend service for a blog app developed using Express and postgres.

## Packages

- [Node.js](https://nodejs.org/) v20.11.1
- [PostgreSQL](https://www.postgresql.org/) v16.2

## Installation

- Clone the project
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
- Run `npm run start` for normal execution or `npm run dev` for nodemon execution

## Tech

- NodeJS
- ExpressJS
- Typescript
- PostgreSQL
- TSLint
- Nodemon
- Dotenv