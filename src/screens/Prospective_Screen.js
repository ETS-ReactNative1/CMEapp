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
            <Text style={styles.h1}>For Prospective Students</Text>
          </View>
          <View>
            <Text style={styles.p1}>
              High school students considering Shepherd University may be
              interested in the following links.
            </Text>
            <Unorderedlist color="#333" style={{fontSize: 25}}>
              <Text style={styles.p}>
                <Text style={styles.strong}>NSF S-STEM Scholarship</Text> is
                based on need and merit. New and returning students may apply.
                See{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.shepherd.edu/cme/cme-scholarships',
                    )
                  }>
                  scholarships
                </Text>
                .
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 25}}>
              <Text style={styles.p}>
                <Text style={styles.strong}>Shepherd Open:</Text> a math contest
                for high school students. The Open is organized annually with
                challenge questions selected by Shepherd University professors.
                There are cash awards for first-place, second-place,
                third-place, and honorable mention winners.
              </Text>
              <Unorderedlist color="#333" style={{fontSize: 25}}>
                <Text style={styles.p}>
                  Winners have been selected for the 2021 contest! The names
                  will be announced soon.
                </Text>
              </Unorderedlist>
              <Unorderedlist color="#333" style={{fontSize: 25}}>
                <Text style={styles.p}>
                  Participants in the 2021 contest used{' '}
                  <Text
                    style={styles.link_strong}
                    onPress={() =>
                      Linking.openURL(
                        'https://media.suweb.site/2021/01/Shepherd-Open-2021-contest.pdf?v=1630417382?v=1609849657',
                      )
                    }>
                    this PDF
                  </Text>{' '}
                  containing the (1) letter to parents and educators, (2)
                  contest rules, and (3) contest questions.
                </Text>
              </Unorderedlist>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 25}}>
              <Text style={styles.p}>
                <Text
                  style={styles.link_strong}
                  onPress={() =>
                    Linking.openURL(
                      'http://www.shepherdu.com/cmeweb/srf/index.php',
                    )
                  }>
                  Shep Robo Fest
                </Text>
                : robotics contest hosted at Shepherd University every April.
                The even was cancelled in 2020 and 2021 due to Covid-19,
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 25}}>
              <Text style={styles.p}>
                <Text style={styles.strong}>Shepherd’s </Text>
                <Text
                  style={styles.link_strong}
                  onPress={() =>
                    Linking.openURL('https://www.shepherd.edu/summer-start/')
                  }>
                  Summer Start
                </Text>{' '}
                is an immersive program designed to ease the transition from
                high school to college. It gives students a chance to earn
                credit during the summer prior to their freshman year.
                Applications are now open for summer 2021. Priority deadline is
                May 1. The program is open to students headed to any college.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 25}}>
              <Text style={styles.p}>
                <Text
                  style={styles.link_strong}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.shepherd.edu/cme/request-information-2',
                    )
                  }>
                  Request General Information
                </Text>{' '}
                about any academic program at Shepherd University.
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
  p1: {
    textAlign: 'left',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Georgia',
    paddingBottom: 4,
    marginBottom: 12,
    marginTop: 15,
    lineHeight: 25,
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
  strong: {
    fontWeight: '700',
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
  link_strong: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Georgia',
    paddingBottom: 4,
    marginBottom: 12,
    lineHeight: 25,
  },
});
