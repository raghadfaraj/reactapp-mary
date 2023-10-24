const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");

const JWT_SECRET =
  "7da98f1bffa3d5295192cf30046b49249cfccaf9635fd9f8c04272552bf7ead2";

// Hard-coded users
const users = [
  { username: "admin@gmail.com", password: "password" },
  { username: "user@gmail.com", password: "password" },
  { username: "maryfaraj85@gmail.com", password: "maryfaraj85" }
];

const items = [
  {
    id: "id123",
    price: "$25.8",
    category: "Walking",
    imgURL: `https://i.ibb.co/mc61LKy/Berghaus-womens-waterproof-on-the-hill-a.webp`,
    text: "Bumber Jacket",
  },
  {
    id: "id124",
    price: "$6.8",
    category: "Walking",
    imgURL: `https://ibb.co/Kz6nFsw`,
    text: "Local Linen",
  },
  {
    id: "id125",
    price: "$14.8",
    category: "Walking",
    imgURL: `https://ibb.co/YyTymd2`,
    text: "Raining Free",
  },
  {
    id: "id126",
    price: "$17.8",
    category: "Walking",
    imgURL: `https://ibb.co/pJWTX1v`,
    text: "Jackets",
  },
  {
    id: "id127",
    price: "$33.8",
    category: "Walking",
    imgURL: `https://ibb.co/pJWTX1v`,
    text: "Jackets",
  },
  {
    id: "id128",
    price: "$8.8",
    category: "Running",
    imgURL: `https://ibb.co/tZnYMh2`,
    text: "Jackets",
  },
  {
    id: "id129",
    price: "$14.8",
    category: "Running",
    imgURL: `https://ibb.co/qMD70bR`,
    text: "Jackets",
  },
  {
    id: "id130",
    price: "$14.8",
    category: "Running",
    imgURL: `https://ibb.co/n8wBWC7`,
    text: "Jackets",
  },
  {
    id: "id131",
    price: "$14.8",
    category: "Running",
    imgURL: `https://ibb.co/t8NKnX7`,
    text: "Jackets",
  },
  {
    id: "id132",
    price: "$14.8",
    category: "Running",
    imgURL: `https://ibb.co/MVWwZ2q`,
    text: "Jackets",
  },
  {
    id: "id133",
    price: "$14.8",
    category: "Running",
    imgURL: `https://ibb.co/qDkT66Q`,
    text: "Jackets",
  },
  {
    id: "id134",
    price: "$14.8",
    category: "Running",
    imgURL: `https://ibb.co/gMBMbBG`,
    text: "Jackets",
  },
  {
    id: "id223",
    price: "$14.8",
    category: "General",
    imgURL: `https://ibb.co/zG7W89j`,
    text: "Jackets",
  },
  {
    id: "id224",
    price: "$14.8",
    category: "General",
    imgURL: `https://ibb.co/w0qmptb`,
    text: "Jackets",
  },
  {
    id: "id225",
    price: "$14.8",
    category: "General",
    imgURL: `https://ibb.co/V3BnjcM`,
    text: "Jackets",
  },
  {
    id: "id226",
    price: "$14.8",
    category: "General",
    imgURL: `https://ibb.co/HH13CDC`,
    text: "Tour Jackets",
  },
  {
    id: "id227",
    price: "$14.8",
    category: "General",
    imgURL: `https://ibb.co/1Q2pS7X`,
    text: "Snow Jackets",
  },
 
];

// app.use(bodyParser());
// app.use(bodyParser.urlencoded());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Authentication API
app.post("/auth", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Generate a JWT token
    const token = jwt.sign({ username: user.username }, JWT_SECRET);

    res.status(200).send({
      token,
    });
  } else {
    res.status(401).send({
      message: "Invalid username or password",
    });
  }
});

// Search API
app.get("/search", (req, res) => {
  const query = req.query.search;

  let results = items;
  if (query) {
    results = items.filter(
      (item) => item.text.includes(query) || item.id.includes(query)
    );
  }
  res.status(200).send(results);
});

// Save API
app.post("/save", (req, res) => {
  const item = req.body;
  items.push(item);

  res.status(200).send({
    message: "Item saved successfully",
  });
});

// Start the server
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
