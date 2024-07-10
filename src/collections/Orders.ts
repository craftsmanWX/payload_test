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
            type: 'json',
            required: true,
        },
        // {
        //     name: 'owner', // required
        //     type: 'relationship', // required
        //     relationTo: 'users', // required
        //     hasMany: false,
        //   },
        // {
        //     name: 'order_time',
        //     type: 'date',
        //     required: true,
        // }
    ],
    access: {
        read: ({ req }: Context) => {
            //console.log(req);
            return !!req.user; 
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