/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Topo, Painel, Resultado} from './src/components/index';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {num1: '', num2: '', operacao: 'soma', resultado: ''};

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }
  calcular() {
    const num1 = parseFloat(this.state.num1);
    const num2 = parseFloat(this.state.num2);
    let resultado = 0;
    switch (this.state.operacao) {
      case 'soma':
        resultado = num1 + num2;
        break;
      case 'subtracao':
        resultado = num1 - num2;
        break;
      case 'multiplicacao':
        resultado = num1 * num2;
        break;
      case 'divisao':
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }
    this.setState({resultado: resultado.toString()});
  }
  atualizaValor(nome, numero) {
    const obj = {};
    obj[nome] = numero;
    this.setState(obj);
  }
  atualizaOperacao(op) {
    this.setState({operacao: op});
  }
  render() {
    return (
      <View>
        <Topo />
        <View style={styles.main}>
          <Resultado resultado={this.state.resultado} />
          <Painel
            num1={this.state.num1}
            num2={this.state.num2}
            operacao={this.state.operacao}
            calcular={this.calcular}
            atualizaValor={this.atualizaValor}
            atualizaOperacao={this.atualizaOperacao}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
  },
});
