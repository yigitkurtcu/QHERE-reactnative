import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import axios from 'axios';

import { createClass }  from '../../helpers/http'

class ClassForm extends React.Component {
  state = { className: '', lastJoinTime: '', quota: '', discontinuity: '', description: ''}

  doCreateClass() {
    if(this.state.className != '' && this.state.lastJoinTime != '' && this.state.quota != '' && this.state.discontinuity != '' && this.state.description != ''){
      var classInstance = {
        className: this.state.className,
        lastJoinTime: this.state.lastJoinTime,
        quota: this.state.quota,
        discontinuity: this.state.discontinuity,
        description: this.state.description
      }
      createClass(classInstance)
      .then(res => {
        alert('Ders başarıyla oluşturuldu.')
        console.log(res)
      })
      .catch(err => {
        alert('Başarısız!')
        console.log(err)
      })
    } else {
      alert('Hepsini doldurmalısın.')
    }
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
          onSubmitEditing={() => {this.doCreateClass()}}
          style={styles.input}
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <TouchableOpacity style={styles.button} onPress={() => {this.doCreateClass()}}>
            <Text style={styles.buttonText}>Sınıf Oluştur</Text>
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