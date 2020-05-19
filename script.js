// Javascript File
let toppings;
let size;
let tax;
let subtotal;
let cost;
let e;

document.getElementById("enter").addEventListener("click", pizzaOrder);

// The variable 'e' is for shortening
/* This function calculates the bill for the order.
   Also, it displays them to the user.*/
function pizzaOrder() {
    e = document.getElementById("toppings");
    toppings = Number(e.options[e.selectedIndex].value);
    if (document.getElementById("size1").checked == true) {
        size = 6;
    }
    else if (document.getElementById("size2").checked == true) {
        size = 10;
    }
    subtotal = toppings + size;
    tax = 0.13 * subtotal;
    tax = tax.toFixed(2);
    cost = Number(subtotal) + Number(tax);
    cost = cost.toFixed(2);
    document.getElementById("bill").style.display = "block";
    document.getElementById("tax").textContent = "Tax: $" + tax;
    document.getElementById("subtotal").textContent = "Subtotal: $" + subtotal;
    document.getElementById("cost").textContent= "Cost: $" + cost;
}