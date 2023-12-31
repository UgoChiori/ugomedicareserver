import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
dotenv.config();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/maps/place", async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=hospital&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/api/maps/place/next", async (req, res) => {
  const { nextpage } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${nextpage}&key=${process.env.GOOGLE_MAPS_API_KEY}node`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/api/maps/place/details", async (req, res) => {
  const { place_id } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=address_components,business_status,formatted_address,icon,icon_mask_base_uri,delivery,dine_in,icon_background_color,name,photo,place_id,plus_code,type,url,utc_offset,vicinity,reviews,formatted_phone_number,opening_hours,website,curbside_pickup,reservable,serves_brunch,serves_dinner,serves_lunch,wheelchair_accessible_entrance&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// get photos from google maps
app.get("/api/maps/place/photo", async (req, res) => {
  const { photo_reference, pagetoken } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&pagetoken=${pagetoken}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", response.headers.get("content-type"));
    res.setHeader("Content-Length", response.headers.get("content-length"));
    // console.log(url);
    res.json(buffer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// api for email sharing
app.get("/api/maps/place/share", async (req, res) => {
  const { place_id } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=address_components,business_status,formatted_address,icon,icon_mask_base_uri,delivery,dine_in,icon_background_color,name,photo,place_id,plus_code,type,url,utc_offset,vicinity,reviews,formatted_phone_number,opening_hours,website,curbside_pickup,reservable,serves_brunch,serves_dinner,serves_lunch,wheelchair_accessible_entrance&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(url);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// api for hospital details saving
app.get("/api/maps/place/details/save", async (req, res) => {
  const { place_id } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=address_components,business_status,formatted_address,icon,icon_mask_base_uri,delivery,dine_in,icon_background_color,name,photo,place_id,plus_code,type,url,utc_offset,vicinity,reviews,formatted_phone_number,opening_hours,website,curbside_pickup,reservable,serves_brunch,serves_dinner,serves_lunch,wheelchair_accessible_entrance&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(url);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// API for saved hospital data
app.get("/api/maps/place/details/saved", async (req, res) => {
  const { place_id } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=address_components,business_status,formatted_address,icon,icon_mask_base_uri,delivery,dine_in,icon_background_color,name,photo,place_id,plus_code,type,url,utc_offset,vicinity,reviews,formatted_phone_number,opening_hours,website,curbside_pickup,reservable,serves_brunch,serves_dinner,serves_lunch,wheelchair_accessible_entrance&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(url);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});
