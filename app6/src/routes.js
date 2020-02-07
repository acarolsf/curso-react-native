import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Principal from './components/Principal';
import Sobre from './components/Sobre';
import OutrosJogos from './components/OutrosJogos';
import Resultados from './components/Resultados';

const Routes = () => {
  return (
    <Router sceneStyle={{paddingTop: 50}}>
      <Scene
        key="principal"
        component={Principal}
        initial
        title="Cara ou Coroa"
      />
      <Scene key="sobrejogo" component={Sobre} title="Sobre o Jogo" />
      <Scene key="outrosjogos" component={OutrosJogos} title="Outros Jogos" />
      <Scene key="resultado" component={Resultados} title="Resultado" />
    </Router>
  );
};
export default Routes;
