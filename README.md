# Hariharan's Restaurant - Menu API

## 🍽️ About the Restaurant

**Hariharan's Restaurant** is a vibrant fusion dining establishment that brings together the best of international and local cuisines. From classic Italian pizzas to aromatic Indian biryani, we offer a diverse menu that caters to all taste preferences. Our restaurant prides itself on serving fresh, high-quality dishes in a warm and welcoming atmosphere, with special attention to our vegetarian guests.

## 📋 Project Description

This is a full-stack restaurant menu application built with **Node.js** and **Express.js** for the backend, and vanilla **HTML/CSS/JavaScript** for the frontend. The application provides a RESTful API that allows users to browse the complete menu, filter vegetarian options, and view menu items organized by categories. The interactive frontend fetches data from the API and displays it dynamically to users.

**Technologies Used:**

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (ES6+)
- JSON

## 🍕 Menu Categories Available

Our menu features the following categories:

- **Main Course** - Hearty meals including pizzas, biryani, and grilled fish
- **Appetizer** - Light starters like french fries
- **Dessert** - Sweet treats including chocolate cake
- **Beverage** - Refreshing drinks such as lemonade

## 📁 Project Structure

```
backend-assignment/
│
├── server.js              # Express server with API endpoints
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked versions of dependencies
│
└── public/                # Frontend files
    ├── index.html         # Main HTML page
    ├── index.css          # Styling for the frontend
    └── index.js           # Frontend JavaScript for API calls
```

## 🔌 API Documentation

### 1. Get Full Menu

- **Endpoint:** `/menu`
- **HTTP Method:** `GET`
- **Description:** Retrieves all menu items from the restaurant
- **Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato and mozzarella"
  },
  {
    "id": 2,
    "name": "Chicken Biryani",
    "category": "Main Course",
    "price": 450,
    "isVegetarian": false,
    "description": "Fragrant basmati rice cooked with marinated chicken"
  }
]
```

### 2. Get Vegetarian Menu Items

- **Endpoint:** `/menu/vegetarian`
- **HTTP Method:** `GET`
- **Description:** Retrieves only vegetarian menu items
- **Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato and mozzarella"
  },
  {
    "id": 3,
    "name": "French Fries",
    "category": "Appetizer",
    "price": 120,
    "isVegetarian": true,
    "description": "Crispy golden potato fries"
  }
]
```

### 3. Get Menu Categories

- **Endpoint:** `/menu/categories`
- **HTTP Method:** `GET`
- **Description:** Retrieves all menu categories with the count of items in each category
- **Sample Response:**

```json
{
  "categories": [
    {
      "name": "Main Course",
      "itemCount": 3
    },
    {
      "name": "Appetizer",
      "itemCount": 1
    },
    {
      "name": "Dessert",
      "itemCount": 1
    },
    {
      "name": "Beverage",
      "itemCount": 1
    }
  ]
}
```

## 🚀 Installation & Setup Instructions

### Prerequisites

- Node.js installed on your system (version 14 or higher recommended)
- Git installed on your system

### Step-by-Step Setup

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   ```

2. **Navigate to the project directory**

   ```bash
   cd "backend Assigement"
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   Or for development with auto-restart:

   ```bash
   npm run dev
   ```

5. **Access the application**
   - **Frontend:** Open your browser and navigate to `http://localhost:3000`
   - **API Endpoints:**
     - Full Menu: `http://localhost:3000/menu`
     - Vegetarian Items: `http://localhost:3000/menu/vegetarian`
     - Categories: `http://localhost:3000/menu/categories`

The server will start running on port 3000. You should see the message: "Server running at http://localhost:3000"

## ✨ Features

- **RESTful API**: Three well-structured API endpoints for menu data retrieval
- **Full Menu Display**: View all available dishes with prices and descriptions
- **Vegetarian Filtering**: Quickly filter and display only vegetarian menu items
- **Category Organization**: Browse menu items organized by categories with item counts
- **Interactive Frontend**: Dynamic user interface that fetches and displays data in real-time
- **Responsive Design**: Clean and user-friendly interface
- **Static File Serving**: Express serves frontend files seamlessly
- **JSON Data Format**: All API responses in standard JSON format
- **Modular Code Structure**: Separation of frontend and backend concerns

## 🔗 GitHub Repository Link

https://github.com/Hariharan08-GIT/Backend-Assignment-.git




## 👤 Author Information

**Name:** Hariharan

---

_Built with ❤️ for the Backend Assignment_
