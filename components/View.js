import React from 'react';                 // import React
import { View, Text, StyleSheet } from 'react-native';    // import Core components
const Views = () => {
    return (
        <View styles={StyleSheet.containers}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Welcome to React Native!!!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Views;
