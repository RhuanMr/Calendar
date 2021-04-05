import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Calendar() {
  return (
    <View>
      <View style={styles.week}>
        <Text style={styles.weekDay}>Sun</Text>
        <Text style={styles.weekDay}>Mon</Text>
        <Text style={styles.weekDay}>Tue</Text>
        <Text style={styles.weekDay}>Wen</Text>
        <Text style={styles.weekDay}>Thu</Text>
        <Text style={styles.weekDay}>Fri</Text>
        <Text style={styles.weekDay}>Sat</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weekDay: {
    fontSize: 24,
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
