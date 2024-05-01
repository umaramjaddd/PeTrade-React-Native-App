import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { openURL } from 'expo-linking';


export function AdDetail(props) {
    const data = props.route.params;

    return( 
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Image source={{uri: data.image}} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    <Text style={styles.key}>Category </Text>
                    <Text style={styles.value}>{data.category}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.key}>Owner</Text>
                    <Text style={styles.value}>{data.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.key}>City</Text>
                    <Text style={styles.value}>{data.city}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.key}>Age</Text>
                    <Text style={styles.value}>{data.age}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.key}>Price</Text>
                    <Text style={styles.value}>{data.price} Rs.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.key}>Phone</Text>
                    <Text style={styles.value}>{data.phone}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => openURL(`tel:${data.phone}`)}>
                <MaterialIcons name="local-phone" size={40} color="green" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        width: 250,
        textAlign: 'center'
    },
    headerContainer: {

    },
    infoContainer: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center'
    },
    image: {
        height: 250,
        width: 250
    },
    row: {
        width: 250,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    key: {
        fontWeight: 'bold',
        fontSize: 18
    },
    value: {
        fontSize: 16
    }
});