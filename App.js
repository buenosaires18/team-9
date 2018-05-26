import React from 'react';
import { Constants, Video } from 'expo';
import { View, StatusBar, StyleSheet, Button, Alert, Image, ScrollView } from 'react-native';
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
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} >
  
      <View style={[styles.imageContainer, { backgroundColor: '#ff4081' }]}>
      <Image source={{uri: 'https://image.ibb.co/cD34Fo/BE_A_MENTOR_logo.png'}}
      style={styles.imageCanvas} />
      </View>
      <View style={[styles.buttonContainer, { backgroundColor: '#ff4081' }]}>
      <Button onPress={() => {
       Alert.alert('Video here!');
      }}
      title="Press Me"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      </View>
      </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} >
    <ScrollView>
    <Form type={User} />
    </ScrollView>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#00aeef' }]}>
 
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        
        // pause not working
        paused={this.state.paused}
      onLoad={() => {
      this.setState({
        paused: true
      });
        }}
        
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
  </View>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [{ key: '1', title: 'Stage 1' }, { key: '2', title: 'Stage 2' }, { key: '3', title: 'Stage 3' }],
  };

  _handleIndexChange = index => {
    this.setState({index})
  };

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
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
  container: {
    flex: 1,
  },
  imageContainer: {
    height: '90%'
  },
  buttonContainer: {
    height: '10%'
  },
  imageCanvas: {
    flex: 1,
  }
});
