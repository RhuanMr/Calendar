import React from 'react';
import {View, StyleSheet} from 'react-native';
import Calendar from '../../components/Calendar';
import Card from '../../components/Card';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Calendar />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
