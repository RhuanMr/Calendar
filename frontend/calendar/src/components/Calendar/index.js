import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {renderCalendar} from '../../functions/script';
import Day from '../day';

export default function Calendar() {
  const [days, setDays] = useState(renderCalendar());
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
      <FlatList
        numColumns={7}
        data={days}
        keyExtractor={item => item.key}
        renderItem={({item}) => <Day data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  weekDay: {
    fontSize: 24,
    flex: 1,
  },
  week: {
    flexDirection: 'row',
    marginLeft: 12,
  },
});
