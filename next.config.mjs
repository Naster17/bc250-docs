import nextra from 'nextra'
import { remarkAlert } from 'remark-github-blockquote-alert'

const withNextra = nextra({
  search: {
    codeblocks: false
  },
  mdxOptions: {
    remarkPlugins: [[remarkAlert]]
  }
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/bc250-docs'
})
