document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const cartContainer = document.getElementById('cart-container');
    const orderContainer = document.getElementById('order-container');
    const emptyOrderMessage = document.getElementById('empty-order-message');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const logoutButton = document.getElementById('logout');
    const loginMessage = document.getElementById('login-message');
    const signupMessage = document.getElementById('signup-message');
    const orderItems = [];
    const orderItemMap = new Map();
    let currentUser = null;

    // Fetch data from the API and display carts
    fetch('https://dummyjson.com/carts')
        .then(response => response.json())
        .then(data => {
            const carts = data.carts;
            carts.forEach(cart => displayCart(cart));
        })
        .catch(error => console.error('Error fetching cart data:', error));

    // Function to display a cart
    function displayCart(cart) {
        const cartCard = document.createElement('div');
        cartCard.className = 'cart-card';
        cartCard.setAttribute('data-id', cart.id);

        const productImage = cart.products.length > 0
            ? cart.products[Math.floor(Math.random() * cart.products.length)].thumbnail
            : '';

        cartCard.innerHTML = `
            <img src="${productImage}" alt="Product Image">
            <h3>Cart ID: ${cart.id}</h3>
            <p><strong>Total Items:</strong> ${cart.totalProducts}</p>
            <p><strong>Total Quantity:</strong> ${cart.totalQuantity}</p>
            <p><strong>Total Price:</strong> $${cart.total}</p>
            <p><strong>Discounted Price:</strong> $${cart.discountedTotal}</p>
            <button class="buy-button">Buy</button>
        `;

        cartContainer.appendChild(cartCard);

        // Add event listener for the 'Buy' button
        cartCard.querySelector('.buy-button').addEventListener('click', () => {
            if (currentUser) {
                addToOrder(cart, productImage);
            } else {
                alert('You must be logged in to order items.');
            }
        });
    }

    // Function to add item to the order
    function addToOrder(cart, productImage) {
        if (!orderItemMap.has(cart.id)) {
            // Add cart to orderItems array and map
            orderItems.push(cart);
            orderItemMap.set(cart.id, cart);

            // Create order item element
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';

            orderItem.innerHTML = `
                <img src="${productImage}" alt="Product Image">
                <div>
                    <h4>Cart ID: ${cart.id}</h4>
                    <p><strong>Total Items:</strong> ${cart.totalProducts}</p>
                    <p><strong>Total Price:</strong> $${cart.total}</p>
                </div>
                <button class="remove-button">Remove</button>
            `;

            orderContainer.appendChild(orderItem);

            // Add event listener for the 'Remove' button
            orderItem.querySelector('.remove-button').addEventListener('click', () => {
                if (confirm('Are you sure you want to remove this item?')) {
                    removeFromOrder(cart.id, orderItem);
                }
            });

            // Update total price
            updateTotalPrice();

            // Remove the cart card from the cart container
            const cartCard = cartContainer.querySelector(`.cart-card[data-id="${cart.id}"]`);
            if (cartCard) {
                cartContainer.removeChild(cartCard);
            }
        } else {
            alert('This cart is already in the order list.');
        }

        // Show or hide the empty order message
        emptyOrderMessage.style.display = orderItems.length === 0 ? 'block' : 'none';
    }

    // Function to remove item from the order
    function removeFromOrder(cartId, orderItem) {
        const index = orderItems.findIndex(item => item.id === cartId);
        if (index !== -1) {
            orderItems.splice(index, 1);
            orderItemMap.delete(cartId);
            orderContainer.removeChild(orderItem);
            emptyOrderMessage.style.display = orderItems.length === 0 ? 'block' : 'none';
            updateTotalPrice();
        }
    }

    // Function to update the total price
    function updateTotalPrice() {
        let totalPrice = orderItems.reduce((sum, item) => sum + item.total, 0);

        const existingTotalPrice = document.querySelector('.total-price');
        if (existingTotalPrice) {
            orderContainer.removeChild(existingTotalPrice);
        }

        const totalPriceElement = document.createElement('div');
        totalPriceElement.className = 'total-price';
        totalPriceElement.innerHTML = `<strong>Total Order Price:</strong> $${totalPrice.toFixed(2)}`;
        orderContainer.appendChild(totalPriceElement);
    }

    // Search functionality
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const cartCards = cartContainer.querySelectorAll('.cart-card');

        cartCards.forEach(card => {
            const cartId = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = cartId.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Toggle search container visibility
    searchToggle.addEventListener('click', () => {
        searchContainer.style.display = searchContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Toggle login/signup containers
    loginToggle.addEventListener('click', () => {
        loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
        signupContainer.style.display = 'none';
    });

    signupToggle.addEventListener('click', () => {
        signupContainer.style.display = signupContainer.style.display === 'none' ? 'block' : 'none';
        loginContainer.style.display = 'none';
    });

    // Handle logout
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        updateAuthUI();
        alert('You have been logged out.');
    });

    // Handle login
    loginButton.addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUser = user;
            updateAuthUI();
            loginMessage.textContent = '';
        } else {
            loginMessage.textContent = 'Invalid username or password.';
        }
    });

    // Handle signup
    signupButton.addEventListener('click', () => {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (!username || !password) {
            signupMessage.textContent = 'Please fill in all fields.';
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.username === username)) {
            signupMessage.textContent = 'Username already exists.';
            return;
        }

        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        signupMessage.textContent = 'Signup successful. You can now log in.';
    });

    // Update authentication UI
    function updateAuthUI() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            loginContainer.style.display = 'none';
            signupContainer.style.display = 'none';
            loginToggle.style.display = 'none';
            signupToggle.style.display = 'none';
            logoutButton.style.display = 'inline';
        } else {
            loginContainer.style.display = 'none';
            signupContainer.style.display = 'none';
            loginToggle.style.display = 'inline';
            signupToggle.style.display = 'inline';
            logoutButton.style.display = 'none';
        }
    }

    // Initialize authentication UI
    updateAuthUI();

    // Ensure the navbar is visible
    document.querySelector('.navbar').style.display = 'flex';

    // Sample data structure for cart items
    const cartItems = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
    ];

    // Function to display cart items
    function displayCartItems() {
        const cartContainer = document.getElementById('cartItems');
        cartContainer.innerHTML = ''; // Clear existing content
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            `;
            cartContainer.appendChild(cartItemElement);
        });
    }

    // Call function to display cart items
    displayCartItems();
});
