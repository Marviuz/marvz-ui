// source.config.ts
import { defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
var docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
  },
});
export { docs };
