import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import {useNavigation} from '@react-navigation/native';
import {themeColors} from '../theme';
import {categories, featuredFruits} from '../constants';
import FruitCard from '../components/FruitCard';
import FruitCardSales from '../components/FruitCardSales';
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsContainer}>
        <Feather name="menu" size={24} color="black" />
        <TouchableOpacity>
          <SimpleLineIcons
            onPress={() => navigation.navigate('CartScreen')}
            name="basket"
            size={24}
            color={themeColors.orange}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.seasonalText}>Seasonal</Text>
        <Text style={styles.texts}>Fruits and Vegetables</Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            let isActive = category == activeCategory;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveCategory(category)}
                style={styles.categoriesBox}>
                <Text
                  style={[
                    isActive
                      ? styles.categoriesTextBold
                      : styles.categoriesText,
                  ]}>
                  {category}
                </Text>
                {isActive ? <Text style={styles.bottom}>-- -</Text> : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={{}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((furit, index) => {
            return <FruitCard fruits={furit} key={index} />;
          })}
        </ScrollView>
      </View>
      <Text style={styles.hotSalesText}>Hot Sales</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{overflow: 'hidden'}}>
        {[...featuredFruits].reverse().map((fruit, index) => {
          return <FruitCardSales furits={fruit} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.primaryColor,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  hotSalesText: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    left: 15,
  },
  seasonalText: {
    fontSize: 28,
    fontWeight: '400',
  },
  texts: {
    fontSize: 29,
    fontWeight: '500',
  },
  textsContainer: {
    marginHorizontal: 15,
  },
  categoriesBox: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  categoriesText: {
    fontSize: 20,
    marginRight: 20,
  },
  categoriesTextBold: {
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
  },
  bottom: {
    color: themeColors.orange,
    fontSize: 20,
  },
});
