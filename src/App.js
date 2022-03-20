import React from 'react';
import Unorderedlist from 'react-native-unordered-list';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.cme_head}>
            {/* ADD SPECIAL FONT!!! */}
            <Text style={styles.h1}>
              Computer Science, Mathematics, and Engineering
            </Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('../images/image1.jpeg')}
              resizeMethod="auto"
            />
            <Text style={styles.p}>
              Welcome to the Department of Computer Science, Mathematics, and
              Engineering! We offer a variety of degree options including B.S.
              in Computer Engineering, B.S. in Mathematics, B.S. in Computer and
              Information Sciences, and B.S. in Computer Information Technology.
              We are confident that our programs and the flexibility that we
              offer in many different technical areas will spark high demand
              from employers all across the United States.
            </Text>

            <Text style={styles.h3}>Mission Statement</Text>
            <Unorderedlist color="#333">
              <Text style={styles.p}>
                To enhance the education of students by instilling in them the
                love and excitement of the mathematical, computer, and
                engineering sciences and their applications.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text style={styles.p}>
                To prepare students for employment and productive careers.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333">
              <Text style={styles.p}>
                To promote lifelong learning and provide students with the
                expertise and knowledge to continue their education at the
                graduate level.
              </Text>
            </Unorderedlist>
            <Text style={styles.h3}>S-STEM Scholarship</Text>
            <Text style={styles.p}>
              Under the leadership of Dr. Qing Wang, CME applied in Spring 2020
              for an NSF S-Stem grant. Check back in Fall 2020 for outcomes!
              These NSF grants allow CME to award student scholarships on the
              basis of both merit and financial need, to new and continuing
              students, with a maximum scholarship of $10,000. The CME
              department previously won an NSF S-STEM grant covering June 2013
              through May 2018.
            </Text>
            <Text style={styles.h3}>Shep Robofest</Text>
            <Text style={styles.p}>
              Annually, the CME department and Shepherd University hosts Shep
              Robofest. For more information or to register for the Fest, go to
              our website located here!
              {/* DOPLN LINK NA HERE! <a href="http://www.shepherdu.com/cmeweb/srf/index.php">here</a> */}
            </Text>
            <Text style={styles.h3}>NASA-SNSM Research</Text>
            <Text style={styles.p}>
              In cooperation with the West Virginia Space Consortium, the CME
              department offers yearly fellowships for undergraduates to pursue
              independent research projects with the help of faculty and staff.
              Applications typically open early in the fall semester and the
              research culminates with a convention at the annual NASA day.
              Check out our website here for more details and watch our news
              feed on this page for when applications open!
            </Text>
            <Text style={styles.h3}>Faculty Openings!</Text>
            <Text style={styles.p}>
              2022 — The Department of Computer Science, Mathematics and
              Engineering at Shepherd University is seeking math and computer
              faculty. Search jobs.
              {/* DOPLN LINK NA HERE! <a href="https://jobs-shepherd.peopleadmin.com/postings/search?utf8=%E2%9C%93&amp;query=&amp;query_v0_posted_at_date=&amp;query_position_type_id%5B%5D=14&amp;435=&amp;query_organizational_tier_3_id%5B%5D=502&amp;commit=Search">jobs</a> */}
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
    // font-family: bodonisvntytwoitcstd-book,serif,
    color: '#036',
    // border-bottom: 1px solid #bfccd9;
    // padding-bottom: 20px;
    // margin-bottom: 20px;
    // text-transform: none;
    // font-size: 48px;
    // letter-spacing: .012em;
    // line-height: 120%;
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
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
  body: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 200,
  },
});
