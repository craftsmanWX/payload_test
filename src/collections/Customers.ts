import { CollectionConfig } from 'payload/types'

const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  admin: {
    useAsTitle: 'email',
    hidden: false
  },
  access: {
    read: () => {
      return true;
    },
    create: () => {
      return true;
    },
    delete: () => {
      return true;
    },
    update: () => {
      return true;
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Customers
