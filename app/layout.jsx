import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import 'remark-github-blockquote-alert/alert.css'

export const metadata = {
  title: {
    template: '%s - BC250 Docs'
  },
  description: 'BC250 documentation: hardware, BIOS, Linux, drivers, tuning.',
  applicationName: 'BC250 Docs',
  generator: 'Next.js + Nextra'
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>BC250</b>{' '}
          <span style={{ opacity: '60%' }}>Docs</span>
        </div>
      }
      projectLink="https://github.com/Naster17/bc250-docs"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              MIT {new Date().getFullYear()} (c) BC250 Docs. Built with Nextra.
            </Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/Naster17/bc250-docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
