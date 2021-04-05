import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.monthYear}>2021 | April</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.23)',
  },
  monthYear: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
