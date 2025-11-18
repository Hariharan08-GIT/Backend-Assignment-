const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Classic pizza with tomato and mozzarella",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Main Course",
    price: 450,
    isVegetarian: false,
    description: "Fragrant basmati rice cooked with marinated chicken",
  },
  {
    id: 3,
    name: "French Fries",
    category: "Appetizer",
    price: 120,
    isVegetarian: true,
    description: "Crispy golden potato fries",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 180,
    isVegetarian: true,
    description: "Soft cake with rich chocolate frosting",
  },
  {
    id: 5,
    name: "Lemonade",
    category: "Beverage",
    price: 90,
    isVegetarian: true,
    description: "Refreshing lemon drink",
  },
  {
    id: 6,
    name: "Grilled Fish",
    category: "Main Course",
    price: 500,
    isVegetarian: false,
    description: "Tender grilled fish with herbs",
  },
];

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.get("/menu/vegetarian", (req, res) => {
  const vegItems = menu.filter((item) => item.isVegetarian === true);
  res.json(vegItems);
});

app.get("/menu/categories", (req, res) => {
  const counts = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(counts).map((category) => ({
    name: category,
    itemCount: counts[category],
  }));

  res.json({ categories });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
