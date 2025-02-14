import React, {useEffect ,useState} from 'react';

import MenuMovile from './components/MenuMovile';
import DivNotifications from './components/DivNotifications';
import Navs from './components/Navs';

//Modulos
import Principal from './components/modules/Principal';
import Introduccion from './components/modules/Introduccion';
import PasosHacking from './components/modules/PasosHacking';
import Ataques from './components/modules/Ataques';
import Herramientas from './components/modules/Herramientas';

import './App.css';
import './styles/imgs.css';
import './styles/navs.css';
import './styles/notifications.css';

function App() {

  const [modulo, setModulo] = useState(1);
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState(true);
  const [notifications, setNotifications] = useState([]);

useEffect(() => {
    if (notifications.length === 0) return; // No ejecutar si el array está vacío

    const interval = setInterval(() => {
        setNotifications(prevNotifications => {
            if (prevNotifications.length === 0) {
                clearInterval(interval); // Detener el intervalo si ya no hay elementos
                return prevNotifications;
            }
            return prevNotifications.slice(1); // Eliminar el primer elemento (FIFO)
        });
    }, 2000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
}, [notifications.length]); // Se ejecuta solo cuando cambia la longitud del array

  let cambiarModulo = (status) => {
    setModulo(status);
    setMenu(false);
  }

    let cambiarMode = () => {
    setMode(!mode);

    if (mode) {
        document.documentElement.style.setProperty("--black-primary", "#F5F5F5");
        document.documentElement.style.setProperty("--white-primary", "#0d0d0d");
    } else {
        document.documentElement.style.setProperty("--black-primary", "#0d0d0d");
        document.documentElement.style.setProperty("--white-primary", "#F5F5F5");
    }
  }


  return (
    <div className="App">

    {
      menu ? 
        <MenuMovile
          funcionModulo = {cambiarModulo}
          funcionMenu = {setMenu}
        />
      : 
        null
    }

      

      <DivNotifications
        arrayNotifications = {notifications}

      />
      
      <Navs
        funcionModulo = {setModulo}
        funcionMenu = {setMenu}
        funcionMode = {cambiarMode}
        mode = {mode}
      />

      <main className="div-1200">

      {(() => {
          if (modulo === 1) {
            return <Principal
              funcionModulo = {cambiarModulo}
            />;
          } else if (modulo === 2) {
            return <Introduccion/>;
          } else if (modulo === 3) {
            return <PasosHacking/>;
          } else if (modulo === 4) {
            return <Ataques/>;
          } else {
            return <Herramientas
              funcionNotificacion = {setNotifications}
              notifications = {notifications}
            />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
