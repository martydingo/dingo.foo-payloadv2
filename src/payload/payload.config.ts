import path from 'path';
import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';

import siteImage from './collections/Media/SiteImage/SiteImage';
import profileImage from './collections/Media/ProfileImage/ProfileImage';
import Users from './collections/Users';
import Blog from './collections/Blog/Blog';
import blogImage from './collections/Media/BlogImage/BlogImage';

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string
  }),
  editor: slateEditor({}),
  collections: [
    blogImage,
    profileImage,
    siteImage,
    Users,
    Blog
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
