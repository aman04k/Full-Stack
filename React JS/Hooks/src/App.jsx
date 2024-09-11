import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import './App.css';
import UseEffect from './UseEffect'; // Your UseEffect component

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          {/* Use Link component for navigation */}
          <Link to={'/useEffect'}>Use Effect</Link>
        </nav>
        <Routes>
          <Route path='/useEffect' element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
