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
            <Text style={styles.h1}>CME Faculty</Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('../images/faculty1.jpg')}
              resizeMethod="auto"
            />
            <Text style={styles.h2}>Dr. Karen Adams</Text>
            <View style={styles.table}>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Title</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    Associate Professor of Mathematics
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Email</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL('mailto:kadams@shepherd.edu')
                      }>
                      kadams@shepherd.edu
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Phone</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL('tel:3048755772')}>
                      304-875-5772
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Office</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    311B Stutzman-Slonaker Hall
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.p_table}>
                  Dr. Adams teaches courses in Calculus, Discrete Mathematics,
                  and Algebra and also supervises student teachers.
                </Text>
              </View>
            </View>
            <Image
              style={styles.image_a}
              source={require('../images/faculty2.jpeg')}
              resizeMethod="auto"
            />
            <Text style={styles.h2}>Jessie Butcher</Text>
            <View style={styles.table}>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Title</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>Adjunct Professor</Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Email</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL('mailto:jbutcher@shepherd.edu')
                      }>
                      jbutcher@shepherd.edu
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.p_table}>
                  Professor Butcher teaches robotics. She coaches the Shepherd
                  University Robotics Team which entered the VEX U college and
                  university robotics competition for the first time in 2022.
                </Text>
              </View>
            </View>
            <Image
              style={styles.image_a}
              source={require('../images/faculty3.jpeg')}
              resizeMethod="auto"
            />
            <Text style={styles.h2}>Dr. Mohammadreza Ghahremani</Text>
            <View style={styles.table}>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Title</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    Associate Professor of Computer and Information Sciences
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Email</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    <Text
                      style={styles.link}
                      onPress={() =>
                        Linking.openURL('mailto:mghahrem@shepherd.edu')
                      }>
                      mghahrem@shepherd.edu
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Phone</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL('tel:3048765783')}>
                      304-876-5783
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <View style={styles.table_cell_l}>
                  <Text style={styles.p_table}>
                    <Text style={styles.strong}>Office</Text>
                  </Text>
                </View>
                <View style={styles.table_cell_r}>
                  <Text style={styles.p_table}>
                    204C Stutzman-Slonaker Hall
                  </Text>
                </View>
              </View>
              <View style={styles.table_row}>
                <Text style={styles.p_table}>Magnetic materials</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.image_b}
            source={require('../images/faculty4.jpg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Dr. Osman Guzide</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  Professor of Computer Science and Information Sciences
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:oguzide@shepherd.edu')
                    }>
                    oguzide@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:3048765017')}>
                    304-876-5017
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>211F Stutzman-Slonaker Hall</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                CME Department Chair Dr. Osman Guzide teaches courses in
                networks and security.{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://www.shepherd.edu/oguzide')
                  }>
                  Schedule
                </Text>
                .
              </Text>
            </View>
          </View>
          <Text style={styles.h2}>Nafiseh Jahanbakht</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>Mathematics Lecturer</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:njahanba@shepherd.edu')
                    }>
                    njahanba@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>107 Stutzman Slonaker</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Ms. Jahanbakht teaches courses in mathematics.
              </Text>
            </View>
          </View>
          <Image
            style={styles.image_b}
            source={require('../images/faculty5.jpg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Dr. Weidong Liao</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  Professor of Computer Science and Information Sciences
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:wliao@shepherd.edu')
                    }>
                    wliao@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5031')}>
                    304-876-5031
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>211E Stutzman-Slonaker Hall</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Dr. Weidong teaches courses in Web Programming and Windows
                Programming.
              </Text>
            </View>
          </View>
          <Text style={styles.h2}>Dr. Nicholas Martin</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>Professor of Mathematics</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:horvat@shepherd.edu')
                    }>
                    horvat@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5336')}>
                    304-876-5336
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>311A Stutzman-Slonaker Hall</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>Professor Emeritus, Retired</Text>
            </View>
          </View>
          <Image
            style={styles.image_a}
            source={require('../images/faculty6.jpg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Jason Miller</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  Assistant Professor of Computer Science
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  {' '}
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:jmill02@shepherd.edu')
                    }>
                    jmill02@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5070')}>
                    304-876-5070
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  309 Byrd Science and Technology Center
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://www.shepherd.edu/jason_miller')
                  }>
                  Jason Miller
                </Text>{' '}
                develops software for bioinformatics. He has published over 30
                peer-reviewed papers on genome assembly, DNA annotation, RNA
                expression, and machine learning.
              </Text>
            </View>
          </View>
          <Image
            style={styles.image_b}
            source={require('../images/faculty7.jpeg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Dr. Donald Mills</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  Assistant Professor of Mathematics
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:dmills@shepherd.edu')
                    }>
                    dmills@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5407')}>
                    304-876-5407
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>204B Stutzman-Slonaker Hall</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Dr. Mills conducts research on secure communications.
              </Text>
            </View>
          </View>
          <Image
            style={styles.image_a}
            source={require('../images/faculty8.jpg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Reza Mirdamadi</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  Associate Professor of Engineering
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:rmirdama@shepherd.edu')
                    }>
                    rmirdama@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5368')}>
                    304-876-5368
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>225 Snyder Hall</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Professor Mirdamadi teaches courses in engineering, robotics,
                and mathematics.
              </Text>
            </View>
          </View>
          <Image
            style={styles.image_a}
            source={require('../images/faculty9.jpeg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Dr. Robert Monahan</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>Mathematics Lecturer</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:rmonahan@shepherd.edu')
                    }>
                    rmonahan@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5359')}>
                    304-876-5359
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>304 Stutzman Slonaker</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Dr. Monahan teaches courses in mathematics.
              </Text>
            </View>
          </View>
          <Text style={styles.h2}>Dr. Françoise Nelles</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  Lecturer and Coordinator of Mathematics
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:fnelles@shepherd.edu')
                    }>
                    fnelles@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5333')}>
                    304-876-5333
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>305 Stutzman-Slonaker</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>Mathematics</Text>
            </View>
          </View>
          <Image
            style={styles.image_a}
            source={require('../images/faculty10.jpeg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Ken Shaw</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>Adjunct Professor</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:jshawsr@shepherd.edu')
                    }>
                    jshawsr@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>105 Stutzman-Slonaker Hall</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Professor Shaw teaches applied mathematics and statistics.
              </Text>
            </View>
          </View>
          <Image
            style={styles.image_a}
            source={require('../images/faculty11.jpeg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Roger Snook</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>Adjunct Professor</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:rsnook@shepherd.edu')
                    }>
                    rsnook@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  Write c/o CME Department or visit{' '}
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('https://www.linkedin.com/in/rogersnook')
                    }>
                    www.linkedin.com/in/rogersnook
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Professor Snook is a certified IBM cloud{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.youracclaim.com/earner/earned/badge/542c4fd0-d5a3-40af-8ea7-028e1d717ada',
                    )
                  }>
                  architect
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://www.amazon.com/Roger-Snook/e/B013CJ00X2',
                    )
                  }>
                  author
                </Text>
                ,{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://patents.google.com/?inventor=Roger+C+Snook',
                    )
                  }>
                  inventor
                </Text>
                , and mobile app{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://developer.ibm.com/profiles/rcsnook/',
                    )
                  }>
                  developer
                </Text>
                . He incorporates{' '}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL('https://www.ibm.com/design/thinking/')
                  }>
                  Enterprise Design Thinking
                </Text>{' '}
                in classes at Shepherd.
              </Text>
            </View>
          </View>
          <Image
            style={styles.image_b}
            source={require('../images/faculty12.jpg')}
            resizeMethod="auto"
          />
          <Text style={styles.h2}>Dr. Qing Wang</Text>
          <View style={styles.table}>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Title</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>Professor of Mathematics</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Email</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL('mailto:qwang@shepherd.edu')
                    }>
                    qwang@shepherd.edu
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Phone</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('tel:304-876-5643')}>
                    304-876-5643
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.table_row}>
              <View style={styles.table_cell_l}>
                <Text style={styles.p_table}>
                  <Text style={styles.strong}>Office</Text>
                </Text>
              </View>
              <View style={styles.table_cell_r}>
                <Text style={styles.p_table}>211B Stutzman-Slonaker Hall</Text>
              </View>
            </View>
            <View style={styles.table_row}>
              <Text style={styles.p_table}>
                Dr. Wang’s research is focused on modeling, simulation, and
                analysis of cancer tumors.
              </Text>
            </View>
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
    paddingBottom: 60,
    paddingRight: 10,
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
  ital: {
    fontStyle: 'italic',
  },
  strong: {
    fontWeight: 'bold',
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
