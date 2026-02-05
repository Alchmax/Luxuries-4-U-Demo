/**
 * GT BOUTIQUE - PRODUCT ENGINE 2026
 * Handles: Data Storage, Dynamic Injection, and Category Filtering
 */

const products = [
    {
        id: 1,
        name: "Birkin 30 Gold Hardware",
        brand: "Hermès",
        category: "Handbags",
        price: "Private Inquiry",
        tag: "Rare",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800"
    },
    {
        id: 2,
        name: "Mojave Ghost Eau De Parfum",
        brand: "Byredo",
        category: "Perfumes",
        price: "₹ 24,500",
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800"
    },
    {
        id: 3,
        name: "Classic Double Flap Bag",
        brand: "Chanel",
        category: "Handbags",
        price: "Enquire for Price",
        tag: "Essential",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800"
    },
    {
        id: 4,
        name: "Santal 33 Collector's Edition",
        brand: "Le Labo",
        category: "Perfumes",
        price: "₹ 28,000",
        tag: "New Arrival",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800"
    },
    {
        id: 5,
        name: "Lady Dior My ABCDior",
        brand: "Dior",
        category: "Handbags",
        price: "Private Inquiry",
        tag: "Rare",
        image: "https://images.unsplash.com/photo-1591343395902-1adcb454c2e4?auto=format&fit=crop&w=800"
    },
    {
        id: 6,
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        category: "Perfumes",
        price: "₹ 32,000",
        tag: "Exquisite",
        image: "https://images.unsplash.com/photo-1557170334-a7c3d46af230?auto=format&fit=crop&w=800"
    }
];

/**
 * RENDER FUNCTION
 * Generates the HTML for each product and injects it into the grid
 */
function loadProducts(categoryFilter = 'all') {
    const container = document.getElementById('product-container');
    const featuredGrid = document.getElementById('featured-grid');
    
    // Determine which grid we are targeting
    const targetGrid = container || featuredGrid;
    if (!targetGrid) return;

    // Clear existing content for the filter transition
    targetGrid.style.opacity = '0';
    
    setTimeout(() => {
        targetGrid.innerHTML = '';

        const filteredList = categoryFilter === 'all' 
            ? products 
            : products.filter(p => p.category === categoryFilter);

        filteredList.forEach(product => {
            const productHTML = `
                <div class="product-card reveal active">
                    <div class="product-img-wrapper">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        ${product.tag ? `<div class="tag-overlay">${product.tag}</div>` : ''}
                    </div>
                    <div class="product-info">
                        <p class="text-upper" style="font-size: 0.6rem; margin-bottom: 10px; color: var(--gold);">${product.brand}</p>
                        <h3 style="font-size: 1.1rem; margin-bottom: 10px; font-family: 'Playfair Display', serif;">${product.name}</h3>
                        <p class="gold-text" style="font-weight: 500; font-size: 0.9rem;">${product.price}</p>
                    </div>
                </div>
            `;
            targetGrid.innerHTML += productHTML;
        });

        // Fade back in
        targetGrid.style.opacity = '1';
        targetGrid.style.transition = 'opacity 0.8s ease';
    }, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // If we are on the Home Page, we might only want to show the first 3 products
    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
        // Limited view for Home
        loadProducts('all'); 
    } else {
        // Full view for Products page
        loadProducts('all');
    }
});