document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = [
        {
            name: 'Wireless Headphones',
            price: 199.99,
            image: '/api/placeholder/250/250'
        },
        {
            name: 'Smart Watch',
            price: 249.99,
            image: '/api/placeholder/250/250'
        },
        {
            name: 'Bluetooth Speaker',
            price: 129.99,
            image: '/api/placeholder/250/250'
        },
        {
            name: 'Noise Cancelling Earbuds',
            price: 179.99,
            image: '/api/placeholder/250/250'
        }
    ];

    const productsContainer = document.getElementById('featuredProducts');

    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="product-btn">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });

    const addToCartButtons = document.querySelectorAll('.product-btn');
    const cartCount = document.querySelector('.cart-count');
    let currentCartCount = 3;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCartCount++;
            cartCount.textContent = currentCartCount;
            alert('Product added to cart!');
        });
    });
});