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
    imgURL: `https://imgtr.ee/images/2023/10/23/41ae2215e1b1b10ae0203221085c175b.jpeg`,
    text: "Bumber Jacket",
  },
  {
    id: "id124",
    price: "$6.8",
    category: "Walking",
    imgURL: `https://imgtr.ee/images/2023/10/23/0f45a0b9bb66751da6276bc91badb649.png`,
    text: "Local Linen",
  },
  {
    id: "id125",
    price: "$14.8",
    category: "Walking",
    imgURL: `https://imgtr.ee/images/2023/10/23/f2c896cac947cd616f03f547c3a710df.png`,
    text: "Raining Free",
  },
  {
    id: "id126",
    price: "$17.8",
    category: "Walking",
    imgURL: `https://imgtr.ee/images/2023/10/23/395f9deafe11d09351f42b7f0cc0c66b.png`,
    text: "Versatile Jackets",
  },
  {
    id: "id127",
    price: "$33.8",
    category: "Walking",
    imgURL: `https://imgtr.ee/images/2023/10/23/1a61bec41e596f8b00ad1c5b1e83b9f9.png`,
    text: "Jackets",
  },
  {
    id: "id128",
    price: "$8.8",
    category: "Running",
    imgURL: `https://imgtr.ee/images/2023/10/23/75dd0dd192784458375bbefde817629f.png`,
    text: "Jackets",
  },
  {
    id: "id129",
    price: "$14.8",
    category: "Running",
    imgURL: `https://imgtr.ee/images/2023/10/23/eb66799cb24272660645a2740cdc5b4c.png`,
    text: "Jackets",
  },
  {
    id: "id130",
    price: "$14.8",
    category: "Running",
    imgURL: `https://imgtr.ee/images/2023/10/23/5f3610415481a3e72d66943938df8e8f.png`,
    text: "Jackets",
  },
  {
    id: "id131",
    price: "$14.8",
    category: "Running",
    imgURL: `https://imgtr.ee/images/2023/10/23/3378cd622ca509ba0ac569dfbaadec33.png`,
    text: "Jackets",
  },
  {
    id: "id132",
    price: "$14.8",
    category: "Running",
    imgURL: `https://imgtr.ee/images/2023/10/23/cb8b07cf692282e4fb264d1168c97767.png`,
    text: "Jackets",
  },
  {
    id: "id133",
    price: "$14.8",
    category: "Running",
    imgURL: `https://imgtr.ee/images/2023/10/23/2f72a52cada5c9735b31909335579093.png`,
    text: "Jackets",
  },
  {
    id: "id134",
    price: "$14.8",
    category: "Running",
    imgURL: `https://imgtr.ee/images/2023/10/23/9ce51194d70450b5f6880a7395d8e9cc.png`,
    text: "Jackets",
  },
  {
    id: "id223",
    price: "$14.8",
    category: "General",
    imgURL: `https://imgtr.ee/images/2023/10/23/ed5339e25903249d7be7a894ff56bf39.png`,
    text: "Jackets",
  },
  {
    id: "id224",
    price: "$14.8",
    category: "General",
    imgURL: `https://imgtr.ee/images/2023/10/23/3db3781744d61182685e25929ba8b552.png`,
    text: "Montane Jackets",
  },
  {
    id: "id225",
    price: "$14.8",
    category: "General",
    imgURL: `https://imgtr.ee/images/2023/10/23/302410d20b5c5d33bde6601dc46068e2.png`,
    text: "Jackets",
  },
  {
    id: "id226",
    price: "$14.8",
    category: "General",
    imgURL: `https://imgtr.ee/images/2023/10/23/0e9aae3d0e2272be0a9e264b3d497717.png`,
    text: "Tour Jackets",
  },
  {
    id: "id227",
    price: "$14.8",
    category: "General",
    imgURL: `https://imgtr.ee/images/2023/10/23/2cc4032c9c851d18f656648cde114bd2.png`,
    text: "Montane Womens",
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
