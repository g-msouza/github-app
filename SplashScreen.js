import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SplashScreen extends Component<{}> {
    render() {
        return ( 
            <View style={ styles.wrapper }>
                <View style={ styles.titleWrapper }>
                    <Text style={ styles.title }>Github App</Text>
                </View>
                <View style={ styles.subtitleWrapper }>
                    <Text style={ styles.subtitle }>Powered by React Native</Text>
                </View>
            </View>
        );
    }
}

// objeto de estilos
const styles = StyleSheet.create({
    wrapper: {
        flex: 1, // faz o componente ocupar toda a tela
        alignItems: 'center', // alinha o item horizontalmente ao centro
        alignContent: 'center', // alinha o item verticalmente ao centro
        backgroundColor: '#27ae60' // muda cor de fundo
    },

    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#FFF', // deixa a cor do texto branca
        fontSize: 35, // aumenta a fonte
        fontWeight: 'bold', // deixa em negrito
    },

    subtitle: {
        color: '#FFF',
        fontWeight: '200',
        paddingBottom: 20,
    },
})