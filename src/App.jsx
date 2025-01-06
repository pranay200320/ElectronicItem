import Banner from "./components/Banner/Banner"
import Category from "./components/Category/Category"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Insta from "./components/Insta/Insta"
import Productgrid from "./components/Productgrid/Productgrid"
import Reviewes from "./components/Reviewes/Reviewes"
import Services from "./components/Services/Services"
import Type from "./components/Type/Type"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Type />
      <Services />
      <Productgrid />
      <Banner />
      <Reviewes />
      <Insta />
      <Footer />
    </>
  )
}

export default App
