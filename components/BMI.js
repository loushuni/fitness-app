import React, { Component, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Layout, Text, Input, Button, Select } from '@ui-kitten/components';
import firebase from './FirebaseConfig';

const BMI = () => {

    const [weight, setWeight] = React.useState('');

    const [height, setHeight] = React.useState('');

    const [result, setResult] = React.useState(0);

    useEffect(() => {
        console.log('mounted');
        var userId = firebase.auth().currentUser.uid;
        var s = firebase.database().ref('users/' + userId);
        s.on('value', function (snapshot) {
            const data = snapshot.val();
            setWeight(data.weight);
            setHeight(data.height);
        }.bind(this));
    }, []);

    const onPressed = () => {
        if (weight == "") {
            Alert.alert("Please enter your weight");
        } else if (isNaN(weight)) {
            Alert.alert("Please enter a valid number for your weight");
        } else if (height == "") {
            Alert.alert("Please enter your height");
        } else if (isNaN(height)) {
            Alert.alert("Please enter a valid number for your height");
        }
        setResult((+weight * 703 / height / height).toFixed(2));
    }

    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Layout style={{ flexDirection: 'column', marginLeft: 50 }}>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10, marginTop: 8 }}>Weight:</Text>
                    <Input
                        placeholder='Enter Your Weight'
                        style={styles.input}
                        value={weight}
                        onChangeText={setWeight} />
                    <Text style={{ paddingTop: 10 }}>lb</Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ marginRight: 10, marginTop: 8 }}>Height:</Text>
                    <Input
                        placeholder='Enter Your Height'
                        style={styles.input}
                        value={height}
                        onChangeText={setHeight} />
                    <Text style={{ paddingTop: 10 }}>inch</Text>
                </Layout>
                <Layout style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Button style={styles.button} onPress={onPressed}>Calculate BMI</Button>
                    <Text style={styles.result}>{result}</Text>
                </Layout>
            </Layout>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 27,
        marginTop: 80,
        marginBottom: 200,
        paddingTop: 10
    },
    button: {
        width: '50%',
        marginRight: 10
    },
    input: {
        width: '55%',
        paddingRight: 10
    },
    result: {
        borderWidth: 1,
        borderColor: '#101426',
        paddingHorizontal: 40,
        paddingTop: 11,
        paddingBottom: 11,
        backgroundColor: '#1A2138',
        width: '35%'
    }
})

export default BMI;