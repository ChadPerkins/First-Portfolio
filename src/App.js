import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from './components/header/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
