import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '@context/AuthContext';
import { SubscriptionProvider } from '@context/SubscriptionContext';
import { WearableProvider } from '@context/WearableContext';
import RootNavigator from '@navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SubscriptionProvider>
          <WearableProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </WearableProvider>
        </SubscriptionProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
