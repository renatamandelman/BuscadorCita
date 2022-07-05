import React from 'react'
import {useState} from 'react'




const Form = ({cita, setCita}) => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [duenio, setDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');


    const NombreHandler = (e) =>{
      setNombreMascota(e.target.value);
  } 
    const DuenioHandler = (e) =>{
      setDuenio(e.target.value);
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
  const HandleCita = () =>{
    const newCita = {
        nombreMascota: nombreMascota,
        duenio: duenio,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
    };
    setCita(cita.push(newCita));
}
    return (
      <>
      <h2>Crear mi cita</h2>
      <div className="centrado">
          <label>Nombre Mascota</label><br/>
          <input type="text" name="mascota" className="u-full-width mb-3" placeholder="Nombre mascota" onChange={NombreHandler} value={nombreMascota} /><br/>
          <label>Nombre Dueño</label><br/>
          <input type="text" name="propietario" className="u-full-width mb-3" placeholder="Nombre del dueño" onChange={DuenioHandler} value={duenio} /><br/>
          <label>Fecha</label><br/>
          <input type="date" name="fecha" className="u-full-width mb-3" onChange={FechaHandler} value={fecha}></input><br/>
          <label>hora</label><br/>
          <input type="time" name="hora" className="u-full-width mb-3" onChange={HoraHandler} value={hora} /><br/>
          <label>Sintomas</label><br/>
          <textarea name="sintomas" className="u-full-width mb-3" onChange={SintomasHandler} value={sintomas}/> <br/>
          <button className="buttonForm" id="btn-sbmt" onClick={()=>{HandleCita();}}>Enviar</button>
      </div>
      </>
    );
    
};

export default Form