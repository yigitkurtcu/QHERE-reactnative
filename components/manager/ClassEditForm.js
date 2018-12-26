import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import axios from 'axios';

import { editClass }  from '../../helpers/http'

class ClassForm extends React.Component {
  state = { className: this.props.lesson[0].className, lastJoinTime: this.props.lesson[0].lastJoinTime, quota: this.props.lesson[0].quota.toString(), discontinuity: this.props.lesson[0].discontinuity.toString(), description: this.props.lesson[0].description}

  doEditClass() {    
    var classInstance = {
      className: this.state.className,
      lastJoinTime: this.state.lastJoinTime,
      quota: this.state.quota,
      discontinuity: this.state.discontinuity,
      description: this.state.description
    }
    editClass(this.props.lesson[0]._id, classInstance)
    .then(res => {
      alert('Ders başarıyla düzenlendi.')
      console.log(res)
    })
    .catch(err => {
      alert('İstek başarısız.')
      console.log(err)
    })
  }

  
  render () {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Sınıf İsmi"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(className) => this.setState({className})}
          value={this.state.className}
        />
        <TextInput 
          placeholder="Son Katılma Zamanı (2018-10-28)"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(lastJoinTime) => this.setState({lastJoinTime})}
          value={this.state.lastJoinTime}
        />
        <TextInput 
          placeholder="Sınıf Kontenjanı"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(quota) => this.setState({quota})}
          value={this.state.quota}
        />
        <TextInput 
          placeholder="Devamsızlık Sayısı"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(discontinuity) => this.setState({discontinuity})}
          value={this.state.discontinuity}
        />
        <TextInput 
          placeholder="Dersin Açıklaması"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          returnKeyType={'send'}
          onSubmitEditing={() => {this.doEditClass()}}
          style={styles.input}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <TouchableOpacity style={styles.button} onPress={() => {this.doEditClass()}}>
            <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>
      </View>        
    );
  }
}

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      alignItems: 'center',
      marginTop: 30
    },
    input: {
      fontSize: 16,
      height: 40,
      width: 300, 
      backgroundColor: '#fafafa',
      borderWidth: 1,
      borderColor: '#c7c7c7',
      borderRadius: 5,
      color: '#000000',
      marginVertical: 10,
      paddingHorizontal: 15
    },
    button: {
      height: 50,
      width:300,
      backgroundColor: '#66ccff',
      borderRadius: 5,
      marginVertical: 10,
      paddingVertical: 10,
    },
    buttonText: {
      fontSize: 18,
      fontWeight:'500',
      textAlign: 'center'
    }
  });

export default ClassForm;