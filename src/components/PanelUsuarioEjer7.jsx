import { useEffect, useState } from "react";

const fetchUserData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'Ada Lovelace', email: 'ada@example.com' });
        }, 1500);
    });
};


function PanelUsuario({ onClose }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const initialTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchUserData().then(data => {
                setUser(data);
                setIsLoading(false);
            });
        }, 100);

        return () => {
            console.log('Panel desmontado');
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        const root = document.body;
        root.classList.remove('light-theme', 'dark-theme');

        if (theme === 'dark') {
            root.classList.add('dark-theme');
        } else {
            root.classList.add('light-theme');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(tema => (tema === 'light' ? 'dark' : 'light'));
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div style={{
            padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000'}}>
            <h1>Aplicación Principal</h1>
            <h3>Panel de Usuario</h3>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Tema actual:</strong> {theme}</p>

            <button onClick={toggleTheme} style={{ marginRight: '10px' }}>
                Cambiar a modo {theme === 'light' ? 'Oscuro' : 'Claro'}
            </button>

            <button onClick={onClose}>
                Cerrar panel
            </button>

            <p style={{ marginTop: '10px', fontSize: '12px' }}>*Revisa la consola para ver el mensaje de desmontaje.</p>
        </div>
    );

}

export default PanelUsuario;