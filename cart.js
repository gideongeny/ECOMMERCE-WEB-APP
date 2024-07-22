document.addEventListener('DOMContentLoaded', () => {
    // Add to Cart functionality
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const productItem = event.target.closest('.product-item');
                const product = {
                    id: productItem.dataset.id,
                    name: productItem.querySelector('h3').textContent,
                    price: parseFloat(productItem.querySelector('p').textContent.replace('$', '')),
                    quantity: 1
                };

                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingProduct = cart.find(item => item.id === product.id);
                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    cart.push(product);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Product added to cart!');
            }
        });
    }

    // Display Cart Items
    const cartGrid = document.getElementById('cart-grid');
    if (cartGrid) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            `;
            cartGrid.appendChild(productDiv);
        });

        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;

        const checkoutButton = document.getElementById('checkout-button');
        checkoutButton.addEventListener('click', () => {
            alert('Checkout complete!');
            localStorage.removeItem('cart');
            window.location.href = 'products.html';
        });
    }
});
