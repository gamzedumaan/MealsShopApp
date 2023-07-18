import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {themeColors} from '../theme';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

export default function FruitCard({fruits}) {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(fruits);
  return (
    <View
      style={{
        width: 270,
        borderRadius: 40,
        backgroundColor: fruits.color(1),
        margin: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          shadowRadius: 40,
          shadowOffset: {width: 0, height: 50},
          shadowOpacity: 0.6,
        }}>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => setIsFavorite(!isFavorite)}>
          <AntDesign
            name="heart"
            size={24}
            color={isFavorite ? fruits.shadow : 'white'}
          />
        </TouchableOpacity>
        <Image style={styles.image} source={fruits.image} />
      </View>
      <View >
        <Text style={styles.name}>{fruits.name}</Text>
        <Text style={styles.price}>$ {fruits.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 210,
  },
  name: {
    fontWeight: 'bold',
    color: themeColors.primaryColor,
    shadowOpacity: 1,
    marginLeft: 10,
  },
  price: {
    fontWeight: 'bold',
    color: themeColors.primaryColor,
    shadowOpacity: 1,
    marginLeft: 15,
    marginBottom: 10,
  },
});
