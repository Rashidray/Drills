const orderQueue = [
  { orderId: 501, customer: "Rhea", location: "Jaro Plaza", isFlooded: true },
  { orderId: 502, customer: "Mark", location: "Mandurriao / Megaworld", isFlooded: false },
  { orderId: 503, customer: "Bea", location: "Villa Arevalo", isFlooded: true },
  { orderId: 504, customer: "Carlos", location: "Atria Park District", isFlooded: false },
  { orderId: 505, customer: "Dianne", location: "City Proper / Calle Real", isFlooded: true },
  { orderId: 506, customer: "Paolo", location: "La Paz", isFlooded: false }
];

function getAvailableDeliveries(queue) {
  const safeOrders = [];

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    

    if (!item.isFlooded) {
      safeOrders.push(
        `OUT FOR DELIVERY: [Ref #${item.orderId}] - Send to ${item.customer} at ${item.location}`
      );
    }
  }

  return safeOrders;
}

const readyToShip = getAvailableDeliveries(orderQueue);

console.log("=== ILOILO EXPRESS DELIVERY DISPATCH ===");
console.log(readyToShip);
