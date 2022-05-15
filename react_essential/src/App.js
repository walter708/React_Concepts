import './App.css';
import {Routes , Route } from 'react-router-dom'
import {Home , About , Events , Contact , Woops404,Services,CompanyHistory ,Location} from './pages'

function App() {
  
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} >
        
      <Route path="services" element={<Services />} />
      <Route path="history" element={<CompanyHistory />} />
      <Route path="location" element={<Location />} />
      
       </Route>
      
      <Route path="/events" element={<Events />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="*" element={<Woops404 />} />
    </Routes>
    </div>

  )
  
}

export default App; 