import { useEffect, useState } from "react";

function Welcome() {
    const [mensaje, setMensaje] = useState("Bienvenido");

    useEffect(() => {
        console.log("Componente montado");

        setInterval(() => {
            setMensaje("Hola usuario")
        }, 3000);
        
    }, [mensaje]);


    return (
        <h1>{mensaje}</h1>
    );
}

export default Welcome;