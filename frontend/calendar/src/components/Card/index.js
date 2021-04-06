import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Card() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.tag} />
      <Text style={styles.content}>Make the project</Text>
      <View style={styles.endContainer}>
        <Icon name="edit" color="black" size={30} />
        <Icon name="trash" color="black" size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    height: 75,
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
    borderColor: '#C4C4C4',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    width: 25,
    height: 60,
    backgroundColor: '#FF0000',
    marginLeft: 20,
    borderRadius: 2,
  },
  content: {
    marginLeft: '20%',
  },
  endContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70,
    marginBottom: 20,
  },
});
