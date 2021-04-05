import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Day({data}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.number}>{data.number}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 30,
    marginVertical: 10,
  },
  number: {
    fontSize: 24,
  },
});
