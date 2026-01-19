import { ActivityIndicator, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Veggies } from '../database/Databse';
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../redux/feactures/product page/ProductSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import httpClient from '../redux/service/Service';

const Cart = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [cartitems, setCartitems] = useState(false);
  const [checked, setChecked] = useState(false);
  const data = Veggies.slice(0, 3);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productlist, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getallproductlist());
  }, []);


  const baseurl = `https://pickles-ukal.onrender.com`;

  const getacartdata = async (token) => {
    try {
      const response = await axios.post(`${baseurl}/api/cart/list`, {}, {
        headers: { token },
      });
      setCartitems(response.data.cartData,);
    } catch (error) {
      console.error('❌ API error:', error?.response?.data || error?.message || error);
    }
  };


  useEffect(() => {
    const fetchTokenAndCart = async () => {
      try {
        // const token = AsyncStorage.getItem("token");
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmExYTY3MGVmMzg0ODRmZjJmMmZlYiIsImlhdCI6MTc1MTc4NDA0NSwiZXhwIjoxNzU0Mzc2MDQ1fQ.FfrCb-XsRMU9XkU423ZlhCyYABT8l0aXDSNBTeoVi1I";
        if (token) {
          console.log("✅ Token fetched:", token);
          await getacartdata(token); // ✅ correct method, with token
        } else {
          console.warn("⚠️ No token found in AsyncStorage");
        }
      } catch (e) {
        console.error("❌ Error fetching token from AsyncStorage", e);
      }
    };

    fetchTokenAndCart();
  }, []);



  const [itemCounts, setItemCounts] = useState(() => {
    const initialCounts = {};
    data.forEach(item => {
      initialCounts[item.id] = 1;
    });
    return initialCounts;
  });

  const handleDecrease = (id) => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 0),
    }));
  };

  const handleIncrease = (id) => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  if (loading) {
    return <ActivityIndicator style={{ justifyContent: "center", paddingVertical: 20, alignItems: 'center', }} />
  }

  if (error) {
    return <Text style={{ textAlign: 'center', justifyContent: 'center', paddingVertical: 10 }}> {error}</Text>
  }

  const cartProductList = productlist.filter(product => cartitems[product._id]);

  const renderItem = ({ item }) => {
    if (itemCounts[item.id] === 0) return null;


    return (
      <View style={{
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
      }}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", columnGap: 10, paddingHorizontal: 5 }}>
          <Image source={{ uri: item.image }} width={50} height={50} style={{ borderRadius: 8, width: 50, height: 50 }} />
          <View>
            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.title}</Text>
            <Text style={{ fontSize: 12, marginTop: 3 }}>
              {item.weight < 1000 ? `${item.weight} mg` : `${(item.weight / 1000).toFixed(2)} kg`}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', columnGap: 15 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ffe0e0",
            backgroundColor: "#ffe6e6",
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderRadius: 10,
            elevation: 5
          }}>
            <TouchableOpacity onPress={() => handleDecrease(item.id)}>
              <Text style={{ color: "#ff3333", paddingRight: 3 }}> - </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 12, paddingHorizontal: 3 }}>{itemCounts[item.id]}</Text>
            <TouchableOpacity onPress={() => handleIncrease(item.id)}>
              <Text style={{ color: "#ff3333", paddingLeft: 3 }}> + </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ padding: 5 }}>
              <Text style={{ fontSize: 12 }}>${item.price}</Text>
              <Text style={{
                textDecorationLine: "line-through",
                fontSize: 10,
                color: "gray",
                paddingTop: 2,
              }}>
                ₹{item.originalprice}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const allItemsRemoved = data.every(item => itemCounts[item.id] === 0);

  const addtocart = (itemId) => {
    if (!cartitems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
      setCount(1);
    }
    else {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      setCount((prev) => prev + 1)
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmExYTY3MGVmMzg0ODRmZjJmMmZlYiIsImlhdCI6MTc1MTc4NDA0NSwiZXhwIjoxNzU0Mzc2MDQ1fQ.FfrCb-XsRMU9XkU423ZlhCyYABT8l0aXDSNBTeoVi1I";

    if (token) {
      try {
        httpClient.post(`/api/cart/add`, { itemId }, { headers: { token } });
        console.log(cartitems, 'iiiiiiiiiiiiiiiiiiiiiiiiiiiii')
      }
      catch (error) {
        console.log(error);
      }
    }
  }


  const removefromcart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0 }))

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmExYTY3MGVmMzg0ODRmZjJmMmZlYiIsImlhdCI6MTc1MTc4NDA0NSwiZXhwIjoxNzU0Mzc2MDQ1fQ.FfrCb-XsRMU9XkU423ZlhCyYABT8l0aXDSNBTeoVi1I";

    if (token) {
      httpClient.post(`/api/cart/remove`, { itemId }, { headers: { token } });
      console.log(cartitems, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f2feff" }}>
      {/* Header */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 18,
        elevation: 5,
        backgroundColor: '#fff',
        columnGap: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name='angle-left' size={22} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Your Cart</Text>
      </View>

      {/* Empty Cart */}
      {allItemsRemoved ? (
        <View style={{
          height: "70%",
          borderRadius: 12,
          justifyContent: "center",
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: "auto",
            borderRadius: 12
          }}>
            <AntDesign name='shoppingcart' style={{ fontSize: 90, color: "#38635e" }} />
          </View>
          <View style={{ flexDirection: "column", alignItems: 'center', }}>
            <Text style={{ textAlign: "center", fontWeight: '600', color: "gray" }}>Your cart is empty</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                paddingHorizontal: 25,
                paddingVertical: 10,
                borderRadius: 10,
                marginTop: 10
              }}
              onPress={() => { navigation.navigate("landing") }}
            >
              <Text style={{ color: "white" }}>Browse Products</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{ paddingBottom: 100 }}>
          {/* Offers */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 8, backgroundColor: 'white', paddingVertical: 12, elevation: 5, shadowColor: "lightgreen", marginHorizontal: 8, borderRadius: 15, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: "center", columnGap: 6 }}>
              <Text> <MaterialCommunityIcons name="brightness-percent" size={26} color="#00bf5c" /> </Text>
              <Text style={{ fontWeight: 500 }}>View Coupon & Offers </Text>
            </View>
            <Text><FontAwesome name='angle-right' size={22} color="#000" /></Text>
          </View>

          {/* Delivery Info & List */}
          <View style={{
            marginTop: 8,
            marginHorizontal: 8,
            backgroundColor: "white",
            borderRadius: 12,
            paddingVertical: 6,
            elevation: 5,
            shadowColor: "lightgreen",
          }}>
            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 3, paddingVertical: 8, paddingHorizontal: 8 }}>
              <Ionicons name='time' size={28} style={{ color: "#00bf5c" }} />
              <Text style={{ fontSize: 15, fontWeight: 600 }}> Deliver in 6 Mins </Text>
            </View>

            <FlatList
              data={cartProductList}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                const count = cartitems[item._id];

                if (!count) return null;

                return (
                  <View style={{
                    paddingHorizontal: 8,
                    paddingVertical: 10,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-between',
                  }}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", columnGap: 10, paddingHorizontal: 5 }} onPress={() => navigation.navigate("singleproduct", { product: item })}>
                      <Image source={{ uri: item.image }} width={50} height={50} style={{ borderRadius: 8, width: 50, height: 50 }} />
                      <View>
                        <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 3 }}>
                          {item.weight < 1000 ? `${item.weight} mg` : `${(item.weight / 1000).toFixed(2)} kg`}
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', columnGap: 15 }}>
                      <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#ffe0e0",
                        backgroundColor: "#ffe6e6",
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                        borderRadius: 10,
                        elevation: 5
                      }}>
                        <TouchableOpacity onPress={() => removefromcart(item._id)}>
                          <Text style={{ color: "#ff3333", paddingRight: 3 }}> - </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, paddingHorizontal: 3 }}>{count}</Text>
                        <TouchableOpacity onPress={() => addtocart(item._id)}>
                          <Text style={{ color: "#ff3333", paddingLeft: 3 }}> + </Text>
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity style={{ padding: 5 }}>
                          <Text style={{
                            fontWeight: 700,
                            fontSize: 12,
                            color: "gray",
                            paddingTop: 2,
                          }}>
                            ₹{item.price * count}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />

            <View style={{ paddingHorizontal: 10, paddingTop: 15, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 500 }}>Missed Something</Text>
              <TouchableHighlight style={{ backgroundColor: "black", paddingVertical: 6, paddingHorizontal: 4, borderRadius: 8 }} onPress={() => { navigation.navigate("allproductlists") }}>
                <Text style={{ color: "white", fontSize: 11 }}>+ Add More Items</Text>
              </TouchableHighlight>
            </View>
          </View>

        </View>
      )}

      {/* Fixed Bottom Section */}
      <View style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: show ? 68 : -40,
        zIndex: 999,
        backgroundColor: "#daf5e1",
        padding: 12,
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
      }}>
        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
          <Text><Ionicons name='home' size="22" /></Text>
          <TouchableOpacity onPress={() => setShow((prev) => !prev)}>
            <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>HOME</Text>
              <Text> <FontAwesome name='angle-down' /> </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 2 }}>
              <Text style={{ fontSize: 11, fontWeight: '400' }}>
                Manikanta Boys Hostel, 1st Floor, Sanjeev Reddy...</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingVertical: 8, paddingHorizontal: 10, backgroundColor: "#d4f8ff", marginTop: 10, borderRadius: 8 }}>
          <View>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}
              onPress={() => setChecked(!checked)}
            >
              <FontAwesome
                name={checked ? 'check-square' : 'square-o'}
                size={20}
                color={checked ? '#00bf5c' : 'gray'}
              />
              <Text style={{ marginLeft: 8, fontSize: 12 }}>I agree to the Terms & Conditions</Text>
            </TouchableOpacity>

          </View>
          <Text> <FontAwesome name='angle-right' size="18" color="#02782d" />   </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingVertical: 8, paddingHorizontal: 10, backgroundColor: "#d4f8ff", marginTop: 10, borderRadius: 8 }}>
          <View>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 3 }}
              onPress={(id) => setChecked(!checked)}
            >
              <FontAwesome
                name={checked ? 'check-square' : 'square-o'}
                size={20}
                color={checked ? '#00bf5c' : 'gray'}
              />
              <Text style={{ marginLeft: 8, fontSize: 12 }}>I agree to the Terms & Conditions</Text>
            </TouchableOpacity>

          </View>
          <Text> <FontAwesome name='angle-right' size="18" color="#02782d" />   </Text>
        </View>

      </View>
    </View>
  );
};

export default Cart;
