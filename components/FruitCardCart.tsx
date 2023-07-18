import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {themeColors} from '../theme';

export default function FruitCardCart({fruit}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}>
        <TouchableOpacity>
          <Image
            style={{
              height: 65,
              width: 65,
              overflow: 'visible',
              shadowRadius: 15,
              shadowOffset: {width: 0, height: 20},
              shadowOpacity: 0.4,
              shadowColor: fruit.shadow,
            }}
            source={fruit.image}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.nameText}>{fruit.name}</Text>
          <Text style={styles.priceText}>$ {fruit.price}</Text>
        </View>
      </View>
      <View style={styles.plusminusContainer}>
        <TouchableOpacity style={styles.buttons}>
          <AntDesign name="plus" size={20} color="white" />
        </TouchableOpacity>
        <Text style={{fontSize: 14, margin: 5}}>{fruit.qty}</Text>
        <TouchableOpacity style={styles.buttons}>
          <AntDesign name="minus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    color: themeColors.orange,
    fontWeight: '800',
  },
  plusminusContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    right: 10,
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: themeColors.grey,
    borderRadius: 5,
  },
});
