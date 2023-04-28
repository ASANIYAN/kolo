import Control from "./components/control/Control"
import Featured from "./components/featured/Featured"
import Footer from "./components/footer/Footer"
import Grids from "./components/grids/Grids"
import Hero from "./components/hero/Hero"
import Journey from "./components/journey/Journey"
import Meet from "./components/meet/Meet"
import Navbar from "./components/navbar/Navbar"
import Testimonial from "./components/testimonials/Testimonial"
import Use from "./components/use/Use"

function App() {

  return (
    <section>
      <Navbar />
      <Hero />
      <Featured />
      <Control />
      <Grids />
      <Journey />
      <Meet />
      <Testimonial />
      <Use />
      <Footer />
    </section>
  )
}

export default App
