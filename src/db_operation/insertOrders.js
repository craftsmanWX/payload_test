// insertOrders.js
import payload from 'payload';

const insertOrders = async () => {
  try {
    const newOrder = {
      total: 110.0, // Replace with the actual total for the order
      // Add more fields as needed for your order
    };

    const createdOrder = await payload.create({
      collection: 'orders',
      data: newOrder,
    });

    console.log('Order inserted:', createdOrder);
  } catch (error) {
    console.error('Error inserting order:', error);
  }
};

export default insertOrders;
