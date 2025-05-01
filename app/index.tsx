import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from '../components/ui';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to SkyTurf</Text>
        <Text style={styles.subtitle}>Find and book cricket turfs near you</Text>
      </View>

      <View style={styles.content}>
        <Card style={styles.featuredTurf}>
          <Text style={styles.cardTitle}>Featured Turf</Text>
          <Text style={styles.cardDescription}>
            Premium cricket turf with top-notch facilities
          </Text>
          <Link href="/turf-detail" asChild>
            <Button title="View Details" />
          </Link>
        </Card>

        <View style={styles.actions}>
          <Link href="/search" asChild>
            <Button title="Search Turfs" variant="primary" style={styles.button} />
          </Link>
          <Link href="/bookings" asChild>
            <Button title="My Bookings" variant="outline" style={styles.button} />
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  content: {
    padding: 20,
  },
  featuredTurf: {
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  actions: {
    gap: 12,
  },
  button: {
    marginBottom: 12,
  },
}); 