import React from 'react';
import { StyleSheet, Text, View, Vibration} from 'react-native';
import Camera from '../../components/student/Camera';
import { joinRollCall }  from '../../helpers/http'
import { NavigationEvents } from 'react-navigation';
import { headerStyle } from '../../config/config';

export default class QRCameraScreen extends React.Component {
  static navigationOptions = {
    title: 'Yoklama Ver',
    ...headerStyle
  };

  state = { url: '', showCamera: false }; 

  renderCamera() {
    if(!this.state.showCamera)
      return null;
    return <Camera onScanned={this.onScanned.bind(this)} />
  }

  onScanned({ data }) {
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
        alert(err)
        console.log(err)
        this.props.navigation.navigate("StudentLessons")
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCamera()}
        <NavigationEvents 
          onWillFocus={() => this.setState({ url: '', showCamera: true })}
          onDidBlur={() => this.setState({ showCamera: false })}
        />
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
