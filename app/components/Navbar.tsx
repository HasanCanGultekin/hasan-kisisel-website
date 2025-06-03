import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Anasayfa</Link>
      <Link href="/about">Hakkımda</Link>
    </nav>
  )
}
