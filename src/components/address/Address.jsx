import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Alert,
    TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Location from 'react-native-vector-icons/Entypo';
import Edit from 'react-native-vector-icons/Octicons';
import Delete from 'react-native-vector-icons/EvilIcons';
import Close from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, removeaddress } from '../../redux/feactures/address slice/AddressSlice';

const Address = () => {
    const [popup, setPopup] = useState(false);
    const [confirmdelete, setConfirmdelete] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(null);

    const [formdata, setFormdata] = useState({
        type: 'Home',
        addressLine: '',
        flatNumber: '',
        city: '',
        pincode: '',
    });

    const dispatch = useDispatch();
    const { addresses, loading, error } = useSelector((state) => state.newaddres); // fixed typo here

    const handleaddnewaddress = () => {
        const { addressLine, flatNumber, city, pincode, type } = formdata;
        if (!addressLine || !flatNumber || !city || !pincode || !type) {
            return Alert.alert('All fields are required!');
        }

        try {
            dispatch(addAddress(formdata)); // fixed structure here
            setPopup(false);
            setFormdata({ addressLine: '', flatNumber: '', city: '', pincode: '' });
        } catch (error) {
            console.log(error);
        }
    };

    const width = Dimensions.get('window').width;

    const handleopenpopup = () => {
        setPopup((prev) => !prev);
    };

    const handleopenconfirm = (id) => {
        setSelectedAddressId(id);  // store the ID
        setConfirmdelete(true);    // show confirm modal
    };


    const handledeleted = () => {
        if (selectedAddressId !== null) {
            dispatch(removeaddress(selectedAddressId));
            Alert.alert('Address deleted!');
            setConfirmdelete(false);
            setSelectedAddressId(null); // reset after deletion
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text>
                    <FontAwesome name="angle-left" size={24} />
                </Text>
                <Text style={styles.addhead}> Addresses </Text>
                <Text></Text>
            </View>

            {/* Example static address card */}
            {addresses.map((item, i) => {
                return (
                    <View style={styles.address} key={i}>
                        <TouchableOpacity style={styles.location}>
                            <Location name="location" style={{ fontSize: 20 }} />
                        </TouchableOpacity>
                        <View style={styles.label}>
                            <Text style={styles.homehead}> {item.type} </Text>
                            <Text style={styles.labelhead}>{item.addressLine} , {item.city} , {item.pincode}</Text>
                            <Text style={styles.labelhead}>Flast No : {item.flatNumber}</Text>
                        </View>
                        <View style={styles.edit}>
                            <TouchableOpacity onPress={handleopenpopup}>
                                <Edit name="pencil" style={{ fontSize: 20 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleopenconfirm(item.id)}>
                                <Delete name="trash" style={{ fontSize: 27 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}



            {/* Add new button */}
            <View style={styles.bottomButtonWrapper}>
                <TouchableOpacity style={styles.bottomButton} onPress={handleopenpopup}>
                    <Text style={styles.bottomButtonText}>Add New Address</Text>
                </TouchableOpacity>
            </View>

            {/* popup open addresss */}
            {popup && (
                <View style={{ position: "absolute", shadowColor: "red", top: "25%", left: 0, right: 0, marginHorizontal: 20, }}>
                    <View style={{ backgroundColor: "#f3faffff", borderWidth: 1, borderColor: "lightgray", borderRadius: 10, padding: 20, borderRadius: 6 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingBottom: 20, }}>
                            <Text> Address </Text>
                            <TouchableOpacity onPress={handleopenpopup}><Close name='close' size={18} /></TouchableOpacity>
                        </View>

                        <View style={{ rowGap: 10 }}>

                            <TextInput
                                value={formdata.addressLine}
                                onChangeText={(text) => setFormdata({ ...formdata, addressLine: text })}
                                placeholderTextColor={"#00B688"}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#2ab592",
                                    color: "black",
                                    borderRadius: 6,
                                    paddingHorizontal: 10,
                                }}
                                placeholder='Enter your address...'
                            />

                            <TextInput
                                value={formdata.flatNumber}
                                onChangeText={(text) => setFormdata({ ...formdata, flatNumber: text })}
                                placeholderTextColor={"#2ab592"}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#2ab592",
                                    color: "black",
                                    borderRadius: 6,
                                    paddingHorizontal: 10,
                                }}
                                placeholder='Enter your flat number/name...'
                            />

                            <TextInput
                                value={formdata.city}
                                onChangeText={(text) => setFormdata({ ...formdata, city: text })}
                                placeholderTextColor={"#2ab592"}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#2ab592",
                                    color: "black",
                                    borderRadius: 6,
                                    paddingHorizontal: 10,
                                }}
                                placeholder='Enter city...'
                            />

                            <TextInput
                                value={formdata.pincode}
                                onChangeText={(text) => setFormdata({ ...formdata, pincode: text })}
                                placeholderTextColor={"#2ab592"}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#2ab592",
                                    color: "black",
                                    borderRadius: 6,
                                    paddingHorizontal: 10,
                                }}
                                placeholder='Enter pincode...'
                            />


                            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginTop: 10, }}>
                                {['Home', 'Work', 'Other'].map((type) => (
                                    <TouchableOpacity
                                        key={type}
                                        style={[
                                            styles.addaddressinputs,
                                            formdata.type === type && {
                                                backgroundColor: '#00B688',
                                            },
                                        ]}
                                        onPress={() => setFormdata({ ...formdata, type })}
                                    >
                                        <Text>{type}</Text>
                                    </TouchableOpacity>
                                ))}

                            </View>

                            <View>
                                <TouchableOpacity
                                    style={{ backgroundColor: "#f2076d", alignItems: 'center', marginTop: 20, padding: 10, borderRadius: 8, }} onPress={handleaddnewaddress}>
                                    <Text style={{ fontSize: 16, color: "#fff", fontWeight: 500, letterSpacing: 1 }}> Save </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )}


            {/* confirm delete address */}

            {confirmdelete && (
                <View style={{ position: "absolute", shadowColor: "red", top: "40%", left: 0, right: 0, marginHorizontal: 30, }}>
                    <View style={{ backgroundColor: "lightgray", padding: 20, borderRadius: 6 }}>
                        <View style={{ alignItems: "center", justifyContent: 'center', paddingBottom: 20, }}>
                            <Text> Are you shure ?? </Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', columnGap: 15, }}>
                            <TouchableOpacity style={{ backgroundColor: "#f2076d", alignItems: 'center', padding: 10, borderRadius: 8, }} onPress={() => { setConfirmdelete(false) }}>
                                <Text style={{ fontSize: 16, color: "#fff", fontWeight: 500, letterSpacing: 1 }}> Cancel </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: "#00B688", alignItems: 'center', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8, }} onPress={handledeleted}>
                                <Text style={{ fontSize: 16, color: "#fff", fontWeight: 500, letterSpacing: 1 }}> Delete </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}


        </View>
    )
}

export default Address
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        position: 'relative',
    },
    navbar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 18,
        elevation: 1,
        backgroundColor: "white",
    },
    addhead: {
        fontSize: 17,
        fontWeight: 500,
    },
    iconsize: {
        fontSize: 20,
    },
    address: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    homehead: {
        fontSize: 14,
        fontWeight: 500,
    },
    label: {
        width: "70%",
    },
    labelhead: {
        fontSize: 12,
        color: 'gray'
    },
    location: {
        width: "10%",
    },
    edit: {
        flexDirection: "row",
        columnGap: 10,
        width: "20%",
    },
    bottomButtonWrapper: {
        position: 'absolute',
        bottom: 16,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
    },
    bottomButton: {
        backgroundColor: "#f2076d",
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    bottomButtonText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 14,
    },
    addaddressinputs: {
        borderWidth: 1,
        borderColor: "#2ab592",
        color: "black",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

})