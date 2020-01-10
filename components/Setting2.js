import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, Layout } from '@ui-kitten/components';

export default class Setting2 extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/6.png')} style={styles.backgroundImage}>
                    <Text style={styles.title}>Choose a Goal</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Setting3')}
                            style={styles.button}
                            textStyle={styles.text}>
                            Lose Weight
                        </Button>
                        <Button
                            onPress={() => this.props.navigation.navigate('Setting3')}
                            style={styles.button}
                            textStyle={styles.text}>
                            Get Fitter
                        </Button>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 27,
        marginTop: 80,
        marginBottom: 200,
        paddingTop: 10
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 16,
        textAlign: 'center',
        width: '85%',
        height: 50,
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        marginTop: 170,
        alignItems: 'center'
    },
    button: {
        margin: 10,
        height: '20%',
        width: '85%'
    }
});