import nextra from 'nextra'

const withNextra = nextra({
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/bc250-docs'
})
