import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/icon';
import tw from 'tailwind-react-native-classnames';

const NavOptions = () => {
    const data = [
        {
            id: "123",
            title: "Get a Cab",
            image: "https://links.papereact.com/3pn",
            screen: "MapScreen"
        },
        {
            id: "456",
            title: "Get a Food",
            image: "https://links.papereact.com/28w",
            screen: "EatScreen"
        },
    ];

    const renderItem = ({ item }) => {
        <TouchableOpacity>
            <View>
                <Image
                    style={styles.img}
                    source={{ uri: item.image }}
                />
                <Text>{item.title}</Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                />
            </View>
        </TouchableOpacity>
    };

    return (
        <FlatList
            data={data}
            horizontal
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    img: {
        height: 120, 
        resizeMode: "contain",
        width: 120,
    }
});

export default NavOptions;