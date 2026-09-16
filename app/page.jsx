import Link from 'next/link'

export default function IndexPage() {
  return (
    <div style={{ textAlign: 'center', margin: '15vh 0' }}>
      <h1 style={{ fontSize: 56, fontWeight: 'bold' }}>BC250 Docs</h1>
      <p style={{ opacity: '70%', marginTop: 12 }}>
        Documentation for the BC250 board.
      </p>
      <p style={{ marginTop: 24 }}>
        <Link href="/getting-started">Get started →</Link>
      </p>
    </div>
  )
}
