import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Timeline from './components/Timeline'
import Stats from './components/Stats'
import EventVision from './components/EventVision'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Timeline />
        <Stats />
        <EventVision />
        <Team />
      </main>
      <Footer />
    </>
  )
}
