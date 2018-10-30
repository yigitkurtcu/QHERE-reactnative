import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { clearStore } from '../../helpers/localStore';
import { MonoText } from '../../components/StyledText';

export default class StudentLessonsScreen extends React.Component {
  static navigationOptions = {
    title: 'Derslerim',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { clearStore(); this.props.navigation.navigate('Auth')}}>
          <Text style={{color:'#fff'}}>LOGOUT!</Text>
        </TouchableOpacity>
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b',
  }
});
