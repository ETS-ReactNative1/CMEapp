import React from 'react';
import Unorderedlist from 'react-native-unordered-list';
import {DataTable} from 'react-native-paper';
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
            <Text style={styles.h1}>Math Core Curriculum</Text>
          </View>
          <View>
            <Text style={styles.p1}>
              As a liberal arts college, Shepherd University wants students to
              learn from professors who work in a variety of disciplines. The
              mechanism to encourage diversity is called the Core Curriculum. It
              is a combination of requirements and course offerings.
            </Text>
            <Text style={styles.p}>
              The Core includes math. There are Core math courses in these
              sub-disciplines:
            </Text>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>Reasoning</Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>Algebra</Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>Discrete math</Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>Calculus</Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>Statistics.</Text>
            </Unorderedlist>
            <Text style={styles.p}>
              How to choose the Core math class that is right for you.
            </Text>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>
                The{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://courses.shepherd.edu/access/content/group/23c43ea2-e13a-4b63-97c4-c7b7f4ec554c/Satisfactory%20Math%20Placement%20Scores.pdf',
                    )
                  }>
                  Satisfactory Math Placement Scores
                </Text>{' '}
                document suggests a first math class based on the student’s
                standardized test score (SAT, ACT, or Accuplacer).
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>
                Core Curriculum{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.shepherd.edu/core-curriculum-checklists/',
                    )
                  }>
                  worksheets
                </Text>{' '}
                help students plan to fulfill all the Core requirements.
                Students should use the worksheet corresponding to their first
                year at Shepherd.
              </Text>
            </Unorderedlist>
            <Unorderedlist color="#333" style={{fontSize: 20}}>
              <Text style={styles.p}>
                The math core code is <Text style={styles.strong}>MA</Text>.
              </Text>
            </Unorderedlist>
            <Text style={styles.p}>
              <Text style={styles.strong}>
                Advisors should use the table below.
              </Text>
            </Text>
            <View style={styles.table}>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>Course</Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>Description</Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>
                      Quantitative Reasoning, MATH 107 (3 credits)
                    </Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    Designed for liberal arts students whose curricula do not
                    require any other math courses. The QR course addresses
                    aspects of quantitative literacy relevant in academia,
                    citizenship, and general life. Students who do not meet the{' '}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(
                          'https://courses.shepherd.edu/access/content/group/23c43ea2-e13a-4b63-97c4-c7b7f4ec554c/Satisfactory%20Math%20Placement%20Scores.pdf',
                        )
                      }>
                      necessary placement scores
                    </Text>{' '}
                    can enroll in the lab version MATH 107A (4 credits), which
                    does not have any minimum placement score.
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>
                      Statistical Reasoning, MATH 109 (3 credits)
                    </Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    This course is an introductory statistics course that can be
                    used as the core math requirement. This course also serves
                    as a prerequisite for students who will be taking more
                    advanced, discipline-specific statistics courses in
                    psychology or sociology departments. Students who do not
                    meet the{' '}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(
                          'https://courses.shepherd.edu/access/content/group/23c43ea2-e13a-4b63-97c4-c7b7f4ec554c/Satisfactory%20Math%20Placement%20Scores.pdf',
                        )
                      }>
                      necessary placement scores
                    </Text>{' '}
                    can enroll in the lab version MATH 109A (4 credits), which
                    does not have any minimum placement score.
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>
                      College Algebra, MATH 105 (3 credits)
                    </Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    Designed to meet the algebra needs of students in STEM
                    majors. Students who do not meet the{' '}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(
                          'https://courses.shepherd.edu/access/content/group/23c43ea2-e13a-4b63-97c4-c7b7f4ec554c/Satisfactory%20Math%20Placement%20Scores.pdf',
                        )
                      }>
                      necessary placement scores
                    </Text>
                    , but whose curricula require Math 105, should enroll in
                    Math 101, which does not have any minimum placement score.
                    After successful completion of Math 101, such students can
                    then take Math 105.
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>
                      Calculus, Discrete, Statistics
                    </Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    Students who have the{' '}
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL(
                          'https://courses.shepherd.edu/access/content/group/23c43ea2-e13a-4b63-97c4-c7b7f4ec554c/Satisfactory%20Math%20Placement%20Scores.pdf',
                        )
                      }>
                      necessary placement scores
                    </Text>{' '}
                    can use Precalculus (Math 108), Discrete Structures (Math
                    155), Calculus with Applications (Math 105), or Calculus I
                    (Math 207) as their core math course. Some majors require
                    that students take one of these as their core math course,
                    and some majors require Calculus I instead of Calculus with
                    Applications. Statistics (Math 314) can also be used for
                    core math but it requires either a prerequisite math course
                    or special permission.
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.p}>
              Visit the{' '}
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL('https://www.shepherd.edu/core-curriculum')
                }>
                Core Curriculum
              </Text>{' '}
              home page for information about the Core.
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
  ital: {
    fontStyle: 'italic',
  },
  strong: {
    fontWeight: 'bold',
  },
  ital: {
    fontStyle: 'italic',
  },
  table: {
    width: '100%',
    marginTop: 15,
    marginBottom: 45,
  },
  table_row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 6,
    paddingTop: 6,
  },
  table_cell_l: {
    flex: 0.25,
  },
  table_cell_r: {
    flex: 0.75,
  },
  p_table: {
    textAlign: 'left',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto',
    lineHeight: 20,
  },
});
