import { View, Text, Image, StyleSheet } from "react-native";


const ProductDetails = ({
    title,
    price,
    descriptionList,
    productImage,
    rating
}) => {
    console.log(descriptionList)
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.productName}>{title}</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: productImage
                    }} />
            </View>
            <View style={styles.aboutView}>
                <Text style={styles.description}>{descriptionList.join('\n')}</Text>
                <Text>Current Price: {price}</Text>
                <Text>Rating: {4.7} based on {210000} reviews</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: '100%',
        gap: 30,
        paddingVertical: 30,
    },
    productName: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    image: {
        height: 250,
        width: 300,

    },
    aboutView: {
        paddingVertical: 30,
        textAlign: "left",
        width: '100%',
        paddingHorizontal: 40

    },
    description: {
    },
})
export default ProductDetails;