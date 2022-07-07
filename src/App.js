import './App.css';
import { useEffect, useState } from 'react'
import Form from './components/Form'
import ListadoCita from './components/ListadoCita';

function App() {
    const [cita, setCita] = useState([]);

    return (
        <div className='container'>
            <h1 className='mb-3 text-center'>Gestor de citas:</h1> 

            <div className='row'>
                <div className='col-md-4'>
                    <Form cita={cita} setCita={setCita} />
                </div>
                <div className='col-md-8'>
                    <ListadoCita cita={cita} setCita={setCita} />
                </div>
            </div>
        </div>
    )
}

export default App;
