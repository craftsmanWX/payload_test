import payload from 'payload';

const insertRawJson = async (jsonObj) => {
  try {
    console.log("newOrder:",  jsonObj[0].id);   
    //console.log(newOrder);

    const newOrder = {
      total: JSON.stringify(jsonObj), // Replace with the actual total for the order
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

export default insertRawJson;
