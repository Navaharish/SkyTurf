import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Input, Card } from '../components/ui';
import { router } from 'expo-router';

export default function BookingScreen() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleBooking = () => {
    // TODO: Implement booking logic with Supabase
    router.push('/payment');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Book Your Slot</Text>
        
        <Card style={styles.bookingForm}>
          <Input
            label="Date"
            placeholder="Select date"
            value={date}
            onChangeText={setDate}
          />
          
          <Input
            label="Time"
            placeholder="Select time"
            value={time}
            onChangeText={setTime}
          />
          
          <Input
            label="Duration (hours)"
            placeholder="Enter duration"
            value={duration}
            onChangeText={setDuration}
            keyboardType="numeric"
          />
          
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Booking Summary</Text>
            <Text style={styles.summaryItem}>Rate: ₹1,500/hour</Text>
            <Text style={styles.summaryItem}>Duration: {duration || '0'} hours</Text>
            <Text style={styles.totalAmount}>
              Total: ₹{duration ? 1500 * parseInt(duration) : 0}
            </Text>
          </View>
          
          <Button
            title="Proceed to Payment"
            onPress={handleBooking}
            style={styles.submitButton}
          />
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingForm: {
    marginBottom: 20,
  },
  summary: {
    marginTop: 24,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  summaryItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 8,
  },
  submitButton: {
    marginTop: 8,
  },
}); 