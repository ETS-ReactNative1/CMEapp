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
            <Text style={styles.h1}>For Current Students</Text>
          </View>
          <View>
            <Unorderedlist color="#333" style={{fontSize: 20, paddingTop: 15}}>
              <Text style={styles.p1}>
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.shepherd.edu/cme/job-and-internship-announcements',
                    )
                  }>
                  Find a Job or Internship
                </Text>{' '}
                (links to various search engines)
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.shepherd.edu/cme/recent-job-and-internship-opportunities/',
                    )
                  }>
                  Recent Job and Internship Opportunities
                </Text>{' '}
                (listings received in past year)
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.shepherd.edu/cme/internship-information',
                    )
                  }>
                  The Internship for Credit Program
                </Text>{' '}
                (how to apply for school credit)
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/cme-scholarships',
                  )
                }>
                Scholarship Opportunities
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/grants-fellowships-summer-programs/',
                  )
                }>
                Grants, Fellowships, Study Abroad, and Summer Programs
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/student-organizations-and-clubs',
                  )
                }>
                Student Organizations
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/student-research-and-capstones',
                  )
                }>
                Student Research and Capstones
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('https://www.shepherd.edu/cme/competitions')
                }>
                Competitions, Conferences, Hack-a-Thons
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/cme-photo-gallery',
                  )
                }>
                Photo Gallery
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/cme-academic-policies',
                  )
                }>
                Academic Policies
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/educational-resources',
                  )
                }>
                Educational Resources
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('http://www.shepherdu.com/cmeweb/urc/')
                }>
                NASA-SNSM Undergraduate Research Consortium
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>
                Scarborough Library has{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://libguides.shepherd.edu/cse')
                  }>
                  Computer & Engineering Resources
                </Text>{' '}
                such as IEEE journal subscriptions, and{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://libguides.shepherd.edu/math')
                  }>
                  Math Resources
                </Text>{' '}
                such as Finding Books.
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
  p1: {
    textAlign: 'left',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Georgia',
    paddingBottom: 4,
    paddingTop: 15,
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
