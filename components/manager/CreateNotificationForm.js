import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import { sendNotification }  from '../../helpers/http'

export default class ClassNotificationForm extends React.Component {
  state = { title: '', content: ''}

  doCreateNotification() {    
    var notificationInstance = {
        id: this.props.lesson._id,
        className: this.props.lesson.className,
        title: this.state.title,
        content: this.state.content
    }
    console.log(notificationInstance)
    sendNotification(notificationInstance)
    .then(res => {
      alert('Duyuru başarıyla oluşturuldu.')
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
          placeholder="Duyuru Adı"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TextInput 
          placeholder="Duyuru İçeriği"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(content) => this.setState({content})}
          value={this.state.content}
        />
        <TouchableOpacity style={styles.button} onPress={() => {this.doCreateNotification()}}>
            <Text style={styles.buttonText}>Duyuru Yolla</Text>
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