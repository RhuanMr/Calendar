import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Calendar from '../../components/Calendar';
import Card from '../../components/Card';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <Header data={1} />
      <Calendar />
      <Text style={styles.title}>Reminders:</Text>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    marginLeft: 10,
  },
});
