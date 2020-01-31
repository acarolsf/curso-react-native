import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
};

const App = () => {
  return (
    <View>
      <Text>Gerador de Números Randômicos</Text>
      <Button title="Gerar Número Randômico" onPress={geraNumeroAleatorio} />
    </View>
  );
};

AppRegistry.registerComponent('appp1', () => App);
