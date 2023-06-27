import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import Feature from './components/feature'
import Map from './components/map'
import LocalEvent from './components/localEvent'
import Modal from './components/modal'
import FooterModal from './components/footerModal'

export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Feature/>
      <Map/>
      <LocalEvent/>
      <Modal/>
      <FooterModal/>
      <Footer />
    </>
  )
}
