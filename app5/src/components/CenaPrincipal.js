import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../../img/logo.png');
const menuCliente = require('../../img/menu_cliente.png');
const menuContato = require('../../img/menu_contato.png');
const menuEmpresa = require('../../img/menu_empresa.png');
const menuService = require('../../img/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#ccc" />
        <BarraNavegacao />
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#B9C941'}
              activeOpacity={0.2}
              onPress={() => {
                this.props.navigator.push({id: 'cliente'});
              }}>
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#61BD8C'}
              activeOpacity={0.2}
              onPress={() => {
                this.props.navigator.push({id: 'contato'});
              }}>
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#EC7148'}
              activeOpacity={0.2}
              onPress={() => {
                this.props.navigator.push({id: 'empresa'});
              }}>
              <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#19D1C8'}
              activeOpacity={0.2}
              onPress={() => {
                this.props.navigator.push({id: 'servico'});
              }}>
              <Image style={styles.imgMenu} source={menuService} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 30,
    alignItems: 'center',
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row',
  },
  imgMenu: {
    margin: 15,
  },
});
