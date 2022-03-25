import {
    Text,
    FlatList,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const PacksList = ({ packs }) => {
    const navigation = useNavigation();
    const [urls, setUrls] = useState([]);
    useEffect(() => {
        const func = async () => {
            const storage = getStorage();
            const manReference = ref(storage, '/manchester.png');
            const lonReference = ref(storage, '/london.png')
            getDownloadURL(manReference, lonReference).then((x) => {
                setUrls((currentUrl) => {
                    return [{ manchester: x }]
                });
            });
        };
        // if (url === undefined) { func() };
    }, []);

    let [fontsLoaded] = useFonts({
        BebasNeue_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <SafeAreaView>

            <FlatList
                data={packs}
                keyExtractor={(packs, index) => {
                    return 'pack' + index;
                }}
                renderItem={({ item }) => {
                    return (<View>
                        <Image style={styles.imagestyle} source={{ uri: urls[item.data.title.toLowerCase()] }} />
                        {console.log(urls[item.data.title.toLowerCase()])}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                navigation.navigate('Pack', {
                                    itemId: item.id,
                                })
                            }
                        >
                            <Text style={styles.packs}>{item.data.title}</Text>
                        </TouchableOpacity>
                    </View>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {},
    packs: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'BebasNeue_400Regular',
    },
    imagestyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        paddingTop: 25,
        paddingBottom: 100,
        marginLeft: 170,
        marginTop: 10,
    },
});

export default PacksList;
