// insertCustomer.js
import payload from 'payload';

const insertCustomer = async () => {
  try {
    const newCustomer = {
      email: 'testCustomer1@example.com',
      password: 'securepassword',
    };


    const createdCustomer = await payload.create({
      collection: 'customers',
      data: newCustomer,
    });

    console.log('Customer inserted:', createdCustomer);
  } catch (error) {
    console.error('Error inserting user:', error);
  }
};

export default insertCustomer;
