import React from 'react';
import {AppRegistry, View, Text} from 'react-native';

// Cria componente
const App = () => {
  const {estiloView, estiloTexto} = Estilos;
  return (
    <View style={estiloView}>
      <Text style={estiloTexto}>Frases do Dia</Text>
    </View>
  );
};
AppRegistry.registerComponent('app2', () => App);

// Formatação
const Estilos = {
  estiloTexto: {
    fontSize: 20,
    backgroundColor: '#3C3',
    color: '#fff',
    height: 60,
    width: 60,
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
};
