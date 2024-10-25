import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'; 
import { show_alerta } from '../functions';

const ShowBills = () => { 
    const url = 'http://api-bills.run';
    const [bills, setBills] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [option, setOption] = useState(''); 
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getBills();
        return () => {};
    }, []);

    const getBills = async () => {
        try {
            const response = await axios.get(url);
            setBills(response.data); 
        } catch (error) {
            console.error("Error fetching bills:", error); 
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
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-lg-12'>
                        <div className='table-responsive'>
                           <table className='table table-bordered'>
                               <thead>
                                   <tr><th>#</th><th>gasto</th><th>descripcion</th><th>precio</th><th></th></tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {bills.map( (bills,i)=>(
                                        <tr key={bills.id}>
                                        <td>{i + 1}</td>
                                        <td>{bills.name}</td>
                                        <td>{bills.description}</td>
                                        <td>${new Intl.NumberFormat('es-MX').format(bills.price)}</td>
                                        <td>
                                            <button className='btn btn-warning'>
                                                <i className='fa-solid fa-edit'></i>
                                            </button>
                                            &nbsp;
                                            <button className='btn btn-danger'>
                                                <i className='fa-solid fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>                                    
                                    ))
                                    }
                                </tbody>
                           </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal face'>
                {/* Aquí modal */}
            </div>
        </div>
    );
}

export default ShowBills; 

