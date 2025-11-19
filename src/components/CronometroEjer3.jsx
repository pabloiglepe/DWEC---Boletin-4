import React, { useEffect, useState } from "react";

function Cronometro() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const inter = setInterval(() => {
            setSegundos(s => s + 1)
        }, 1000);

        return (() => {
            clearInterval(inter);
            console.log("Cronometro parado");
        });

    }, [segundos]);

    return (
        <div>
            <h1>El tiempo transcurrido es {segundos} segs</h1>
        </div>
    );
}

export default Cronometro;