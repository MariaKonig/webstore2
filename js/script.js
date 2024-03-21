document.addEventListener("DOMContentLoaded", function () {
  // Hämta produkter från Fake Store API och rendera dem på sidan
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const productList = document.getElementById("product-list");
      data.forEach((product) => {
        // Skapa produktkort
        const productCard = document.createElement("div");
        productCard.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
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
    .catch((error) => {
      console.error("Fetch error:", error);
    });

  // Hantera klickhändelsen för beställningsknappen
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-order")) {
      event.preventDefault();

      // Hämta produktinformation från knappen
      const productName = event.target.getAttribute("data-product");
      const productPrice = event.target.getAttribute("data-price");

      // Skapa en URL för beställningsformuläret med produktinformationen som query parametrar
      const orderFormUrl = `order.html?product=${encodeURIComponent(
        productName
      )}&price=${encodeURIComponent(
        productPrice
      )}`;
      
      // Omdirigera användaren till beställningsformuläret
      window.location.href = orderFormUrl;
    }
  });
}); 


document.getElementById("cRyear").innerHTML = new Date().getFullYear();
