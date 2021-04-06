import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {renderMonth} from '../../functions/script';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

export default function Header({data}) {
  const navigation = useNavigation();
  const [time, setTime] = useState(renderMonth());

  if (data === 1) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-left-circle" color="black" size={30} />
        </TouchableOpacity>
        <Text style={styles.monthYear}>{time}</Text>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-right-circle" color="black" size={30} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" color="black" size={30} />
        </TouchableOpacity>
        <Text style={styles.monthYear}>{time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.23)',
  },
  monthYear: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    margin: 20,
  },
});
