// Example product data
const products = [
    {
        id: 1,
        title: "Product 1",
        image: "product1.jpg",
        description: "Product 1 description.",
        price: "$19.99",
    },
    {
        id: 2,
        title: "Product 2",
        image: "product2.jpg",
        description: "Product 2 description.",
        price: "$24.99",
    },
    {
        id: 3,
        title: "Product 3",
        image: "product3.jpg",
        description: "Product 3 description.",
        price: "$29.99",
    },
    {
        id: 4,
        title: "Product 4",
        image: "product4.jpg",
        description: "Product 4 description.",
        price: "$14.99",
    },
    {
        id: 5,
        title: "Product 5",
        image: "product5.jpg",
        description: "Product 5 description.",
        price: "$34.99",
    },
    {
        id: 6,
        title: "Product 6",
        image: "product6.jpg",
        description: "Product 6 description.",
        price: "$22.99",
    },
    {
        id: 7,
        title: "Product 7",
        image: "product7.jpg",
        description: "Product 7 description.",
        price: "$19.99",
    },
    {
        id: 8,
        title: "Product 8",
        image: "product8.jpg",
        description: "Product 8 description.",
        price: "$27.99",
    },
    {
        id: 9,
        title: "Product 9",
        image: "product9.jpg",
        description: "Product 9 description.",
        price: "$39.99",
    },
    {
        id: 10,
        title: "Product 10",
        image: "product10.jpg",
        description: "Product 10 description.",
        price: "$31.99",
    },
];

// Function to generate product boxes
const generateProductBoxes = () => {
    const productContainer = document.getElementById("product-container");

    products.forEach((product) => {
        const productBox = document.createElement("div");
        productBox.classList.add("product-box");

        productBox.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
            <button class="buy-button">Buy Now</button>
        `;

        productContainer.appendChild(productBox);
    });
}

// Generate the product boxes when the page loads
window.onload = generateProductBoxes;
