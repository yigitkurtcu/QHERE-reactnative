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

import { MonoText } from '../../components/StyledText';

export default class ManagerCreateClassScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
