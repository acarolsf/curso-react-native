import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {modificaEmail, modificaSenha} from './actions/AutenticacaoActions';

const formLogin = props => {
  <Image style={styles.bg} source={require('../img/bg.png')}>
    <View style={styles.content}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>WhatsApp</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          value={props.email}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={texto => props.modificaEmail(texto)}
        />
        <TextInput
          value={props.senha}
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          onChangeText={texto => props.modificaSenha(texto)}
        />
        <TouchableHighlight onPress={() => Actions.formCadastro()}>
          <Text style={styles.texto}>Não tem cadastro? Cadastre-se</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.form}>
        <Button title="Acessar" color="#115E54" onPress={() => false} />
      </View>
    </View>
  </Image>;
};

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
  },
  bg: {
    flex: 1,
    // width: null,
  },
  form: {
    flex: 2,
  },
  topo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    color: '#fff',
  },
  input: {
    fontSize: 20,
    // height: 45,
  },
  texto: {
    fontSize: 20,
    color: '#fff',
  },
});

export default connect(
  mapStateToProps,
  {modificaEmail, modificaSenha},
)(formLogin);
