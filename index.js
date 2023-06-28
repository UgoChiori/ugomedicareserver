// import express from "express";
// import * as dotenv from "dotenv";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// dotenv.config();

// app.use(cors());

// app.get("/api", async (req, res) => {
//   res.send("Server is up and running");
// });

// app.get("/api/maps/places", async (req, res) => {
//   const { latitude, longitude, radius } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=hospitals&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Error fetching" });
//   }
// });

// app.get("/api/maps/directions", async (req, res) => {
//   const { origin, destination } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Error fetching" });
//   }
// });

// app.get("/api/maps/geocode", async (req, res) => {
//   const { address } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Error fetching" });
//   }
// });

// app.get("/api/maps/place/details", async (req, res) => {
//   const { place_id } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Error fetching" });
//   }
// });

// app.listen(process.env.PORT || 1500, () => {
//     console.log(`Server is running on port ${process.env.PORT || 1500}`);
//     });
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// dotenv.config();

// app.use(cors());

// app.get("/api", (req, res) => {
//   res.send("Server is up and running");
// });

// app.get("/api/maps/places", async (req, res) => {
//   const { latitude, longitude, radius } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=hospitals&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       res.json(data);
//     } else {
//       throw new Error("Error fetching nearby places");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching nearby places" });
//   }
// });

// app.get("/api/maps/directions", async (req, res) => {
//   const { origin, destination } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       res.json(data);
//     } else {
//       throw new Error("Error fetching directions");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching directions" });
//   }
// });

// app.get("/api/maps/geocode", async (req, res) => {
//   const { address } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       res.json(data);
//     } else {
//       throw new Error("Error fetching geocode");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching geocode" });
//   }
// });

// app.get("/api/maps/place/details", async (req, res) => {
//   const { place_id } = req.query;
//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       res.json(data);
//     } else {
//       throw new Error("Error fetching place details");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching place details" });
//   }
// });

// const port = process.env.PORT || 1200;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
dotenv.config;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/maps/place", async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=hospital&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk`;
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
  const { nextpage} = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${nextpage}&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk`;
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
    // console.log(url);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// get photos from google maps
app.get("/api/maps/place/photo", async (req, res) => {
  const { photo_reference, pagetoken } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&pagetoken=${pagetoken}&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk`;

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", response.headers.get("content-type"));
    res.setHeader("Content-Length", response.headers.get("content-length"));
    // console.log(url);
    res.json(buffer)
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

//GET DOCTORS FROM API
app.get("/api/doctors", async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=doctors&key=AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});






app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});

