import React from 'react';
import {Node} from 'react';
import {Text, Button, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setName} from '../app/slices/nameSlice';
const Welcome = ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  return (
    <View style={styles.view}>
      <Text>ENTER YOUR NAME:</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => {
          setName(val);
          console.log(name);
        }}
      />
      <Button
        title="Continue"
        onPress={() => {
          dispatch(setName(name));
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    width: 200,
    margin: 20,
  },
});
export default Welcome;
