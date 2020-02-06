/**
 * @format
 */
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Items from './items';

class ListaItems extends Component {
  constructor(props) {
    super(props);

    this.state = {listaItens: []};
  }
  componentWillMount = () => {
    axios
      .get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => {
        this.setState({listaItens: response.data});
      })
      .catch(() => {
        console.log('Erro ao recuperar os dados');
      });
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#DDD'}}>
        {this.state.listaItens.map(item => (
          <Items key={item.titulo} item={item} />
        ))}
      </ScrollView>
    );
  }
}

export default ListaItems;
