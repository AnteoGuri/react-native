import React from 'react';
import {Node} from 'react';
import {Text, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to Cart"
        onPress={() =>
          navigation.navigate('Cart', {name: 'random param for cart'})
        }
      />
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {name: 'random param for about'})
        }
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter', {})}
      />
    </View>
  );
};

export default Home;
