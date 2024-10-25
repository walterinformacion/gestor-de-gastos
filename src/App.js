import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ShowBills from './components/ShowBills'; // Cambié a mayúscula por convención de componentes
///const mysql = require('mysql'); // Asegúrate de tener esto en el backend
///const conexion = mysql.createConnection({
// host: 'localhost',
 // database: 'bills_db',
 // user: 'root',
//  password: '',
//});

// Conectar a la base de datos
//conexion.connect((error) => {
//  if (error) {
 //   throw error;
 // } else {
 //   console.log('Conexión exitosa');
 // }
// });
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowBills />} /> {/* Componente de muestra */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
