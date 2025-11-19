import { useEffect, useState } from "react";

const fetchUserData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'Ada Lovelace', email: 'ada@example.com' });
        }, 1500);
    });
};


function PanelUsuario({ onClose }) {
    const [usuario, setUsuario] = useState(null);
    const [estaCargando, setEstaCargando] = useState(true);

    const temaInicial = localStorage.getItem('theme') || 'light';
    const [tema, setTema] = useState(temaInicial);

    useEffect(() => {
        console.log("Panel montado");

        const timeout = setTimeout(() => {
            fetchUserData().then(data => {
                setUsuario(data);
                setEstaCargando(false);
            });
        }, 100);

        return () => {
            console.log('Panel desmontado');
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        const root = document.body;
        root.classList.remove('light-theme', 'dark-theme');

        if (tema === 'dark') {
            root.classList.add('dark-theme');
        } else {
            root.classList.add('light-theme');
        }

        localStorage.setItem('theme', tema);
    }, [tema]);

    const cambiarTema = () => {
        setTema(tema => (tema === 'light' ? 'dark' : 'light'));
    };

    if (estaCargando) {
        return <div>Cargando...</div>;
    }

    return (
        <div style={{
            padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: tema === 'dark' ? '#000' : '#fff',
            color: tema === 'dark' ? '#fff' : '#000'
        }}>
            <h1>Aplicación Principal</h1>
            <h3>Panel de Usuario</h3>
            <p><strong>Nombre:</strong> {usuario.name}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Tema actual:</strong> {tema}</p>

            <button onClick={cambiarTema} style={{ marginRight: '10px' }}>
                Cambiar a modo {tema === 'light' ? 'Oscuro' : 'Claro'}
            </button>

            <button onClick={onClose}>
                Cerrar panel
            </button>

            <p style={{ marginTop: '10px', fontSize: '12px' }}>*Revisa la consola para ver el mensaje de desmontaje.</p>
        </div>
    );

}

export default PanelUsuario;