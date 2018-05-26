import React from 'react';
import { Constants } from 'expo';
import { View, StatusBar, StyleSheet, Image, ScrollView, Text} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'; // 0.0.67

import t from 'tcomb-form-native'; // 0.6.13

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  surname: t.String,
  username: t.String,
  password: t.String,
  dni: t.String,
  birth: t.String,
  city: t.String,
  cp: t.String
});


const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ADD8E6' }]} >
      <View style={[styles.imageContainer, { backgroundColor: '#ff4081' }]}>
      <Image source={{uri: 'https://image.ibb.co/cD34Fo/BE_A_MENTOR_logo.png'}}
      style={styles.imageCanvas} />
      
      </View>
      </View>

);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#00aeef', alignItems:"center", justifyContent:"center" }]}>
      <Text style={styles.paragraph, {fontSize: 24}}>
          Video here!
        </Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#00aeef', alignItems:"center", justifyContent:"center" }]} >
        <Text style={styles.paragraph, {fontSize: 24, marginLeft:20, marginRight:20}}>
          Here we explain the role of a mentor
        </Text>
  </View>
);

const FourRoute = () => (
  <View style={[styles.container, { backgroundColor: '#FFFFFF' }]} >
  <View style={[styles.container, { backgroundColor: '#FFFFFF', left:20, right:20, justifyContent:"center" }]} >
    <ScrollView>
    <Form type={User} />
    </ScrollView>
  </View>
  </View>
);

const FifthRoute = () => (
  <View style={[styles.container, { backgroundColor: '#00aeef', alignItems:"center", justifyContent:"center" }]} >
          <Text style={styles.paragraph, {fontSize: 24}}>
          Here we remember mentors each of 
          the student formation stages
        </Text>
  </View>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [{ key: '1', title: 'Intro' }, { key: '2', title: 'Video' }, { key: '3', title: 'Mentoring' }, { key: '4', title: 'Form' }, { key: '5', title: 'Students' }],
  };

  _handleIndexChange = index => {
    this.setState({index})
  };

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': FourRoute,
    '5': FifthRoute,
  });

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#1982f3',
        }}>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleIndexChange}
        />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    alignSelf: "center",
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    height: '90%'
  },
    imageCanvas: {
    flex: 1,
  }
});


