// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


 if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

 if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    let activeCategory = "all"; // Default category to show all products

    // Function to display products based on filter and search criteria
    function displayProducts() {
        const searchQuery = searchInput.value.toLowerCase();
        const products = document.querySelectorAll(".pro");

        products.forEach(product => {
            const productName = product.dataset.name.toLowerCase();
            const productCategory = product.dataset.category.toLowerCase();
            const productBrand = product.dataset.brand.toLowerCase();

            const matchesSearch = productName.includes(searchQuery) || productBrand.includes(searchQuery);
            const matchesCategory = activeCategory === "all" || productCategory === activeCategory;

            if (matchesSearch && matchesCategory) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Event listener for search input
    searchInput.addEventListener("input", displayProducts);

    // Event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            activeCategory = this.textContent.toLowerCase();
            displayProducts();
        });
    });
});
