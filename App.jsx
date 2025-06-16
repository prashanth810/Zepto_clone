import React from 'react';
import Navigator from './src/navigators/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './src/screens/styles';
import MobilecontextProvider from './src/context/Mobilecontext';
// import Test from './src/test/Test';

const App = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <MobilecontextProvider>
        <Navigator />
        {/* <Test /> */}
      </MobilecontextProvider>
    </SafeAreaView>
  );
};

export default App;
