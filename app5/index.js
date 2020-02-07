/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import {Navigator} from 'react-native-deprecated-custom-components';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'main'}}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'main':
              return <CenaPrincipal navigator={navigator} />;
            case 'cliente':
              return <CenaClientes navigator={navigator} />;
            case 'contato':
              return <CenaContatos navigator={navigator} />;
            case 'empresa':
              return <CenaEmpresa navigator={navigator} />;
            case 'servico':
              return <CenaServico navigator={navigator} />;
            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
