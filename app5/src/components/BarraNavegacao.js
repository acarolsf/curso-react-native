import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableHighlight} from 'react-native';

const btnvoltar = require('../../img/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
      return (
        <View
          style={[styles.barraTitulo, {backgroundColor: this.props.backColor}]}>
          <TouchableHighlight
            underlayColor={this.props.backColor}
            activeOpacity={0.2}
            onPress={() => {
              this.props.navigator.pop();
            }}>
            <Image source={btnvoltar} />
          </TouchableHighlight>
          <Text style={styles.titulo}>ATM Consultoria</Text>
        </View>
      );
    }
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60,
    flexDirection: 'row',
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
});
