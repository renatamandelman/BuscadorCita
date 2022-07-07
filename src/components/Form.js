import React from 'react'
import {useState} from 'react'

const Form = ({cita, setCita}) => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [duenio, setDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const NombreHandler = (e) => {
        setNombreMascota(e.target.value);
    } 

    const DuenioHandler = (e) => {
        setDuenio(e.target.value);
    }

    const FechaHandler = (e) => {
        setFecha(e.target.value);
    }

    const HoraHandler = (e) => {
        setHora(e.target.value);
    }

    const SintomasHandler = (e) => {
        setSintomas(e.target.value);
    }

    const HandleCita = () => {
        // const id = Math.floor(Math.rando(100-1) * 1)
        const id = Math.floor(Math.random() * (9999999 - 1) + 1);

        const newCita = {
            id,
            nombreMascota: nombreMascota,
            duenio: duenio,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };
        setCita([...cita, newCita]);
    }

    const reseteo = () => {
        setNombreMascota(() => "");
        setDuenio(() => "");
        setFecha(() => "");
        setHora(() => "");
        setSintomas(() => "");
    }

    return (
      <>
        <h2>Crear mi cita</h2>
        <div className="">
            <label>Nombre Mascota</label><br/>
            <input autoComplete='off' type="text" name="mascota" className="form-control" placeholder="Nombre mascota" onChange={NombreHandler} value={nombreMascota} /><br/>
            <label>Nombre Dueño</label><br/>
            <input autoComplete='off' type="text" name="propietario" className="form-control" placeholder="Nombre del dueño" onChange={DuenioHandler} value={duenio} /><br/>
            <label>Fecha</label><br/>
            <input autoComplete='off' type="date" name="fecha" className="form-control" onChange={FechaHandler} value={fecha}></input><br/>
            <label>hora</label><br/>
            <input autoComplete='off' type="time" name="hora" className="form-control" onChange={HoraHandler} value={hora} /><br/>
            <label>Sintomas</label><br/>
            <textarea autoComplete='off' name="sintomas" className="form-control" onChange={SintomasHandler} value={sintomas}/> <br/>
            <button className="btn btn-primary w-full" id="btn-sbmt" onClick={()=>{HandleCita(); reseteo();}}>Enviar</button>
        </div>
      </>
    );
    
};

export default Form