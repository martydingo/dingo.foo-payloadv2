import { CollectionConfig } from "payload/types";

const blogImage: CollectionConfig = {
    slug: 'blogImage',
    labels: {
        singular: 'Blog Image',
        plural: 'Blog Images',
    },
    access: {
        read: () => true,
    },
    upload: {
        staticURL: '/images/blog',
        staticDir: '/astro/public/images/blog',
        imageSizes: [
            {
                name: 'banner_large',
                width: 1440,
                height: undefined,
            },
            {
                name: 'banner_medium',
                width: 1080,
                height: undefined,
            },
            {
                name: 'banner_small',
                width: 720,
                height: undefined,
            },
        ],
        // adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}

export default blogImage