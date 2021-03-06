/**
 * @format
 */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Items extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image
            source={{uri: this.props.item.foto}}
            style={{height: 100, width: 100}}
          />
        </View>
        <View style={styles.detalhes}>
          <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
          <Text style={styles.txtvalor}>R$ {this.props.item.valor}</Text>
          <Text style={styles.txtitens}>
            Local: {this.props.item.local_anuncio}
          </Text>
          <Text style={styles.txtitens}>
            Data de Publicação: {this.props.item.data_publicacao}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  foto: {
    width: 102,
    height: 102,
  },
  detalhes: {
    marginLeft: 20,
    flex: 1,
  },
  txtTitulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  txtvalor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtitens: {
    fontSize: 16,
  },
});

export default Items;
