import Link from 'next/link'
import { Cards } from 'nextra/components'

const cardLinks = [
  { title: 'Getting Started', href: '/getting-started/', desc: 'Install, flash, first boot checklist.' },
  { title: 'Hardware', href: '/hardware/', desc: 'Specs, pinouts, power and cooling.' },
  { title: 'System', href: '/system/8core-unlock/', desc: '8-core unlock, governor, sensors.' },
  { title: 'Showcase', href: '/showcase/', desc: 'Callouts, tabs, steps, tables, diagrams.' }
]

export default function IndexPage() {
  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '8vh 1.5rem 10vh' }}>
      <p style={{ opacity: 0.6, letterSpacing: 2, fontSize: 12 }}>BC250 DOCUMENTATION</p>
      <h1 style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.05, margin: '12px 0 16px' }}>
        BC250 Docs
      </h1>
      <p style={{ opacity: 0.75, fontSize: 18, lineHeight: 1.6 }}>
        Hardware notes, BIOS, Linux setup, drivers and tuning for the BC250 board.
        Static site built with Nextra, hosted on GitHub Pages.
      </p>
      <p style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link
          href="/getting-started/"
          style={{
            background: '#fff',
            color: '#000',
            padding: '10px 22px',
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: 'none'
          }}
        >
          Get started
        </Link>
        <Link
          href="/showcase/"
          style={{
            border: '1px solid #444',
            padding: '10px 22px',
            borderRadius: 10,
            textDecoration: 'none'
          }}
        >
          Component showcase
        </Link>
      </p>
      <div className="nextra-cards x:mt-4 x:gap-4 x:grid not-prose" style={{ marginTop: 48, ['--rows']: 2 }}>
        {cardLinks.map(card => (
          <Link
            key={card.href}
            href={card.href}
            className="nextra-card x:flex x:flex-col x:justify-start x:overflow-hidden x:rounded-lg x:border x:border-gray-200 x:text-current x:no-underline x:dark:shadow-none x:hover:shadow-gray-100 x:dark:hover:shadow-none x:shadow-gray-100 x:active:shadow-sm x:active:shadow-gray-200 x:transition-all x:duration-200 x:hover:border-gray-300 x:bg-transparent x:shadow-sm x:dark:border-neutral-800 x:hover:bg-slate-50 x:hover:shadow-md x:dark:hover:border-neutral-700 x:dark:hover:bg-neutral-900"
          >
            <span className="x:flex x:font-semibold x:items-center x:gap-2 x:p-4 x:text-gray-700 x:hover:text-gray-900 x:dark:text-neutral-200 x:dark:hover:text-neutral-50">
              <span className="_truncate">{card.title}</span>
              <span aria-hidden="true"> -&gt; </span>
            </span>
            <div style={{ padding: '0 1rem 1rem', opacity: 0.75 }}>{card.desc}</div>
          </Link>
        ))}
      </div>
      <Cards style={{ display: 'none' }}>
        <Cards.Card title="hidden" href="/getting-started/" arrow={false}>
          <>hidden</>
        </Cards.Card>
      </Cards>
    </div>
  )
}
