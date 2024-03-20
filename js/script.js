document.addEventListener('DOMContentLoaded', function () {
    // Hämta produkter från Fake Store API och rendera dem på sidan
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                // Skapa produktkort
                const productCard = document.createElement('div');
                productCard.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
                productCard.innerHTML = `
                <div class="card h-100">
                    <img class="card-img-top" src="${product.image}" alt="${product.title}">
                    <div class="card-body">
                        <h4 class="card-title">${product.title}</h4>
                        <p class="card-text">$${product.price}</p>
                        <p class="card-text">${product.description}</p>
                        <button class="btn btn-primary btn-order" data-product="${product.title}" data-price="${product.price}" data-description="${product.description}">Beställ</button>
                    </div>
                </div>
            `;
                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    // Hantera klickhändelsen för beställningsknappen
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-order')) {
            event.preventDefault();

            // Hämta produktinformation från knappen
            const productName = event.target.getAttribute('data-product');
            const productPrice = event.target.getAttribute('data-price');
            const productDescription = event.target.getAttribute('data-description');

            // Skapa en URL för beställningsformuläret med produktinformationen som query parametrar
            const orderFormUrl = `beställning.html?product=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}&description=${encodeURIComponent(productDescription)}`;

            // Omdirigera användaren till beställningsformuläret
            window.location.href = orderFormUrl;

        }
    });

    // Hantera formulärets submit-händelse på beställningssidan
    const form = document.getElementById('order-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Hämta användarens uppgifter från formuläret
        const name = document.getElementById('namn').value;
        const phone = document.getElementById('telefon').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('adress').value;

        // Hämta produktinformation från URL-parametrarna
        const urlParams = new URLSearchParams(window.location.search);
        const productName = urlParams.get('product');
        const productPrice = urlParams.get('price');
        const productDescription = urlParams.get('description');

        // Fyll i modalfönstret med användarens uppgifter och produktinformation
        document.getElementById('modalProductName').textContent = productName;
        document.getElementById('modalProductPrice').textContent = `$${productPrice}`;
        document.getElementById('modalProductDescription').textContent = productDescription;
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalPhone').textContent = phone;
        document.getElementById('modalEmail').textContent = email;
        document.getElementById('modalAddress').textContent = address;

        // Visa modalfönstret
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Återställ formuläret
        form.reset();
    });
});