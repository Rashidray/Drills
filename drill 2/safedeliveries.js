const customer = {
    name: "RASHID RAY M. DE PEDRO",
    item: "Chicken Pastil with Rice",
    quantity: 3,
    price: 50
};

function processReceipt(order) {
    const totalAmount = order.quantity * order.price;

    console.log("=== School Canteen Receipt ===");
    console.log("Customer Name :", order.name);
    console.log("Item Ordered  :", order.item);
    console.log("Quantity      :", order.quantity);
    console.log("Price per Item: ₱" + order.price);
    console.log("Total Amount  : ₱" + totalAmount);

    if (totalAmount >= 100) {
        console.log("Status        : Eligible for free cold iced tea!");
    } else {
        console.log("Status        : Thank you for buying!");
    }
}

processReceipt(customer);
