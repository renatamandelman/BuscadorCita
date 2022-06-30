import React from 'react'
import {useState} from 'react'


const Form = () => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [duenio, setDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');


    const NombreHandler = (e) =>{
      setNombre(e.target.value);
  } 
  const DuenoHandler = (e) =>{
      setDueno(e.target.value);
  }
  const FechaHandler = (e) =>{
      setFecha(e.target.value);
  }
  const HoraHandler = (e) =>{
      setHora(e.target.value);
  }
  const SintomasHandler = (e) =>{
      setSintomas(e.target.value);
  }
    return (
      <div>
        <input type="text" id="message" name="message" onChange={handleChange} value={name}/>
        <input type="text" id="message" name="message" onChange={handleChange} value={lastName}/>


      </div>
    );
    
};

export default Form