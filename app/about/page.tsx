import Navbar from '../components/Navbar' // dikkat: iki nokta var, çünkü bir klasör yukarı çıkıyoruz

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Hakkımda</h1>
        <p>Ben Hasan. Dijital sağlık, kişisel gelişim ve yazarlık yolculuğunda ilerleyen bir girişimciyim.</p>
        <p>Healfy girişiminin kurucu ekibindeyim ve insanların hayatlarına olumlu dokunuşlar yapmayı amaçlıyorum.</p>
        <p>Bu platformda deneyimlerimi, yazılarımı ve projelerimi paylaşacağım.</p>
      </main>
    </>
  )
}
