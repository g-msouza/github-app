import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';

export default class LoginForm extends Component<{}> {
  render() {
    return (
      <View style={ styles.container }>
        <StatusBar 
            barStyle="light-content" // seta a cor do texto da status bar 
            />

        <TextInput 
            placeholder="username or email"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            returnKeyType="next"
            keyboardType="email-address" // ajusta o teclado adicionando um @ para digitar um email
            autoCapitalize="none" // não deixa o teclado em caps-lock ao digitar a primeira letra
            autoCorrect={false} // desabilita o corretor
            onSubmitEditing={ () => this.passwordInput.focus() }
            style={ styles.input } />

        <TextInput 
            placeholder="password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            secureTextEntry // esconde a senha
            returnKeyType="send"
            ref={ (input) => this.passwordInput = input }
            style={ styles.input } />
        
        <TouchableOpacity style={ styles.buttonContainer }>
            <Text style={ styles.buttonText }>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },

    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 700,
    },
})