import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1.',
        description: 'Find a Manchester Bee',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '2.',
        description: 'Pose moodily outside Salford Lad\'s Club',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '3.',
        description: 'Drink some vimto by the giant vimto bottle',
    },
];

const Item = ({ description }) => (
    <View style={styles.item}>
        <Text style={styles.description}>{description}</Text>
    </View>
);

const ChallengeCard = () => {
    const renderItem = ({ item }) => (
        <Item description={item.description} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Pingo</Text>
            <Text style={{ color: '#A2D2FF' }}>Manchester</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        backgroundColor: '#6fcb9f',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});


export default ChallengeCard;