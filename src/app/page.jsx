import Header from "./components/header"
import Hero from "./components/hero"
import CourseCards from './components/courses'
import Statistic from "./components/statistic"
import Map from "./components/map"
import Footer from "./components/footer"
const Page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <CourseCards/>
      <Statistic/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Page