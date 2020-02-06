/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import ListaItems from './src/components/listaItems';

export default class app4 extends Component {
  render() {
    return <ListaItems />;
  }
}

AppRegistry.registerComponent('app4', () => app4);
