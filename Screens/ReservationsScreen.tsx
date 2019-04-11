import React from 'react'
import { Component } from 'react';

import { Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../Theme/styles';
import { strings } from '../Values/strings';
import { mainScreens } from '../Navigation/mainNavigator';

const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
]

const ReservationsScreen = () => <View>
    <FlatList data={data} keyExtractor={item => String(item.id)} renderItem={({ item }) =>
        <View style={styles.flatListRow}>
            <Text style={styles.h2}>Reservation {item.id}</Text>
        </View>}
    />
</View>

ReservationsScreen.navigationOptions = ({ navigation }) => ({
    title: strings.reservationsTitle,
    headerRight: <Button title={strings.add} onPress={() => navigation.navigate(mainScreens.NewReservation)}></Button>
})

export default ReservationsScreen; 