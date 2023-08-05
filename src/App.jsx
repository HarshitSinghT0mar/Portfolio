import Navbar from './Components/Navbar'

import './App.css'
import About from './About'
import TechStack from './Components/TechStack'

import Projects from './Components/Projects'

function App() {
  
  return (<>
    <div className='app-container'>
      {/* <Navbar /> */}
      <About />
      <TechStack />
      <Projects />
      
    </div>
    </>
  )
}

export default App
