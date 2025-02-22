# CineTracker

CineTracker is a full-stack web application designed for movie and TV show enthusiasts who want to keep track of what they’ve watched and what they plan to watch. The platform allows users to search for movies and TV shows using the OMDb API, add titles to their personal library, and categorize them based on viewing status.

The goal of CineTracker is to provide an interactive and user-friendly experience for managing entertainment choices while implementing authentication to ensure personalized libraries for each user. Built using the PERN stack (PostgreSQL, Express, React, Node.js), the application features a robust back-end with secure authentication using JWT, a dynamic front-end with React, and a Sequelize ORM database integration for persistent storage.

## Table of Contents

- [Usage](#usage)
- [Mock Up](#mock-up)
- [Instructions](#instructions)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Additional Resources](#additional-resources)

## Usage

For Developers To start the application, run the following commands:

1. Install dependencies:
  ```
  npm install
  ```

2. Set up environment variables in a .env file

3. Run the application:
  ```
  npm run start:dev
  ```

## Mock-Up

The following animation shows the web application's appearance and functionality:

![Screenshot]()

## Instructions

1. Clone the repository:

```
git clone https://github.com/AdiPatel095/CineTracker.git
```

2. navigate to the project directory:

```
cd cinetracker
```

3. Install dependencies: 

```
npm install
```

4. Set up a PostgreSQL database and configure the .env file.

5. Run the application:
  ```
  npm run start:dev
  ```

## Key Features

* **User Authentication:** Secure login and signup using JWT authentication.

* **Search Functionality:** Fetch movies and TV shows from the OMDb API.

* **Personal Library:** Users can add and categorize movies and TV shows.

* **Dynamic UI:** React-based front-end with an intuitive design.

* **Persistent Storage:** PostgreSQL database with Sequelize ORM integration.

* **Responsive Design:** Works on desktop and mobile devices.

* **Theme Customization:** Users can switch between different theme colors.

## Technology Stack

* **Front-end:** React, TypeScript, CSS, Bootstrap

* **Back-end:** Node.js, Express.js

* **Database:** PostgreSQL, Sequelize ORM

* **Authentication:** JSON Web Tokens, bcrypt for password hashing

* **API Integration:** TMDb & OMDb API for Movie and TV Show data

* **Hosting & Deployment:** Render Deployment

## Additional Resources

GitHub Repository: [CineTracker](https://github.com/AdiPatel095/CineTracker)

Deployed Application: [Render Link]()

TMDb API Documentation: [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started)

OMDb API Documentation: [OMDb API](https://www.omdbapi.com/)
