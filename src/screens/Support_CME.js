import React from 'react';
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
            <Text style={styles.h1}>
              Support Computer Science, Mathematics, and Engineering
            </Text>
          </View>
          <View>
            <Text style={styles.p1}>
              <Text style={styles.strong}>
                <Text style={styles.ital}>
                  Please use the form below if you would like to make an online
                  donation.
                </Text>
              </Text>
            </Text>
            <Text style={styles.p}>
              If you want to make a gift by check, please follow{' '}
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://shepherduniversityfoundation.org/making-a-gift/',
                  )
                }>
                this link
              </Text>{' '}
              to download a giving form. Put CME/General Fund in the “other”
              line on the form, and mail the form and check to:
            </Text>
            <Text style={styles.p}>
              Shepherd University College of Science, Technology, Engineering,
              and Mathematics{'\n'}Attention: Teresa Newcome PO Box 5000{'\n'}
              Shepherdstown, WV 25443
            </Text>
            <Text style={styles.p}>
              Make all checks payable to the Shepherd University Foundation.
            </Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>
                For assistance, contact Meg Patterson, Shepherd University
                Foundation director of donor relations, at 304-876-5021 or
                mpeterso@shepherd.edu.
              </Text>
            </Text>
            <Text style={styles.h3}>
              Donate{' '}
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/support-computerscience-math-engineering',
                  )
                }>
                here
              </Text>
            </Text>
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
  h3: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'black',
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
  p1: {
    textAlign: 'left',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Georgia',
    paddingBottom: 4,
    marginBottom: 12,
    lineHeight: 25,
    paddingTop: 15,
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
  },
  strong: {
    fontWeight: 'bold',
  },
  ital: {
    fontStyle: 'italic',
  },
});

// TODO: Link na EMAIL!!!
