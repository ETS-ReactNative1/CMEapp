import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {backgroundColor} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Header = props => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require('../images/shepherd_logo.png')}
        resizeMode="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 100,
    backgroundColor: '#036',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 33,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    height: '100%',
  },
});

export default Header;
