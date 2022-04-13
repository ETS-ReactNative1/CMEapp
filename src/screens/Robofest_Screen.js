import React from 'react';
import {WebView} from 'react-native-webview';
import Unorderedlist from 'react-native-unordered-list';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import Header from '../Header';
import Footer from '../Footer';

export default function Main_Screen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.cme_head}>
            <Text style={styles.h1}>Robofest</Text>
          </View>
          <View>
            <Text style={styles.h1_a}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://www.shepherdu.com/cmeweb/srf/index.php',
                  )
                }>
                Click here to visit ShepRobo Fest website!
              </Text>
            </Text>
          </View>
        </View>
        <Footer />
      </ScrollView>
      {/* SCROLL VIEW OBMEDZ DOLE A HORE */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#036',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
  cme_head: {
    borderBottomWidth: 1,
    borderBottomColor: '#bfccd9',
  },
  h1: {
    fontFamily: 'Georgia',
    color: '#036',
    textAlign: 'center',
    fontSize: 44,
    lineHeight: 55,
    fontWeight: '100',
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: '#bfccd9',
    borderBottomWidth: 5,
  },
  h1_a: {
    fontFamily: 'Georgia',
    color: '#036',
    textAlign: 'center',
    fontSize: 44,
    lineHeight: 55,
    fontWeight: '100',
    marginTop: 130,
    marginBottom: 10,
    borderBottomColor: '#bfccd9',
    borderBottomWidth: 5,
  },
  h3: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#40668c',
    marginBottom: 10,
    marginTop: 10,
  },
  p: {
    textAlign: 'left',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Georgia',
    paddingBottom: 4,
    marginBottom: 12,
    lineHeight: 25,
  },
  body: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 130,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 200,
  },
  link: {
    color: 'orange',
  },
  strong: {
    fontWeight: 'bold',
  },
  ital: {
    fontStyle: 'italic',
  },
});
//POTENTIAL TODO: Figure out URL from Drawer Navigation
