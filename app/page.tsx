import Navbar from './components/Navbar' // 👈 bu satır bileşeni içeri aktarıyor

export default function Home() {
  return (
    <>
      <Navbar /> {/* 👈 bu satır üst menüyü sayfada gösteriyor */}
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Merhaba, ben Hasan 👋</h1>
        <p>Kişisel markamı bu platformda kuruyorum.</p>
        <p>
          Medium, LinkedIn ve e-kitaplarım ile dijital içeriklerimi paylaşmak için bu siteyi oluşturdum.
        </p>
        <p>Yakında yazılarımı burada okuyabileceksiniz!</p>
      </main>
    </>
  )
}
