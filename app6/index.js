/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import Routes from './src/routes';

export default class App extends Component {
  render() {
    return <Routes />;
  }
}

AppRegistry.registerComponent('app6', () => App);
