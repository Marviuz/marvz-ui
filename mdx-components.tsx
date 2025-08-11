import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ComponentInstall } from '~/components/component-install';
import { ComponentPreview } from '~/components/component-preview';
import { Usage } from '~/components/usage';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentInstall,
    Usage,
    ...components,
  };
}
