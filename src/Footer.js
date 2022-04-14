import React from 'react';
import {StyleSheet, View, Image, Text, Linking} from 'react-native';

const Footer = props => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require('../src/images/logo_wb.jpg')}
        resizeMode="center"
      />
      <Text style={styles.bold_text}>
        VISIT
        <Text style={styles.inner_text}>
          {' '}
          <Text
            style={styles.inner_text}
            onPress={() => Linking.openURL('http://goo.gl/maps/FdIVn')}>
            301 N KING ST, SHEPHERDSTOWN, WV 25443
          </Text>
        </Text>
      </Text>
      <Text style={styles.bold_text}>
        MAIL
        <Text
          style={styles.inner_text}
          onPress={() => Linking.openURL('https://goo.gl/maps/MPk1d')}>
          {' '}
          P.O. BOX 5000, SHEPHERDSTOWN, WV 25443
        </Text>
      </Text>
      <Text style={styles.bold_text}>
        CALL
        <Text
          style={styles.inner_text}
          onPress={() => Linking.openURL('tel:3048765000')}>
          {' '}
          304.876.5000
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 220,
    backgroundColor: '#036',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    width: 155,
  },
  bold_text: {
    fontWeight: '700',
    color: '#fb3',
    fontFamily: 'Roboto',
    letterSpacing: 2,
    fontSize: 10,
    paddingBottom: 10,
  },
  inner_text: {
    color: '#ccd6e0',
  },
});

export default Footer;

// TODO: LINKS SOCIAL MEDIA ICONS
