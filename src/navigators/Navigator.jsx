import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Bottomnavigator from '../productdetails/Bottomnavigator';
import Cart from '../cart/Cart';
import Productdetails from '../productdetails/Productdetails';
import Newarraivals from '../new arrivals/Newarraivals';
import Addbalnce from '../components/add balance/Addbalnce';
import Renewpass from '../components/renew pass/Renewpass';
import Orderspage from '../components/orders/Orderspage';
import Managerefers from '../components/manage referals/Managerefers';
import Customersupport from '../components/customer support/Customersupport';
import Address from '../components/address/Address';
import Refunds from '../components/refunds/Refunds';
import Profile from '../screens/Profile';
import Paymentmanagement from '../components/payment management/Paymentmanagement';
import Rewards from '../components/rewards/Rewards';
import Settings from '../components/settings/Settings';
import Generalinfo from '../components/general info/Generalinfo';
import Notifications from '../components/notifications/Notifications';
import Alltransactions from '../components/see all transactions/Alltransactions';
import Howitsworking from '../components/Howits working/Howitsworking';
import Faqs from '../components/faqs/Faqs';
import Addingcarddetails from '../components/add card/Addingcarddetails';
import Allproductlist from '../components/Allproductlists/Allproductlist';
import Addlocation from '../components/location/Addlocation';
import Singleproduct from '../components/single products/Singleproduct';
import Landingpage from '../components/loading/Landingpage';
import Search from '../screens/Search';
import LoginScreen from '../login page/LoginScreen';
import Profilesetting from '../screens/profile setting/Profilesetting';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName='login'
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name="bottomnavigator"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="bottomnavigator"
          component={Bottomnavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="cart"
          component={Cart}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="productdetails"
          component={Productdetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="newarrivals"
          component={Newarraivals}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="addammount"
          component={Addbalnce}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="renewpass"
          component={Renewpass}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="orders"
          component={Orderspage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="managereferalls"
          component={Managerefers}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="customersupport"
          component={Customersupport}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="address"
          component={Address}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="refunds"
          component={Refunds}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='profileseting'
          component={Profilesetting}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="paymentmanagement"
          component={Paymentmanagement}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="rewards"
          component={Rewards}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="settings"
          component={Settings}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="generalinfo"
          component={Generalinfo}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="seealltransactions"
          component={Alltransactions}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="howitsworking"
          component={Howitsworking}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="faqquestions"
          component={Faqs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="addcard"
          component={Addingcarddetails}
          options={{ headerShown: false }}
        />

        {/* All product lists came here  */}
        <Stack.Screen
          name="allproductlists"
          component={Allproductlist}
          options={{ headerShown: false }}
        />

        {/* location */}
        <Stack.Screen
          name="addlocation"
          component={Addlocation}
          options={{ headerShown: false }}
        />

        {/* single product  */}
        <Stack.Screen
          name="singleproduct"
          component={Singleproduct}
          options={{ headerShown: false }}
        />

        {/* landing page  */}
        <Stack.Screen
          name="landing"
          component={Landingpage}
          options={{ headerShown: false }}
        />

        {/* search page  */}
        <Stack.Screen
          name="search"
          component={Search}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
