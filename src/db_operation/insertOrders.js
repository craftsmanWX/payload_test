// insertOrders.js
import payload from 'payload';

const insertOrders = async (id) => {
  try {
    const orderId = Number(id);
    if (isNaN(orderId)) {
      throw new Error('Invalid id: must be a number');
    }
    
    const newOrder = {
      total: orderId, // Replace with the actual total for the order
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
