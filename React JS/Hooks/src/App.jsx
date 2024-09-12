import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import './App.css';
import UseEffect from './UseEffect'; // Your UseEffect component
import TodoList from './TodoList';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          {/* Use Link component for navigation */}
          <Link to={'/todoList'}>Todo List</Link>
          <Link to={'/useEffect'}>Use Effect</Link>

        </nav>
        <Routes>
          <Route path='/todoList' element={<TodoList />} />
         
          <Route path='/useEffect' element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
