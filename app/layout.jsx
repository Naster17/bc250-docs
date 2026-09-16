import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s - BC250 Docs'
  },
  description: 'BC250 documentation',
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
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={<Banner storageKey="bc250-welcome">Welcome to BC250 Docs</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © BC250 Docs.</Footer>}
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
