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

export default class ManagerHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  state = {lesson: this.props.navigation.getParam('lesson')}

  render() {
    const { className } = this.state.lesson;
    return (
      <View style={styles.container}>
        <Text  style={ styles.headerTextStyle }>{className}</Text>  
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
  },
  smallHeaderTextStyle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  }
});
