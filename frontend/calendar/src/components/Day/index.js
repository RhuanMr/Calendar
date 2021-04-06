import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Day({data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Info', {data})}
      style={[data.type === 'today' ? styles.todayButton : styles.button]}>
      <Text style={[data.type === 'current' ? styles.number : styles.number2]}>
        {data.number}
      </Text>
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
  todayButton: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 30,
    marginVertical: 10,
    backgroundColor: '#3754E9',
    borderRadius: 100,
  },
  number: {
    fontSize: 24,
  },
  number2: {
    fontSize: 24,
    color: '#929292',
  },
});
