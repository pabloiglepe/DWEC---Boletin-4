import { useEffect, useRef, useState } from "react";

function ContadorAuto() {
    const [segundos, setSegundos] = useState(0);
    const [activo, setActivo] = useState(true);


    useEffect(() => {
        if (!activo) {
            return;
        }

        const inter = setInterval(() => {
            setSegundos(s => s + 1)
        }, 1000);

        return (() => {
            if (inter) {
                clearInterval(inter);
            }
        });

    }, [activo]);


    const handleActivo = () => {
        setActivo(!activo);
    }

    return (
        <div>
            <h1>Tiempo transcurrido {segundos}</h1>

            <button onClick={handleActivo}>{activo ? "Pausar" : "Reanudar"}</button>

            <p> {activo ? "Contador activo" : "Contador pausado"}</p>
        </div>
    );

}

export default ContadorAuto;