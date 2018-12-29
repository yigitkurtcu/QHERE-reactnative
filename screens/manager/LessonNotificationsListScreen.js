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

import NotificationList from '../../components/manager/NotificationList';
import TabBarIcon from '../../components/TabBarIcon';
import { headerStyle } from '../../config/config';


export default class NotificationListScreen extends React.Component {
  state = {lesson: this.props.navigation.getParam('lesson')}

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Duyuru Listesi',
      headerRight: (
        <View style={{marginRight: 12}}>
          <TouchableOpacity onPress={() => { navigation.navigate('ManagerCreateNotification', {lesson: navigation.state.params.lesson}) }}>
            <TabBarIcon
              name={ Platform.OS === 'ios'? `ios-add-circle`: 'md-add-circle' }
            />
          </TouchableOpacity>
        </View>

      ),
      ...headerStyle
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <NotificationList lesson={this.state.lesson}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b',
  },
  headerRightContainer: {
    marginRight: 12,
  },
});
