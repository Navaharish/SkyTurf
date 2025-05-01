import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'SkyTurf',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="turf-detail"
          options={{
            title: 'Turf Details',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="booking"
          options={{
            title: 'Book Turf',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="payment"
          options={{
            title: 'Payment',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="payment-success"
          options={{
            title: 'Success',
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
} 