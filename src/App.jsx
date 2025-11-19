import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/WelcomeEjer1'
import NombreFormulario from './components/NombreFormularioEjer2'
import Cronometro from './components/CronometroEjer3'
import ContadorAuto from './components/ContadorAutoEjer4'
import PanelUsuario from './components/PanelUsuarioEjer7'

const EstilosEjer7 = () => (
  <style>{`
        body.light-theme {
            background-color: #fff; 
            color: #333; 
            transition: background-color 0.3s ease, color 0.3s ease;;
        }
        
        body.dark-theme {
            background-color: #000; 
            color: #f0f0f0; 
            transition: background-color 0.3s ease, color 0.3s ease;;
        }
    `}</style>
);


function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      {/* <Welcome /> */}
      {/* <NombreFormulario /> */}
      {/* <Cronometro /> */}
      {/* <ContadorAuto /> */}
      {/* Ejercicio 7 */}


      <EstilosEjer7 />
      {isPanelOpen ? (
        <PanelUsuario onClose={handleClosePanel} />
      ) : (
        <button onClick={() => setIsPanelOpen(true)}>
          Abrir Panel de Usuario
        </button>
      )}


    </>
  )
}

export default App
