
// Import required packages
import express from "express";
import axios from "axios";

// Create Express application
const app = express();

// Set the server port
const PORT = 3000;

// Set EJS as our view engine
app.set("view engine", "ejs");

// Serve static CSS files
app.use(express.static("public"));

// Allowed joke categories
const categories = [
  "Any",
  "Programming",
  "Misc",
  "Pun",
  "Christmas"
];

// Main route
app.get("/", async (req, res) => {
  try {
    // Get selected category from the URL
    const selectedCategory = req.query.category || "Any";

    // Check that the category is valid
    const category = categories.includes(selectedCategory)
      ? selectedCategory
      : "Any";

    // Send GET request using Axios
    const response = await axios.get(
      `https://v2.jokeapi.dev/joke/${category}?safe-mode`
    );

    // Store the API response
    const jokeData = response.data;

    // Check whether the API returned an error
    if (jokeData.error) {
      throw new Error("The API could not provide a joke.");
    }

    // Display the joke using EJS
    res.render("index", {
      joke: jokeData,
      categories: categories,
      selectedCategory: category,
      error: null
    });

  } catch (error) {
    // Display an error message if something goes wrong
    console.error("API Error:", error.message);

    res.status(500).render("index", {
      joke: null,
      categories: categories,
      selectedCategory: "Any",
      error: "Sorry! We couldn't fetch a joke. Please try again."
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`JokeHub is running at http://localhost:${PORT}`);
});
