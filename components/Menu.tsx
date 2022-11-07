import {StyleSheet, Text, View, FlatList, GestureResponderEvent} from 'react-native';
import React from "react";
import {StartGameType} from "../redux/menuReducer";

type menuList = {
    gameName: string
    key: string
}

type menuListType = {
    menuList: Array<menuList>
    startGame: StartGameType
}


const Menu: React.FC<menuListType> = (props) => {

    const log = (event: any) => {

        let gameName = event._dispatchInstances.memoizedProps.children
        props.startGame(gameName)
    }

    return (
        <View>
            <FlatList data={props.menuList} renderItem={({item}) => (
                <Text style={styles.start} key={item.key} onPress={log}>{item.gameName}</Text>
            )}/>

        </View>
    )


}

export default Menu

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: '5%'
    },
    start: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    }
});
