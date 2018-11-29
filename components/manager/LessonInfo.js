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

class LessonInfo extends React.Component {
  
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.props.lesson.className}</Text>
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

export default LessonInfo;