import { CollectionConfig } from 'payload/types'

export const Orders: CollectionConfig = {
    slug: 'orders',
    auth: {
        useAPIKey: true,
        disableLocalStrategy: true,
    },
    admin: {
        useAsTitle: 'total',
        hidden: false
    },
    fields: [
        {
            name: 'total',
            type: 'number',
            required: true,
        }
    ],
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
        }
    }
}