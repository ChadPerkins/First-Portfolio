import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
