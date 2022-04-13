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
            <Text style={styles.h1}>Programs of Study</Text>
          </View>
          <View>
            <Text style={styles.h2}>Undergraduate Degrees</Text>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1196',
                  )
                }>
                Computer and Information Sciences Comprehensive, B.S.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1198',
                  )
                }>
                Computer and Information Technology Comprehensive, B.S.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1199',
                  )
                }>
                Computer Engineering Comprehensive, B.S.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1294',
                  )
                }>
                Data Analytics Comprehensive, B.S.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1296',
                  )
                }>
                Engineering Science Comprehensive, B.S.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1237',
                  )
                }>
                Mathematics Comprehensive, B.S.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=16&poid=1892&returnto=2891',
                  )
                }>
                Applied Mathematics Comprehensive, B.S.
              </Text>
            </Unorderedlist>
            <Text style={styles.h2}>Graduate Degrees</Text>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1300',
                  )
                }>
                Data Analytics and Information Systems, M.S.
              </Text>
            </Unorderedlist>
            <Text style={styles.h2}>Dual Majors</Text>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1280',
                  )
                }>
                Dual Major: Mathematics and Computer Science
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1281',
                  )
                }>
                Dual Major: Computer Engineering and Computer Science
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'http://catalog.shepherd.edu/preview_program.php?catoid=13&poid=1279',
                  )
                }>
                Dual Major: Computer Engineering and Mathematics{' '}
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text style={styles.p}>
                Dual Major: Mathematics and Systems Engineering
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text style={styles.p}>
                Dual Major: Mathematics and Data Analytics
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
    fontFamily: 'Roboto-Regular',
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
