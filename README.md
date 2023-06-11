# Starting the backend

- Run the command `cd upload-file-backend` and then run `npm i` which would install all the necessary packages
- Create a database with the name file_upload
- Create a .env file and add a variable with the name
- DATABASE_URL="postgresql://postgres:root@localhost:5432/file_upload?schema=public". (Your database credentials maybe different)
- Run the prisma command `npx prisma migrate dev` to populate your database with the tables
- Run the command `npm run start:dev` to initialize the server

# Starting the frontend

- Run the command`cd upload-file-frontend` and then run `npm i` to install all the dependencies
- Create an .env file and add the backend url, the url on which your backend service is running 
- BACKEND_BASE_URL='http://localhost:3000/'
- Run the command `npm run start` to start the react application
