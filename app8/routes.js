import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import FormLogin from './src/FormLogin';
import FormCadastro from './src/FormCadastro';

export default props => (
  <Router>
    <Scene key="formLogin" component={FormLogin} title="Login" />
    <Scene key="formCadastro" component={FormCadastro} title="Cadastro" />
  </Router>
);
