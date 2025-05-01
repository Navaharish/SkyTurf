import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Input } from '../components/ui';
import { router } from 'expo-router';

export default function PaymentScreen() {
  const handlePayment = () => {
    // TODO: Implement payment logic
    router.push('/payment-success');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Payment Details</Text>
        
        <Card style={styles.paymentSummary}>
          <Text style={styles.summaryTitle}>Booking Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Date:</Text>
            <Text style={styles.summaryValue}>May 1, 2024</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Time:</Text>
            <Text style={styles.summaryValue}>2:00 PM</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Duration:</Text>
            <Text style={styles.summaryValue}>2 hours</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Amount:</Text>
            <Text style={styles.totalAmount}>₹3,000</Text>
          </View>
        </Card>
        
        <Card style={styles.paymentForm}>
          <Text style={styles.sectionTitle}>Card Information</Text>
          <Input
            label="Card Number"
            placeholder="Enter card number"
            keyboardType="numeric"
          />
          <View style={styles.row}>
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
              style={styles.halfInput}
            />
            <Input
              label="CVV"
              placeholder="CVV"
              keyboardType="numeric"
              style={styles.halfInput}
            />
          </View>
          <Input
            label="Card Holder Name"
            placeholder="Enter name on card"
          />
          
          <Button
            title="Pay Now"
            onPress={handlePayment}
            style={styles.payButton}
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
  paymentSummary: {
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  paymentForm: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  payButton: {
    marginTop: 16,
  },
}); 