import express from "express";
import { listings } from "./listings.js";

const app = express();
const PORT = 3000;

// Welcome page
app.get("/", (req, res) => {
  res.send("Welcome to EBD BnB!");
});

// Get all listings
app.get("/api/listings", (req, res) => {
  res.json(listings);
});

// Get one listing by ID
app.get("/api/listings/:id", (req, res) => {
  const id = Number(req.params.id);
  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }

  res.json(listing);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});