import {
    View,
    Text,
    Image,
    StyleSheet

} from "react-native"

import MenuCreamy from "./_MenuCreamy";
import ProductDetails from "./_ProductDetails";


const RootLayout = () => {
    // 'title': self._getTitle(),
    //     'price': self._getPrice(),
    //         'descriptionList': self._getDescriptionList(),
    //             'rating': self._getRating(),
    //                 'productImage': self._getProductImg()
    const data = {
        title: 'Moto g84 (8gb 128gb)',
        price: 'Rs 30,000',
        descriptionList: ['What is ', ' the specs ', ' of the thigs '],
        productImage: 'https://source.unsplash.com/random/?Cryptocurrency&1',
        rating: 4.8,
    }
    return (
        <View style={styles.productView}>
            <Text style={styles.productTitle}>Product</Text>
            <ProductDetails {...data} />
            <MenuCreamy />
        </View>
    )
}


const styles = StyleSheet.create({
    productView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    productTitle: {
        fontSize: 22,
        color: '#000',
        margin: 16,
        fontWeight: 'bold',
    },
    productImage: {
        height: 350,
        width: 300,
        borderRadius: 8
    }
})

export default RootLayout;