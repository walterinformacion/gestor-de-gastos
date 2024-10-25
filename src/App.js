import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ShowBills from './components/showbills'; // Cambié a mayúscula por convención de componentes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowBills />} /> {/* Cambié a Route aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
