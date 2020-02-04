import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] =
    'As mais lindas palavras de amor são ditas no silêncio de um olhar.';
  frases[1] = 'É um amor pobre aquele que se pode medir.';
  frases[2] =
    'Choramos ao nascer porque chegamos a este imenso cenário de dementes.';
  frases[3] = 'O diabo pode citar as Escrituras quando isso lhe convém.';
  frases[4] = 'A alegria evita mil males e prolonga a vida.';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};
// Cria componente
const App = () => {
  const {principal, botao, textoBotao} = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./img/logo.png')} />
      <TouchableOpacity onPress={gerarNovaFrase} style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};
AppRegistry.registerComponent('app2', () => App);

// Formatação
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
