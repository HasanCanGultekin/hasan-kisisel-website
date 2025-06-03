import Navbar from '../components/Navbar'

export default function Posts() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Yazılarım</h1>
        <ul>
          <li>
            <a href="https://medium.com/@seninkullaniciadın" target="_blank">
              📝 Medium'da yayınladığım yazılar
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/seninprofilin" target="_blank">
              📎 LinkedIn içeriklerim
            </a>
          </li>
          <li>
            📘 Yakında: "İlk e-kitabım" burada duyurulacak!
          </li>
        </ul>
      </main>
    </>
  )
}
