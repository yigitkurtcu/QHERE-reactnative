import React from 'react';
import {
  TextInput,
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import Confirm from '../Confirm';
import { Card, CardSection, CardSectionColumn, Button } from '../common';
import InfoStudents from './InfoStudents';
import { deleteClass, getClassInfo  }  from '../../helpers/http'

class LessonInfo extends React.Component {
  state = { showDelete: false, lesson: [], students: [] };

  constructor(props) {
    super(props)
    this.renderStudents = this.renderStudents.bind(this)
  }

  componentDidMount() {
    getClassInfo(this.props.lesson._id)
    .then(response =>{
      this.setState({
      lesson: response.data,
      students: response.data[0].students
     })
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderStudents(student) {
    return <InfoStudents qhereCount={this.props.lesson.qheres.length} student={student.item} />
  }

  doDelete () {
    deleteClass(this.props.lesson._id)
    .then(res => {
      console.log('Res:', res.status_code)
      this.props.navigation.pop();
      // TODO MAKE REFRESH
    })
    .catch(err => {
        console.log('Err:', err)
    })
    this.setState({ showDelete: false });
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
            <Button color={"#000"} onPress={() => { this.props.navigation.navigate('ManagerLessonEdit', {lesson: this.state.lesson}) }}>Dersi Güncelle</Button>
            <Button color={"#ff0000"} onPress={() => {this.setState({showDelete: true})}}>Dersi Sil</Button>
          </CardSection>

          <View style={styles.centeredTextView}>
            <Text style={styles.midHeaderText}> Kayıtlı Öğrenciler </Text> 
          </View>

          <CardSection>
            <FlatList
              data={this.state.students}
              renderItem={this.renderStudents}
              keyExtractor={(student) => student._id.toString()}
            />
          </CardSection>

          <Confirm
            visible={this.state.showDelete} 
            accept={this.doDelete.bind(this)}
            decline={() => {this.setState({showDelete: false})}}>
              { className } adlı dersi silmek istediğinize emin misiniz?
          </Confirm>  
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