import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
dotenv.config();

app.use(cors());

app.get("/api", async (req, res) => {
  res.send("Server is up and running");
});

app.get("/api/maps/places", async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=hospitals&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching" });
  }
});

app.get("/api/maps/directions", async (req, res) => {
  const { origin, destination } = req.query;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching" });
  }
});

app.get("/api/maps/geocode", async (req, res) => {
  const { address } = req.query;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching" });
  }
});

app.get("/api/maps/place/details", async (req, res) => {
  const { place_id } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching" });
  }
});

app.listen(process.env.PORT || 1500, () => {
    console.log(`Server is running on port ${process.env.PORT || 1500}`);
    });



