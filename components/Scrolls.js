import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
const Scrolls = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroller}>
                <View style={styles.boxLarge}></View>
                <ScrollView horizontal style={{ borderWidth: 1 }}>
                    <View style={styles.boxSmall}></View>
                    <View style={styles.boxSmall}></View>
                    <View style={styles.boxSmall}></View>
                </ScrollView>
                <View style={styles.boxSmall}></View>
                <View style={styles.boxLarge}></View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Scrolls;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroller: {
        marginHorizontal: 4,
    },
    boxSmall: {
        width: 200,
        height: 200,
        marginBottom: 5,
        marginRight: 5,
        backgroundColor: 'skyblue',
    },
    boxLarge: {
        width: 300,
        height: 300,
        marginBottom: 5,
        marginRight: 5,
        backgroundColor: 'steelblue',
    },
});
