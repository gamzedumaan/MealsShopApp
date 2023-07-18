import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function FruitCardSales({furits}) {
  const navigation = useNavigation();
  return (
    <View style={{margin: 10, padding: 10}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductScreen', {
            ...furits,
            color: furits.color(1),
          })
        }>
        <Image
          source={furits.image}
          style={{
            height: 65,
            width: 65,
            shadowColor: furits.shadow,
            overflow: 'visible',
            shadowRadius: 15,
            shadowOffset: {width: 0, height: 20},
            shadowOpacity: 0.4,
          }}
        />
      </TouchableOpacity>
      <View style={{backgroundColor: furits.color(0.4)}}>
        <Text>$ {furits.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
