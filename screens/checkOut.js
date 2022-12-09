import React from 'react';
import {Node} from 'react';
import {Text, View, ScrollView} from 'react-native';
import CheckOutCard from './checkOutCard';

const CheckOut = ({navigation, route}) => {
  return (
    <ScrollView>
      <CheckOutCard />
    </ScrollView>
  );
};

export default CheckOut;
