import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View, Alert, SafeAreaView, ImageBackground} from 'react-native';
import Header from "./components/Header";
import store, {AppStateType} from "./redux/reduxStore";
import {connect, Provider} from "react-redux";
import {InitialStateType, startGame, StartGameType} from "./redux/menuReducer";
import {getMenu} from "./redux/menuSelector";
import App from "./LuckyLuck";

const Root = () => {
    return (<Provider store={store}>
        <App store={store}/>
    </Provider>)
}

export default Root
/*

const App = (props=store) => {
    const playNowOk = () => {
        console.log('Ok')
    }
    const playKNB = () => {
        console.log('KNB')
    }

    const playNow = () => Alert.alert('Play now?', '', [{text: 'Go!', onPress: playNowOk}, {text: 'Back'}])

    return (

        <Provider store={store}>
            <App store={store}/>

        </Provider>

    );
}

const mapStateToProps = (state : AppStateType) : InitialStateType => {
    return {
        listOfMenu: getMenu(state)
    }
}

type DispatchToPropsType = {
    startGame:StartGameType
}

//export default App
export default connect<InitialStateType, DispatchToPropsType, {}, AppStateType>(mapStateToProps,{
    startGame})(App)


function App2() {

    const playNowOk = () => {
        console.log('Ok')
    }
    const playKNB = () => {
        console.log('KNB')
    }

    const playNow = () => Alert.alert('Play now?', '', [{text: 'Go!', onPress: playNowOk}, {text: 'Back'}])

    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('./bg.jpg')} resizeMode="cover" style={styles.image}>

                <View style={styles.content}>
                <Header />

                <Text style={styles.start} onPress={playKNB}>KNB</Text>
                <Text style={styles.start} onPress={playKNB}>COIN</Text>
                <Text style={styles.start} onPress={playKNB}>DICE</Text>
                    <Button title={'Play Now!'} onPress={playNow}/>
                    <StatusBar style="auto"/>
                </View>
            </ImageBackground>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: "center",
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
*/
