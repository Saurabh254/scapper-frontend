import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Monitor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        height: 56,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: '#fff'
    }
})

export default Header;