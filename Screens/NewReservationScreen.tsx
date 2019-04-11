import React from 'react'
import { Component } from 'react';

import { Text, View, Button } from 'react-native';
import { styles } from '../Theme/styles';
import { TextInput } from 'react-native-gesture-handler';
import { strings } from '../Values/strings';

const NewReservationScreen = () => <View style={styles.form}>

    <Text style={styles.h1}>Your Info</Text>

    <View style={styles.formGroup}>
        <Text style={styles.label}>First name</Text>
        <TextInput placeholder={strings.firstNamePlaceholder} textContentType={'givenName'} style={styles.textInput} />
    </View>

    <View style={styles.formGroup}>
        <Text style={styles.label}>Last name</Text>
        <TextInput placeholder={strings.lastNamePlaceholer} textContentType={'familyName'} style={styles.textInput} />
    </View>

    <Text style={styles.h1}>Hotel</Text>

    <View style={styles.formGroup}>
        <Text>Details...</Text>
    </View>

</View>

NewReservationScreen.navigationOptions = ({ navigation }) => ({
    title: strings.newReservationTitle,
    headerRight: <Button title={strings.bookNow} onPress={() => navigation.goBack()}></Button>
})

export default NewReservationScreen;