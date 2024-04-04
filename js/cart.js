function hasCostumer() {
    if (localStorage.getItem('costumer') == null) {

        const costumer = {
            id: Date.now(),
            products: []
        }

        localStorage.setItem('costumer', JSON.stringify(costumer));
    }
}

function cartToggler() {
    const costumer = JSON.parse(localStorage.getItem('costumer'))
    const cartList = document.getElementById("cart-list")
    cartList.innerHTML = ""
    const total = document.getElementById("amount")
    let sum = 0
    costumer.products.forEach(product => {
        sum += (product.price * product.quantity)
        const item = document.createElement("div");
        item.setAttribute("item-name", `${product.title}`);
        item.classList.add('item');
        item.innerHTML += `<div class="name"> ${product.title}</div>`
        item.innerHTML += `<div class="price"> $${product.price}</div>`
        item.innerHTML += `
        <div class="quantity">
            <span class="minus" "for-product"> < </span>
            <span class="qty-digit" "product-qty"> ${product.quantity} </span>
            <span class="plus" "for-product"> > </span>
        </div>`
        item.innerHTML += `
        <div >
            <span class="remove">
                <svg class="remove w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path class="remove" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>
            </span>
        </div>
        `
        cartList.appendChild(item);
    });
    sum = parseFloat(sum).toFixed(2)
    total.innerHTML = `$${sum}`
}
function counter() {

    setInterval(() => {
        const counter = document.getElementById("cart-counter")
        const costumer = JSON.parse(localStorage.getItem('costumer'))
        let sum = 0

        costumer.products.forEach(product => {
            sum += product.quantity
        })

        counter.innerHTML = sum
    }, 1000)
}
function reevaluateSubtotal() {
    const costumer = JSON.parse(localStorage.getItem('costumer'))
    let sum = 0
    costumer.products.forEach(product => {
        sum += (product.quantity * product.price)
    })
    sum = parseFloat(sum).toFixed(2)
    document.getElementById("amount").innerHTML = `$${sum}`
}

hasCostumer()
counter()