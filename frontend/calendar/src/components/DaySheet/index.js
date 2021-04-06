import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function DaySheet({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.sheet}>
        <Text style={styles.number}>{data.number}</Text>
      </View>
      <Text style={styles.weather}>Sunny</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 200,
    alignItems: 'center',
  },
  sheet: {
    width: 150,
    height: 175,
    backgroundColor: '#3754E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  number: {
    fontSize: 96,
    color: '#FFF',
  },
  weather: {
    fontSize: 24,
  },
});
