import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Angle from 'react-native-vector-icons/FontAwesome'
import { Categorisall } from '../../database/Databse';
import Selectedcategorydata from './Allcategories dat/Selectedcategorydata';


const Maxsaving = () => {
    const [activeid, setActiveid] = useState("all");

    const rendercategories = ({ item }) => {
        const isActive = item.id === activeid;
        return (
            <TouchableOpacity
                style={[styles.card, isActive && styles.acivecard]}
                onPress={() => setActiveid(item.id)}
            >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.categorytext}>{item.category}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.mainhead}> Bepto <Text> daily </Text></Text>
                    <Text style={styles.subhead}> MAX SAVING, DELIVERED EVERYDAY </Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.explore}>
                        <Text style={styles.exp_mainhead}> Explore now </Text>
                        <Text style={styles.exp_mainhead}> <Angle name='angle-right' size="12" /> </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <FlatList
                        data={Categorisall}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => rendercategories(item)}
                        horizontal
                        contentContainerStyle={styles.listcontainer}
                    />
                </View>

            </View>


            <Selectedcategorydata activeid={activeid} />

        </View>

    )
}

export default Maxsaving

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0ec0e',
        borderRadius: 12,
        marginVertical: 10,
        paddingVertical: 8
    },
    mainhead: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: 500,
        letterSpacing: 1,

    },
    subhead: {
        fontSize: 11,
        textAlign: "center",
        marginVertical: 4,
        fontWeight: 400,
    },
    explore: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "lightgray",
        width: "30%",
        margin: "auto",
        paddingVertical: 4,
        borderRadius: 20,
        backgroundColor: "#013b0a",
        marginTop: 10
    },
    exp_mainhead: {
        fontSize: 12,
        color: "#f0ec0e",
    },
    card: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
        marginRight: 20, // ✅ Add this line
    },
    listcontainer: {
        paddingHorizontal: 10,
    },
    acivecard: {
        borderBottomColor: "blue"
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
        columnGap: 40,
        resizeMode: 'cover'
    },
    categorytext: {
        fontSize: 11,
        fontWeight: 500,
        textTransform: "capitalize",
        paddingTop: 4,
    },
})