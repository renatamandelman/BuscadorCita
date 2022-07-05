import './App.css';
import { useEffect, useState } from 'react'
import Form from './components/Form'
import Cita from './components/cita'

function App() {
  const [cita, setCita] = useState([]);

  useEffect(() => {
    console.log(cita);
  }, [cita])

  return (
    <div className='home'>
      <h1 className='w-100'>Gestor de citas:</h1> 
      <div className='form'>
        <Form cita={cita} setCita={setCita} />
        
      </div>
     
    </div>

  )
}

export default App;
