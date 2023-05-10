const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

const chain = order?.customer?.address?.city;

if (!chain) {
  console.log("City is required");
} else console.log(chain);
