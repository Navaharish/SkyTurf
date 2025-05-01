import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/ui';
import { router } from 'expo-router';

export default function PaymentSuccessScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.title}>Payment Successful!</Text>
        <Text style={styles.message}>
          Your booking has been confirmed. You will receive a confirmation email shortly.
        </Text>
        
        <View style={styles.actions}>
          <Button
            title="View Booking Details"
            onPress={() => router.push('/bookings')}
            style={styles.button}
          />
          <Button
            title="Back to Home"
            variant="outline"
            onPress={() => router.push('/')}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  button: {
    marginBottom: 12,
  },
}); 