import React, { useState } from 'react';
import { ScrollView, RefreshControl, KeyboardAvoidingView, Platform } from 'react-native';
import Navigator from './src/navigators/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './src/screens/styles';
import MobilecontextProvider from './src/context/Mobilecontext';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="green"
            colors={['green']} // Android color
          />
        }
        keyboardShouldPersistTaps="handled"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <MobilecontextProvider>
            <Navigator />
          </MobilecontextProvider>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
