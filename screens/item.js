import React from 'react';
import {Node} from 'react';
import {Text, View, Button} from 'react-native';

const Item = ({navigation}) => {
  return (
    <View>
      <Text>This is about</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Text></Text>
      <Button
        title="Go Home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Item;
