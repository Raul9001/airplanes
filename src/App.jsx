
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from "./components/Navbar"
import Introduction from "./components/Introduction"
import Card1 from "./components/Card1"
import About from "./components/About"
import Benefits from "./components/Benefits"
import Parallax from "./components/Parallax"






function App() {
  // const [count, setCount] = useState(0)

  return (
    < >
    <Navbar />
   <Introduction/>
   <Card1/>
   <About/>
   <Benefits/>
   <Parallax/>

  
    </>
  )
}

export default App
