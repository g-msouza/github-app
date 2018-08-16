import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image,
    KeyboardAvoidingView
} from 'react-native';

import { LoginForm } from './LoginForm'

export default class Login extends Component<{}> {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={ styles.container }>
        <View style={ styles.logoContainer }>
            <Image style={ styles.logo } source={{ uri: 'https://www.google.com.br/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjMsaH00_DcAhXFhZAKHd0HBcoQjRx6BAgBEAU&url=http%3A%2F%2Ffreeciv.wikia.com%2Fwiki%2FFile%3AOctocat.png&psig=AOvVaw0oGOv12dO8anH7UHcledfL&ust=1534477399513090' }}/>
            <Text style={ styles.title }>An app made for github using React Native</Text>
        </View>
        <View style={ styles.formContainer }>
            <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },

    logo: {
        width: 100,
        height: 100,
    },

    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign:'center',
        opacity: 0.8
    }
})