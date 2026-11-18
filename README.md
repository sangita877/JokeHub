# JokeHub – Random Joke Generator 

## 1. Project Overview

JokeHub is a Random Joke Generator website developed using Node.js, Express.js, Axios, and EJS.

The website connects to a public API called **JokeAPI** to retrieve random jokes and display them to users in a simple and user-friendly interface.

Users can select different joke categories and generate random jokes. The application supports both single-part jokes and two-part jokes.

## 2. Project Objectives

The main objectives of this project are:

- To understand how public APIs work.
- To learn how to integrate APIs into a Node.js application.
- To use Express.js to create a web server and handle HTTP requests.
- To use Axios to retrieve data from an external API.
- To use EJS to display dynamic data.
- To practice error handling in API integration.
- To present API data through a user-friendly website.

## 3. Features

JokeHub includes the following features:

- **Random Joke Generator:** Retrieves random jokes from JokeAPI.
- **Joke Categories:** Allows users to select different categories, including Any, Programming, Misc, Pun, and Christmas.
- **Single-Part Jokes:** Displays jokes containing a single text.
- **Two-Part Jokes:** Displays jokes with a setup and a delivery.
- **Get Another Joke:** Allows users to retrieve another joke.
- **Error Handling:** Displays an error message when the API request fails.
- **Responsive Design:** Provides a simple layout for desktop and mobile screens.
- **Image Display:** Includes a joke-related image on the homepage.

## 4. Technologies Used

The following technologies and packages were used to develop this project:

| Technology | Purpose |
|---|---|
| HTML | Creates the structure of the website. |
| CSS | Styles the website and makes it responsive. |
| JavaScript | Handles the application logic. |
| Node.js | Runs JavaScript on the server. |
| Express.js | Creates the web server and handles routes. |
| Axios | Sends HTTP GET requests to JokeAPI. |
| EJS | Displays dynamic API data in HTML. |
| JokeAPI | Provides random joke data. |
| Nodemon | Automatically restarts the server during development. |

## 5. API Information

**API Name:** JokeAPI

**API Website:** https://v2.jokeapi.dev/

**API Documentation:** https://sv443.net/jokeapi/v2/

**HTTP Method:** GET

**API Endpoint:**

https://v2.jokeapi.dev/joke/Any?safe-mode

The application uses Axios to send GET requests to JokeAPI.

The API returns joke information in JSON format. The application receives the response and displays the information using EJS.

The application uses the safe-mode option to request jokes intended for a general audience.

## 6. Project Structure

The project contains the following files and folders:

```text
JokeHub/
│
├── node_modules/
│
├── public/
│   ├── images/
│   │   └── joke.png
│   │
│   └── styles.css
│
├── views/
│   └── index.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 7. Installation and Setup

Follow these steps to download and run the project on your computer.

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to the Project Folder

```bash
cd JokeHub
```

### Step 3: Install Dependencies

```bash
npm install
```

This command installs all the required packages listed in package.json.

### Step 4: Start the Development Server

```bash
npm run dev
```

Nodemon automatically restarts the server whenever changes are made to the application.

Alternatively, you can start the server using:

```bash
npm start
```

### Step 5: Open the Website

After the server starts successfully, open your browser and visit:

```text
http://localhost:3000
```

The JokeHub homepage will appear in your browser.

## 8. How the Application Works

The application follows these steps:

1. The user opens the JokeHub homepage.
2. The user selects a joke category from the dropdown menu.
3. The browser sends an HTTP GET request to the Express server.
4. Express receives the request and uses Axios to contact JokeAPI.
5. JokeAPI returns joke information in JSON format.
6. The application processes the API response.
7. EJS displays the retrieved joke on the homepage.
8. If an error occurs, the application displays an appropriate error message.

## 9. API Integration Using Axios

Axios is used in app.js to retrieve joke data from the external API.

Example:

```javascript
const response = await axios.get(
  `https://v2.jokeapi.dev/joke/${category}?safe-mode`
);
```

The API response is stored in a variable:

```javascript
const jokeData = response.data;
```

The retrieved data is then passed to the EJS template using:

```javascript
res.render("index", {
  joke: jokeData,
  categories: categories,
  selectedCategory: category,
  error: null
});
```

This allows the website to display the joke dynamically.

## 10. Error Handling

The application uses a try...catch block to handle errors during API requests.

If the API request fails or returns an error, the application logs the error in the terminal and displays a user-friendly message on the website.

Example error message:

"Sorry! We couldn't fetch a joke. Please try again."

This helps prevent the application from displaying an unhandled error to users.

## 11. GitHub Repository

The project is shared through GitHub for version control and code sharing.

Repository: https://github.com/sangita877/JokeHub

## 12. Conclusion

JokeHub is a beginner-friendly project developed to gain practical experience with Node.js, Express.js, Axios, EJS, and public API integration.

Through this project, I learned how to send HTTP GET requests, retrieve JSON data from an external API, process API responses, display dynamic content using EJS, and handle errors.

This project helped me understand how frontend and backend technologies communicate with external APIs to create an interactive web application.

---

**Project Name:** JokeHub – Random Joke Generator

**API Used:** JokeAPI

**Developed Using:** Node.js, Express.js, Axios, EJS, HTML, and CSS.