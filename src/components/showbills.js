import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'; // Corregido la importación
import { show_alerta } from '../functions';

const ShowBills = () => { // Cambié a ShowBills
    const url = 'http://api-bills.run';
    const [bills, setBills] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [option, setOption] = useState(''); // Corregí la variable a 'setOption'
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getBills(); // Cambié a getBills para que siga la convención
        return () => {};
    }, []);

    const getBills = async () => {
        try {
            const response = await axios.get(url);
            setBills(response.data); // Corregí a response.data para establecer el estado
        } catch (error) {
            console.error("Error fetching bills:", error); // Manejo de errores
        }
    };

    return (
        <div className='app'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-4'>
                        <div className='d-grid mx-auto'>
                            <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalbills'>
                                <i className='fa-solid fa-circle-plus'></i> Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal face'>
                {/* Aquí puedes agregar el contenido del modal */}
            </div>
        </div>
    );
}

export default ShowBills; // Cambié a ShowBills

