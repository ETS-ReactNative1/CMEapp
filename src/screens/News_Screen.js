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
            <Text style={styles.h1}>News</Text>
          </View>
          <View>
            <Text style={styles.h3_1}>Materials Engineering</Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>Mar 18, 2022</Text> — Two Shepherd
              University students witnessed aircraft manufacturing over spring
              break. The delegation led by CME professor Jason Miller visited
              Carbon Fiber Composites, Inc. Company owner Brian Alley
              demonstrated the construction and installation of ailerons on an
              experimental airplane. The parts were made from layers of carbon
              fiber fabric infused with epoxy resin. This composite is high
              strength but light weight. The delegation returned with samples to
              be analyzed on Shepherd’s new strength-testing machine. This
              on-going project receives support from Shepherd University, the
              Fabrication Lab, and the CME Department; NASA WV SGC; The John
              Conard Science Fund; JLG Industries of Hagerstown MD; and CFC, Inc
              of Ona WV. Pictured below: CME students Michael Nasuti (blue) and
              Levi Junkins (orange) holding CFC parts.
            </Text>
            <Image
              style={styles.image}
              source={require('../images/news1.jpeg')}
              resizeMethod="auto"
            />
            <Text style={styles.h3}>Shepherd Robotics</Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>Mar 11, 2022</Text> — Shepherd Robotics
              competed at the West Virginia{' '}
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.robotevents.com/robot-competitions/college-competition/RE-VEXU-21-5551.html#general-info',
                  )
                }>
                VEX U
              </Text>{' '}
              qualifier at Fairmont State University (pictures below). The team
              ranked 6th out of 10 in their first time competing. Thanks to
              Professors Butcher and Guzide and corporate sponsor{' '}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL('https://www.jlg.com/')}>
                JLG Industries
              </Text>
              .
            </Text>
            <Image
              style={styles.image_a}
              source={require('../images/news2.jpg')}
              resizeMethod="auto"
            />
            <Image
              style={styles.image_b}
              source={require('../images/news3.jpeg')}
              resizeMethod="auto"
            />
            <Image
              style={styles.image}
              source={require('../images/news4.jpeg')}
              resizeMethod="auto"
            />
            <Image
              style={styles.image}
              source={require('../images/news5.jpeg')}
              resizeMethod="auto"
            />
            <Text style={styles.p}>
              <Text style={styles.ital}>Mar 8, 2022</Text>— The Shepherd
              Robotics Club visited the high school robotics team at James
              Rumsey Technical Institute (
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.jamesrumsey.com/clubs-organizations/vex-robotics/',
                  )
                }>
                JRTI
              </Text>
              ) (picture below).
            </Text>
            <Image
              style={styles.image_b}
              source={require('../images/news6.jpeg')}
              resizeMethod="auto"
            />
            <Text style={styles.h3}>S-STEM Lecture Series</Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>Mar 9, 2022</Text> — Wes Miller,
              Shepherd alum and DevSecOps Engineer at General Dynamics Mission
              Systems. “Getting from Class to Career.” 6-7pm.
            </Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>Feb 24, 2022</Text> — Stephan Hockley,
              Shepherd alum and Performance Tester at IBM Rocket Center, WV.
              “How will you measure success?” 6-7pm.
            </Text>
            <Text style={styles.h3}>Linux Vulnerability</Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>Jan 26, 2022</Text> — CyberSec firm{' '}
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.qualys.com/apps/vulnerability-management/',
                  )
                }>
                Qualys
              </Text>{' '}
              discovered a vulnerability in the Linux operating system. A common
              library called polkit can be exploited to gain root privilege. The
              news was shared quietly before being made public. Linux
              distribution companies such as Red Hat and Ubuntu have issued
              patches and updates. [
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://arstechnica.com/information-technology/2022/01/a-bug-lurking-for-12-years-gives-attackers-root-on-every-major-linux-distro/',
                  )
                }>
                News story
              </Text>
              ]
            </Text>
            <Text style={styles.h3}>S-STEM Lecture Series</Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>Jan 25, 2022</Text> — “A Look at the
              Scaled Agile Framework (SAFe)” by Mr. Greg Sager, Shepherd alum
              and Director of Software Engineers, Maritz Global Events. 6-7pm.
            </Text>
            <Text style={styles.h3}>NSF S-STEM Scholarships</Text>
            <Text style={styles.p}>
              <Text style={styles.ital}>Jan 3, 2022</Text> — Eight CME students
              were awarded NSF S-STEM scholarships for the Spring 2022 semester.
              Congratulations to the awardees! To apply for next semester, see
              CME{' '}
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    'https://www.shepherd.edu/cme/cme-scholarships',
                  )
                }>
                scholarship opportunitiess
              </Text>{' '}
              or speak to <Text style={styles.strong}>Dr. Qing Wang</Text>,
              Professor of Mathematics.
            </Text>
            <Text style={styles.h3}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('https://www.shepherd.edu/cme/cme-news')
                }>
                Full CME News
              </Text>
            </Text>
            <Text style={styles.h3}>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('http://www.shepherdu.com/cmeweb/news.php')
                }>
                CME News Archive
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
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#40668c',
    marginBottom: 10,
    marginTop: 10,
  },
  h3_1: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#40668c',
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 15,
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
    paddingBottom: 40,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 200,
  },
  image_a: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 450,
  },
  image_b: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 300,
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
