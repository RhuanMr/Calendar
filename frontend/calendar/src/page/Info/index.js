import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import DaySheet from '../../components/DaySheet';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';

export default function Info({navigation, route}) {
  return (
    <View>
      <Header />
      <DaySheet data={route.params.data} />
      <View style={styles.backContainer}>
        <View style={styles.backConatainerHeader}>
          <Text style={styles.Title}>Reminders</Text>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Create', route.params)}>
              <Icon name="plus" color="black" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="trash-2" color="black" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.list}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 24,
    marginLeft: 10,
  },
  backConatainerHeader: {
    flexDirection: 'row',
  },
  backContainer: {
    marginTop: 30,
  },
  icons: {
    marginLeft: '50%',
    flexDirection: 'row',
  },
});
