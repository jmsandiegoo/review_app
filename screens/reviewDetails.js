import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    console.log(route);
    const item = route.params;
    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>{ navigation }</Text> */}
            <Text>{ item.title }</Text>
            <Text>{ item.body }</Text>
            <Text>{ item.rating }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});