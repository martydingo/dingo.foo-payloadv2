import { CollectionConfig } from "payload/types";
import { Title } from "./Fields/Title";
import { Author } from "./Fields/Author";
import { PreviewImage } from "./Fields/PreviewImage";
import { Summary } from "./Fields/Summary";
import { lexicalHTML } from "./Fields/LexicalHTML";
import { Content } from "./Fields/Content";
import { Slug } from "./Fields/Slug";
import { Date } from "./Fields/Date";
import exp from "constants";

const Projects: CollectionConfig = {
    slug: 'projects',
    labels: {
        singular: 'Project',
        plural: 'Projecs',
    },
    access: {
        read: () => true,
    },
    fields: [
        Title,
        Date,
        Author,
        PreviewImage,
        Summary,
        lexicalHTML('summary', { name: 'summary_html' }),
        Content,
        lexicalHTML('content', { name: 'content_html' }),
        Slug,
    ],
}

export default Projects