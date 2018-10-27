import React from 'react';
import { StyleSheet, Text, View, Vibration} from 'react-native';
import Camera from '../../components/student/Camera';
export default class QRCameraScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };
  state = { url: null };

  onScanned({ data }) {
    Vibration.vibrate(500)
    alert('Yoklamanız başarıyla alındı.')
    this.setState({url : data});
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera onScanned={this.onScanned.bind(this)} />
        <Text>{this.state.url}</Text>
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
