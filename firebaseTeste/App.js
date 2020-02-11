/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {pontuacao: ''};
  }
  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBaJCDO3UVoHKgvZ8hK1o8YZTlQtK5ha-E',
      authDomain: 'fir-teste-e26a4.firebaseapp.com',
      databaseURL: 'https://fir-teste-e26a4.firebaseio.com',
      projectId: 'fir-teste-e26a4',
      storageBucket: 'fir-teste-e26a4.appspot.com',
      messagingSenderId: '1025395702851',
      appId: '1:1025395702851:web:eb42cbbce6110349e2e8f6',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  save() {
    var funcionarios = firebase.database().ref('funcionarios');
    // database.ref('pontuacao').remove();
    funcionarios
      .push() //push gera um identificador unico
      .set({
        nome: 'Ana Carolina',
        altura: '1.48',
        peso: '60kg',
      });
  }

  remover() {
    var funcionarios = firebase.database().ref('funcionarios');
    funcionarios.remove();
  }

  listar() {
    var pontuacao = firebase.database().ref('pontuacao');
    pontuacao.on('value', snapshot => {
      var pontos = snapshot.val();
      this.setState({pontuacao: pontos});
    });
  }

  cadastrar() {
    var email = 'cscarol20@gmail.com';
    var senha = 'carol12345';

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(email, senha).catch(erro => {
      //erro.code e erro.message
      var mensagemErro = '';
      switch (erro.code) {
        case 'auth/weak-password':
          mensagemErro = 'Sua senha precisa ter 6 caracteres';
          break;
        case 'auth/invalid-email':
          mensagemErro = 'Email inválido!';
          break;
        case 'auth/operation-not-allowed':
          mensagemErro = 'Operação não permitida';
          break;
        case 'auth/email-already-in-use':
          mensagemErro = 'Email já cadastrado!';
          break;
        default:
          break;
      }

      alert(mensagemErro);
    });
  }

  isAuth() {
    const usuario = firebase.auth();
    // const usuarioAtual = usuario.currentUser;

    // if (usuarioAtual) {
    //   alert('usuario logado');
    // } else {
    //   alert('usuario nao logado');
    // }
    usuario.onAuthStateChanged(usuarioAtual => {
      if (usuarioAtual) {
        alert('usuario logado');
      } else {
        alert('usuario nao logado');
      }
    });
  }

  logout() {
    const usuario = firebase.auth();
    usuario.signOut();
  }
  login() {
    var email = 'cscarol20@gmail.com';
    var senha = 'carol12345';

    const usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(email, senha).catch(erro => {
      //erro.code e erro.message
      var mensagemErro = '';
      switch (erro.code) {
        case 'auth/user-disabled':
          mensagemErro = 'Usuário não habilitado';
          break;
        case 'auth/invalid-email':
          mensagemErro = 'Email inválido!';
          break;
        case 'auth/user-not-found':
          mensagemErro = 'Usuário não encontrado.';
          break;
        case 'auth/wrong-password':
          mensagemErro = 'Email ou senha inválido';
          break;
        default:
          break;
      }

      alert(mensagemErro);
    });
  }
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.cadastrar();
          }}
          title="Cadastrar"
          color="#841584"
          accessibilityLabel="Cadastrar"
        />
        <Button
          onPress={() => {
            this.isAuth();
          }}
          title="Verificar usuario"
          color="#841584"
          accessibilityLabel="Verificar"
        />
        <Button
          onPress={() => {
            this.logout();
          }}
          title="Deslogar"
          color="#841584"
          accessibilityLabel="Deslogar"
        />
        <Button
          onPress={() => {
            this.login();
          }}
          title="Logar"
          color="#841584"
          accessibilityLabel="Logar"
        />
      </View>
    );
  }
}
