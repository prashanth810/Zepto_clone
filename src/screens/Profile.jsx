import { Linking, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Native vector icons

const Profile = () => {
  const [pass, setPass] = useState(true);
  const [notification, setNotification] = useState(true);
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{
        marginBottom: 65,
      }}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* Custom Header */}
        <View style={{
          paddingVertical: 18,
          paddingHorizontal: 18,
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          elevation: 2 // shadow for Android
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', marginRight: 24 }}>
            Settings
          </Text>
        </View>
      </View>

      <View style={{ marginHorizontal: 12, marginVertical: 6 }}>
        <View
          style={{
            backgroundColor: pass ? '#38635e' : 'white',
            borderTopRightRadius: pass ? 10 : 0,
            borderTopLeftRadius: pass ? 10 : 0,
            paddingVertical: 20,
            paddingHorizontal: 20,
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 20,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
          }}>
          <FontAwesome name="user-circle-o" size={46} style={{ color: pass ? "white" : "#38635e", }} />
          <View>
            <Text style={{ color: pass ? "white" : "black", fontSize: 16 }}> Prashanth </Text>
            <Text style={{ color: pass ? "white" : "black", fontSize: 12 }}> 8106124493 </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: '30%',
                marginTop: 1,
              }}>
              {
                pass ? (<TouchableOpacity
                  style={{
                    paddingVertical: 4,
                    borderRadius: 13,
                  }}>
                  <Text style={{ color: 'white' }}>
                    {pass ? 'Pass Member' : 'Buy Pass'}
                  </Text>
                </TouchableOpacity>) : ("")
              }

              <TouchableOpacity
                style={{
                  color: 'white',
                  fontSize: 12,
                  backgroundColor: '#fae605',
                  color: 'black',
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  marginTop: 6,
                  borderRadius: 13,
                }}
                onPress={() => setPass(prev => !prev)}>
                <Text> {pass ? 'Cancle' : 'Buy Pass'} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {pass ? (
          <View>
            <View
              style={{
                backgroundColor: '#014a41',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 20,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 14 }}> Vallid till :</Text>
                <Text style={{ color: 'white', fontSize: 14 }}> 05 May </Text>
              </View>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderRadius: 30,
                    paddingVertical: 6,
                    paddingHorizontal: 7,
                    borderColor: '#FFBF00',
                    backgroundColor: "white",
                  }}>
                  <Text
                    style={{
                      color: '#FFBF00',
                      fontWeight: 700,
                      fontSize: 12,
                    }}>
                    Saved ₹125
                  </Text>
                </TouchableOpacity>
                <Text>
                  <FontAwesome name="angle-right" size="20" color="#04b89f" />
                </Text>
              </View>
            </View>
          </View>

        ) : (
          <TouchableOpacity style={{
            backgroundColor: '#014a41',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 20,
            paddingBottom: 40,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }} onPress={() => { navigation.navigate("renewpass") }}>
            <View>
              <View style={{ position: 'relative' }}>
                <Text style={{ color: "#FFBF00", fontSize: 18, fontWeight: 700 }}> Zepto <Text> Pass </Text></Text>
                <Text style={{ color: "white", fontSize: 12, marginVertical: 6, letterSpacing: 2, fontWeight: 700 }}> You would potentially <Text style={{ color: "#FFBF00", fontSize: 16, fontWeight: 500 }}> ₹400</Text>  </Text>
                <Text style={{ color: "white", fontSize: 12, letterSpacing: 2, fontWeight: 700 }}> per month with Zepto Pass  </Text>
              </View>
              <View style={{ position: "absolute", bottom: "-70%", left: "30%", zIndex: 40 }}>
                <TouchableOpacity style={{ paddingHorizontal: 8, flexDirection: "row", alignItems: "center", paddingVertical: 8, columnGap: 10, backgroundColor: "#FFBF00", borderRadius: 8 }}>
                  <TouchableOpacity onPress={() => { navigation.navigate("renewpass") }}>
                    <Text style={{ fontWeight: 600, }}> Renew Zepto Pass  </Text>
                  </TouchableOpacity>
                  <Text > <FontAwesome name="angle-right" size="21" color="red" /> </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text>  <Entypo name="wallet" size="75" color="#FFBF00" /> </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ marginHorizontal: 12 }}>

        <View
          style={{
            // marginTop:pass ? 0 : 40,
            backgroundColor: '#ebfaf8',
            borderWidth: 1,
            borderColor: '#38635e',
            borderRadius: 8,
            marginTop: 10,
            paddingVertical: 14,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 6,
            }}>
            <Text>
              <Entypo name="wallet" size="20" color="#38635e" />
              <Text style={{ fontWeight: 700, }}> Cash & Gifts Cards </Text>
            </Text>
            <Text>
              <FontAwesome name="angle-right" size="21" color="#38635e" />
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              borderTopWidth: 1,
              borderStyle: 'dashed',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text>
              Available Balance
              <Text style={{ fontWeight: 700, color: '#38635e' }}> ₹125 </Text>
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#38635e',
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 10,
              }}>

              <TouchableOpacity onPress={() => { navigation.navigate("addammount") }}>
                <Text style={{ fontWeight: 500, color: '#38635e', fontSize: 12 }}>
                  Add Balance
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 13,
              backgroundColor: '#ebfaf8',
              marginTop: 10,
              borderColor: '#38635e',
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#38635e',
              borderRadius: 10,
            }}>
            <Text>
              <Ionicons name="gift-sharp" size="22" color="#f53d05" />
              <Text> Free Cash </Text>
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#38635e',
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 10,
              }}>
              <TouchableOpacity onPress={() => { navigation.navigate("addammount") }}>
                <Text style={{ fontWeight: 700, color: '#38635e', fontSize: 12 }}>
                  ₹125
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: "space-between", backgroundColor: "#e6e8e6", paddingVertical: 8, paddingHorizontal: 5, borderRadius: 10, }}>
          <View>
            {notification ? (
              <MaterialIcons name="system-update" size={30} color="#067a6b" />
            ) : (
              <MaterialIcons name="system-security-update-good" size={30} color="#067a6b" />
            )}
          </View>

          <View>
            <Text style={{ fontWeight: 700, fontSize: 13 }}> Update Available </Text>
            <Text style={{ fontSize: 11, paddingVertical: 1 }}> Enjoy a more seamless shopping </Text>
            <Text style={{ fontSize: 11 }}> experience </Text>
          </View>

          <TouchableOpacity style={{ marginLeft: 50, backgroundColor: "#40c95f", paddingVertical: 5, paddingHorizontal: 4, borderRadius: 10 }} onPress={() => {
            setNotification((prev) => !prev);
            // Linking.openURL('https://play.google.com/store/apps/details?id=com.yourapp.package');
          }}>
            <Text style={{ color: "white", fontWeight: 500, }}> {notification ? "New" : ""}  <FontAwesome name='angle-right' /> </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => { navigation.navigate("orders") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="shoppingcart" color="#38635e" size="22" /> </Text>
              <Text> Orders </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("managereferalls") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="hearto" color="#38635e" size="22" /> </Text>
              <Text> Manage referrals </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /></Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate("customersupport") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="customerservice" color="#38635e" size="22" /> </Text>
              <Text> Customer & support </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate("address") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <Ionicons name="location-outline" color="#38635e" size="22" /> </Text>
              <Text> Address </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate("refunds") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="reload1" color="#38635e" size="22" /> </Text>
              <Text> Refunds </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("profile") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="user" color="#38635e" size="22" /> </Text>
              <Text> Profile </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate("paymentmanagement") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="creditcard" color="#38635e" size="22" /> </Text>
              <Text> Payment Management </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("rewards") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="gift" color="#38635e" size="22" /> </Text>
              <Text> Rewards </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate("settings") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <FontAwesome name="gears" color="#38635e" size="22" /> </Text>
              <Text> Suggest Products </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate("generalinfo") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="infocirlceo" color="#38635e" size="22" /> </Text>
              <Text> General info </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => { navigation.navigate("notifications") }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingVertical: 22, borderBottomWidth: 1, borderBottomColor: "lightgray" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 6 }}>
              <Text> <AntDesign name="bells" color="#38635e" size="22" /> </Text>
              <Text> Notifications </Text>
            </View>

            <View>
              <Text> <FontAwesome name="angle-right" size="20" color="red" /> </Text>
            </View>
          </View>
        </TouchableOpacity>


        <View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: "13%", width: "30%", margin: "0px auto", alignSelf: 'center', marginBottom: 8, }}>
            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, paddingVertical: 10, paddingHorizontal: 18 }}>
              <Text style={{ fontWeight: 700, color: "#38635e", letterSpacing: 1 }}> Logout </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ textAlign: 'center', color: '#999999' }}> App &copy;rights prashanth </Text>
            <Text style={{ textAlign: 'center', color: '#999999' }}> version v1.0-1 </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
