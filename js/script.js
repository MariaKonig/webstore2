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
        productCard.classList.add(
          "col-lg-3",
          "col-md-4",
          "col-sm-6",
          "mb-4",
          "product-container"
        );
        productCard.setAttribute("data-product", `${product.title}`);
        productCard.setAttribute("data-price", `${product.price}`);
        productCard.setAttribute("data-description", `${product.description}`);
        productCard.innerHTML = `
                <div class="card h-100">
                  <div data-bs-toggle="offcanvas" data-bs-target="#offcanvas-product" aria-controls="offcanvas-product">
                    <img class="card-img-top" src="${product.image}" alt="${product.title}">  
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${product.title}</h5>
                    </div>
                  </div>
                  <div class="d-flex flex-column card-body product-button">
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary btn-order">Köp</button>
                  </div>
                </div>
            `;
        productList.appendChild(productCard);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });



  // Hantera klickhändelser
  document.addEventListener("click", function (event) {
    const costumer = JSON.parse(localStorage.getItem('costumer'));

    if (event.target.classList.contains("checkout-button")) {
      const total = document.getElementById("amount").innerHTML
      console.log(total)
      if (total != `$0.00`)
        window.location.href = `order.html`;
      return;
    }

    if (event.target.classList.contains("empty")) {
      var element = document.getElementById("cart-list");
      element.innerHTML = "";
      costumer.products = []
      localStorage.setItem('costumer', JSON.stringify(costumer))
      reevaluateSubtotal()
      return
    }

    if (event.target.matches(".plus, .minus, .remove")) {

      const productName = event.target.closest("[item-name]").getAttribute("item-name");
      const prodIndex = costumer.products.findIndex(product => product.title === productName)
      const quantity = costumer.products[prodIndex].quantity
      const qty = event.target.closest("product-qty")

      if (event.target.classList.contains("plus")) {
        costumer.products[prodIndex].quantity++
        event.target.previousElementSibling.innerHTML++

      } else if (event.target.classList.contains("minus")) {
        if (quantity > 0) {
          costumer.products[prodIndex].quantity--
          event.target.nextElementSibling.innerHTML -= 1
        }
      } else if (event.target.classList.contains("remove")) {

        const element = event.target.closest(".item")
        element.parentNode.removeChild(element)
        costumer.products.splice(prodIndex, 1)

      }

      localStorage.setItem('costumer', JSON.stringify(costumer))
      reevaluateSubtotal()
      return
    }

    // Hämta produktinformation
    const productName = event.target
      .closest("[data-product]")
      .getAttribute("data-product");
    const productPrice = event.target
      .closest("[data-price]")
      .getAttribute("data-price");
    const productDescription = event.target
      .closest("[data-description]")
      .getAttribute("data-description");


    if (event.target.classList.contains("btn-order")) {
      event.preventDefault();
      const prodIndex = costumer.products.findIndex(product => product.title === productName)
      if (prodIndex > -1) {
        costumer.products[prodIndex].quantity++
      }
      else {
        costumer.products.push({ title: productName, price: productPrice, quantity: 1 })
      }
      localStorage.setItem('costumer', JSON.stringify(costumer));

    } else {
      document.getElementById("offcanvas-product-title").innerHTML =
        productName;
      document.getElementById("offcanvas-product-description").innerHTML =
        productDescription;
    }
  });
});



//dynamiskt år i footer
document.getElementById("cRyear").innerHTML = new Date().getFullYear();
