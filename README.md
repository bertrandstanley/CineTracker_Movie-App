# CineTracker - Movie App
![License](https://img.shields.io/badge/license-MIT-blue)

## Description
CineTracker is a full-stack web application designed for movie and TV show enthusiasts who want to track what they’ve watched and plan to watch. The platform allows users to search for movies and TV shows using the OMDb API, add titles to their personal library, and categorize them based on viewing status.

The goal of CineTracker is to offer an interactive and user-friendly experience for managing entertainment choices, with authentication ensuring personalized libraries for each user. Built using the PERN stack (PostgreSQL, Express, React, Node.js), the application features a robust back-end with secure JWT authentication, a dynamic React front-end, and Sequelize ORM integration for persistent storage.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Mock-Up](#mock-up)
- [Deployed URL](#deployed-url)
- [License](#license)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [The Software Developers](#the-software-developers)
- [Questions](#questions)

## Installation
This is a deployed website that does not require any installation to be viewed by a user.

For Developers, to start the application, run the following commands:
1. Install dependencies:
  ```
  npm install
  ```

2. Set up environment variables in a .env file

3. Run the application:
  ```
  npm run start:dev
  ```

## Usage
Once you open the website, on the Home page (Movies), click the YEAR tab to search for movies by year, and the GENRE tab to search by genre. The TV SHOWS page works the same way as the MOVIE page.

Once you find a movie or TV show you like, click on it to be redirected to the DETAILS page, where you can add it to your Watchlist or mark it as ALREADY WATCHED so you don’t have to watch it again. All saved movies and TV shows can be viewed on the LIBRARY page.

The final page is the CONTACT US page, where you can see all the developers who built this amazing app.

## Mock-Up
The following images show the web application's appearance and functionality:

<img width="1896" alt="Screenshot 2025-02-21 at 11 37 11 PM" src="https://github.com/user-attachments/assets/63f301f9-2b77-42e3-b2cc-e1a3223b0972" />

<img width="1897" alt="Screenshot 2025-02-21 at 11 37 31 PM" src="https://github.com/user-attachments/assets/7b67d05d-e75a-499f-9d50-ee33705b6cb6" />

<img width="1896" alt="Screenshot 2025-02-21 at 11 37 50 PM" src="https://github.com/user-attachments/assets/923b2f7c-7a0e-4238-8db9-56a74627a2fd" />

<img width="1904" alt="Screenshot 2025-02-21 at 11 41 11 PM" src="https://github.com/user-attachments/assets/091a7c9a-eacd-48f9-b03b-6f022034940c" />


## Deployed URL

[Click Here](https://cinetracker-vlws.onrender.com) to view the live version of the app. 

## License

This project is licensed under the MIT license.


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

* **API Integration:** TMDb API for Movie and TV Show data

* **Hosting & Deployment:** Render Deployment

## Contributing
If you want to contribute, feel free to fork the repository, create a feature branch, make your changes, and submit a pull request.

## The Software Developers
Below are the software developers who built this app:

Stanley Bertrand [GitHub](https://github.com/bertrandstanley)

Adi Patel [GitHub](https://github.com/AdiPatel095)

Gilmer Perez [GitHub](https://github.com/gilmerperez)

Freddy Laboy [GitHub](https://github.com/Fredbo561)
