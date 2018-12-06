import React from 'react';
import {
  TextInput,
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import { Card, CardSection, CardSectionColumn, Button } from '../common';
import InfoStudents from './InfoStudents';

class LessonInfo extends React.Component {

  renderStudents(student) {
    return <InfoStudents student={student.item} />
  }

  render () {
    const { className, discontinuity, quota } = this.props.lesson;

    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.centeredTextView}>
            <Text style={styles.headerText}>{ className }</Text> 
          </View>

          <CardSectionColumn>
              <Text style={styles.midHeaderText}>Kontenjan:  <Text style={ styles.normalText }> { quota } </Text></Text>
              <Text style={styles.midHeaderText}>Devamsızlık:  <Text style={ styles.normalText }>{ discontinuity } Ders </Text></Text>
          </CardSectionColumn>

          <CardSection>
            <Button color={"#000"} onPress={() => {this.setState({showConfirmation: true})}}>Dersi Güncelle</Button>
            <Button color={"#ff0000"} onPress={() => {this.setState({showConfirmation: true})}}>Dersi Sil</Button>
          </CardSection>

          <View style={styles.centeredTextView}>
            <Text style={styles.midHeaderText}> Kayıtlı Öğrenciler </Text> 
          </View>

          <CardSection>
          
            <FlatList 
              data={this.props.lesson.students}
              renderItem={this.renderStudents}
              keyExtractor={(student) => student._id.toString()}
            />
          </CardSection>
        </Card>
      </View>
                
      );
  }
    
  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      marginTop: 10
    },
    headline: {
      textAlign: 'center', // <-- the magic
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 0,
      width: 200,
      backgroundColor: 'yellow',
    },
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignSelf: 'stretch',
    },
    centeredTextView: {
      borderBottomWidth: 1,
      padding: 10,
      backgroundColor: '#fff',
      justifyContent: 'center',
      borderColor: '#ddd',
      position: 'relative',
      alignItems: 'center'
    },
    headerText: {
      fontSize: 22,
      fontWeight: 'bold'
    },
    midHeaderText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    normalText: {
      fontWeight: 'normal',
    }
  });

export default LessonInfo;