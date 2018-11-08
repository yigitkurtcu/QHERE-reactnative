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

import RequestList from '../../components/manager/RequestList';

export default class ManagerHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text  style={ styles.headerTextStyle }>Ders İstekleri</Text> 
        <RequestList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b'
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold'
  }
});
