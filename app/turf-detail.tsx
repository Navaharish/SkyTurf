import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Card } from '../components/ui';
import { Link } from 'expo-router';

export default function TurfDetailScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/turf-image.jpg' }}
        style={styles.image}
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Premium Cricket Turf</Text>
        <Text style={styles.location}>Mumbai, Maharashtra</Text>
        
        <Card style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Facilities</Text>
          <Text style={styles.facilityItem}>• Floodlights</Text>
          <Text style={styles.facilityItem}>• Practice Nets</Text>
          <Text style={styles.facilityItem}>• Changing Rooms</Text>
          <Text style={styles.facilityItem}>• Parking</Text>
        </Card>
        
        <Card style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Pricing</Text>
          <Text style={styles.price}>₹1,500/hour</Text>
          <Text style={styles.priceNote}>* Additional charges may apply for equipment</Text>
        </Card>
        
        <Link href="/booking" asChild>
          <Button title="Book Now" style={styles.bookButton} />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  facilityItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  priceNote: {
    fontSize: 12,
    color: '#666',
  },
  bookButton: {
    marginTop: 8,
  },
}); 