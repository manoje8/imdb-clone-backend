# IMDb clone - Backend

This backend project replicates core IMDb functionality, built using Node.js, Express, MongoDB, and Mongoose. It provides a RESTful API to manage movies, actors, and producers, as well as user authentication with token-based security.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing todos.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Jsonwebtoken**: JSON Web Token library for secure authentication.
- **Cors**: To allow cross-origin requests from the frontend.
- **nodemailer**: Library for sending email messages.
- **bcrypt**: Secure password hashing library.

## API Endpoints

The backend exposes the following REST API endpoints:

**User Management**

1. **Create User:** `(POST /auth/register)` - Creates a new user account.
2. **User Login:** `(POST /auth/login)` - Authenticates a user with email and password.
3. **Forgot Password:** `(POST /auth/forgot-password)` - Initiates password reset by sending an OTP (One-Time Password) to the user's registered email.
4. **Reset Password:** `(POST /auth/reset-password)` - Validates the OTP and email, then updates the user's password in the database using a secure hashing algorithm.

### Movies

- `POST /api/movies` - Create a new movie with actors and producer
- `GET /api/movies` - Retrieve a list of movies with actors and producer
- `GET /api/movies/:id` - Get a movie by ID with actors and producer
- `PUT /api/movies/:id` - Update a movie along with actors and producer
- `DELETE /api/movies/:id` - Delete a movie

### Actors

- `GET /api/actors/:id` - Get an actor by ID

### Producer

- `GET /api/producers/:id` - Get a producer by ID

### Installation and Setup

**Prerequisites:**

- Node.js
- npm (Node Package Manager)

**Instructions:**

1. Clone the repository:

```
git clone https://github.com/manoje8/imdb-clone-backend.git
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev  (OR)
npm start
```

The server will start on port `8000` by default. You can access the application routes in your browser.