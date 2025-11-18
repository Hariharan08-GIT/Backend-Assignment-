// Simple JavaScript for fetching menu data

document.getElementById("btn-full").addEventListener("click", () => {
    fetchData("/menu");
});

document.getElementById("btn-veg").addEventListener("click", () => {
    fetchData("/menu/vegetarian");
});

document.getElementById("btn-cats").addEventListener("click", () => {
    fetchCategories("/menu/categories");
});

const output = document.getElementById("output");

// Fetch full menu or veg menu
function fetchData(endpoint) {
    output.innerHTML = "Loading...";

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            let html = "";
            data.forEach(item => {
                html += `
                    <div class="card">
                        <h3>${item.name}</h3>
                        <p>Category: ${item.category}</p>
                        <p>Price: ₹${item.price}</p>
                        <p>${item.isVegetarian ? "Vegetarian 🌱" : "Non-Vegetarian 🍗"}</p>
                        <p>${item.description}</p>
                    </div>
                `;
            });
            output.innerHTML = html;
        })
        .catch(err => {
            output.innerHTML = "Error fetching data!";
            console.error(err);
        });
}

// Fetch categories
function fetchCategories(endpoint) {
    output.innerHTML = "Loading...";

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            let html = "<h2>Categories</h2>";
            data.categories.forEach(cat => {
                html += `
                    <div class="card">
                        <p><strong>${cat.name}</strong></p>
                        <p>Items: ${cat.itemCount}</p>
                    </div>
                `;
            });
            output.innerHTML = html;
        })
        .catch(err => {
            output.innerHTML = "Error fetching categories!";
            console.error(err);
        });
}
