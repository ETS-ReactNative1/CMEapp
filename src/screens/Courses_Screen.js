import React from 'react';
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
            <Text style={styles.h1}>Courses</Text>
          </View>
          <View>
            <Text style={styles.h2}>Undergraduate Courses</Text>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('https://www.shepherd.edu/cme/cis-courses')
                }>
                Computer and Information Sciences
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('https://www.shepherd.edu/cme/cpe-courses')
                }>
                Computer Engineering
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('https://www.shepherd.edu/cme/da-courses')
                }>
                Data Analytics
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/engineering-courses',
                  )
                }>
                Engineering
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/mathematics-courses',
                  )
                }>
                Mathematics
              </Text>
            </Unorderedlist>
            <Text style={styles.h2}>Graduate Courses</Text>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/ms-dais-courses',
                  )
                }>
                Data Analytics and Information Systems
              </Text>
            </Unorderedlist>
          </View>
        </View>
        <Footer />
      </ScrollView>
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
  h2: {
    fontSize: 26,
    marginBottom: 24,
    marginTop: 30,
    paddingTop: 20,
    fontFamily: 'Roboto',
    color: '#40668c',
    fontWeight: 'bold',
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
    paddingBottom: 60,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 200,
  },
  link: {
    color: 'orange',
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Georgia',
    paddingBottom: 4,
    marginBottom: 12,
    lineHeight: 25,
  },
});
