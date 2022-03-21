import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Welcome to Pingo</Text>
            <View>
                <Text>Please login with your username or join as a guest</Text>
                <Image
                    source={{
                        uri: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article20618099.ece/ALTERNATES/s615/1_TMR_MEN_170521bingo_02.jpg',
                    }}
                    style={{
                        width: 350, height: 200,
                    }}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    defaultValue="Name"
                />
                <Button
                    title="Join"
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Login;