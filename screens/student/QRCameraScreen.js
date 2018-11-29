import React from 'react';
import { StyleSheet, Text, View, Vibration} from 'react-native';
import Camera from '../../components/student/Camera';
import { joinRollCall }  from '../../helpers/http'
import { NavigationEvents } from 'react-navigation';

export default class QRCameraScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  state = { url: '' }; 

  onScanned({ data }) {// make joinRollCall
    if(this.state.url == ''){
      joinRollCall(data) 
      .then(response => {
        Vibration.vibrate(500)
        this.setState({ url: data })
        alert('Yoklamanız başarıyla alındı.')
        this.props.navigation.navigate("StudentLessons")
      })
      .catch(err => {
        Vibration.vibrate(500)
        this.setState({ url: data })
        alert('Hata : ' + err.message)
        this.props.navigation.navigate("StudentLessons")
        console.log(err.message)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera onScanned={this.onScanned.bind(this)} />
        <NavigationEvents onWillFocus={() => this.setState({ url: '' })} />
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
