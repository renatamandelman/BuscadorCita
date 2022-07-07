import React from 'react'

const Cita = ({ cita, eliminar }) => {  
    return (
        <div class="card">
            <div class="card-body">
                <p>Nombre de la mascota: <span>{cita.nombreMascota}</span></p>
                <p>Nombre del dueño: <span>{cita.duenio}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                <button className="btn btn-danger" onClick={eliminar}>Eliminar cita ×</button>
            </div>
        </div>          
    )
}


export default Cita;
