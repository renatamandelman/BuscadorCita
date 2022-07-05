import './App.css';
import {useEffect, useState} from 'react'
import Form from './components/Form'

function App() {
  const [cita, setCita] = useState([]);

  useEffect(() => {
    console.log(cita);
  },[cita])

  return(
    <div className='home'>
    <div className='form'>
    <Form cita={cita} setCita={setCita}/>

    </div>
   </div>
    )
}

export default App;
