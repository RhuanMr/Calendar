import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import DaySheet from '../../components/DaySheet';
import Header from '../../components/Header';

export default function Create({navigation, route}) {
  const [selectedValue, setSelectedValue] = useState('Blue');
  return (
    <View>
      <Header />
      <DaySheet data={route.params.data} />
      <View style={styles.backContainer}>
        <Text style={styles.Title}>New reminder:</Text>
        <TextInput
          placeholder="Texto"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          maxLength={30}
        />
        <TextInput
          placeholder="City"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        />
        <Picker
          selectedValue={selectedValue}
          style={styles.pick}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Blue" value="#3754E9" />
          <Picker.Item label="Red" value="#FF0000" />
          <Picker.Item label="Green" value="#05FD00" />
        </Picker>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 24,
    marginLeft: 10,
  },
  backContainer: {
    marginTop: 30,
  },
  input: {
    alignSelf: 'center',
    height: 55,
    width: '90%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    margin: 10,
  },
  pick: {
    alignSelf: 'center',
    height: 55,
    width: '90%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#C4C4C4',
  },
  button: {
    alignSelf: 'center',
    height: 55,
    width: '90%',
    backgroundColor: '#05FD00',
    margin: 10,
  },
});
