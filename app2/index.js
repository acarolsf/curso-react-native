import React from 'react';
import {AppRegistry, View, Text, Image} from 'react-native';

// Cria componente
const App = () => {
  const {principal} = Estilos;
  return (
    <View style={principal}>
      {/* <Image source={require('./img/uvas.png')} /> */}
      <Image source={require({})} />
    </View>
  );
};
AppRegistry.registerComponent('app2', () => App);

// Formatação
const Estilos = {
  principal: {
    paddingTop: 40,
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  topo: {
    flex: 1,
    backgroundColor: '#3388ff',
  },
  conteudo: {
    flex: 12,
    backgroundColor: '#f0f',
  },
  rodape: {
    flex: 1,
    backgroundColor: '#cacaca',
  },
};
