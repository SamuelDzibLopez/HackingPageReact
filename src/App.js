import React, {useState} from 'react';

import logo from './logo.svg';

import MenuMovile from './components/MenuMovile';
import DivNotifications from './components/DivNotifications';
import Navs from './components/Navs';

import Principal from './components/modules/Principal';
import Introduccion from './components/modules/Introduccion';
import PasosHacking from './components/modules/PasosHacking';
import Ataques from './components/modules/Ataques';

import './App.css';
import './styles/imgs.css';
import './styles/navs.css';
import './styles/notifications.css';

function App() {

  let [modulo, setModulo] = useState(1);
  let [menu, setMenu] = useState(false);

  let cambiarModulo = (status) => {
    setModulo(status);
    setMenu(false);
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

      

      <DivNotifications/>
      
      <Navs
        funcionModulo = {setModulo}
        funcionMenu = {setMenu}

      />

      <main className="div-1200">

      {(() => {
          if (modulo === 1) {
            return <Principal/>;
          } else if (modulo === 2) {
            return <Introduccion/>;
          } else if (modulo === 3) {
            return <PasosHacking/>;
          } else if (modulo === 4) {
            return <Ataques/>;
          } else {
            return <p>Estado 5: Sesión cerrada</p>;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
