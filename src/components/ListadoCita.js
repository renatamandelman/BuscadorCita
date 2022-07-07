import React, { useEffect } from "react";
import Cita from "./cita";


const ListadoCita = ({ cita, setCita }) => {
    const eliminar = (id) => {
        setCita(cita.filter(c => c.id !== id));
    };

    return (
        <div>
            {cita.length > 0 && cita.map((c, index) => (
                <div className="mb-3">
                    <Cita key={index} cita={c} eliminar={()=> eliminar(c.id)}/>
                </div>
            ))}
        </div>
    )
}

export default ListadoCita;