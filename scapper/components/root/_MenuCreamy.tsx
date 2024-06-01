import { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

const MenuCreamy = () => {
    const [notifyOnPriceChangeButton, setNotifyOnPriceChangeButton] = useState(false);
    const [showGraph, setShowGraph] = useState(false);

    return (
        <View style={styles.container}>

            <Button

                onPress={
                    () => setNotifyOnPriceChangeButton(true ? false : !notifyOnPriceChangeButton)
                }
                title='notify on Price Change'
            // color='#000'


            />
            <Button
                onPress={
                    () => setShowGraph(true ? false : !showGraph)
                }
                title='View Graph'
            // color='#000'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        width: '80%'
    },
})
export default MenuCreamy;