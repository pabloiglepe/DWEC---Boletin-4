import { useEffect, useState } from "react";

function NombreFormulario() {
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        setMensaje(`${nombre}`)
    }, [nombre]);

    const manejarNombre = (e) => {
        setNombre(e.target.value);
    }

    return (
        <div>
            <label htmlFor="nombreUsuario">Usuario: </label>
            <input name="nombreUsuario" type="text" value={nombre} onChange={manejarNombre} />

            <p>
                El mensaje es: <strong>{mensaje}</strong>
            </p>
        </div>
    );
}

export default NombreFormulario;