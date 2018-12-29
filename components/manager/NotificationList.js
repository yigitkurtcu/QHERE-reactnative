import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import Notification from './Notification'
export default class NotificationList extends Component {
    state = { notifications: this.props.lesson.notification, refreshing: true, error: false}; 

    renderNotifications(notification) {
        return <Notification notificationInstance={notification.item} />
    }

    errorMessage = () => {
        if(this.state.error)
        return(
            <Text style={{color:'#e53935', fontSize: 22, alignSelf: 'center', margin: 15, fontWeight:'bold'}}>Ağ Hatası!</Text>
        );
    }


    render() {
        return (
            <View style={{flex:1, backgroundColor: '#01579b'}}>
                {this.errorMessage()}
                <FlatList 
                    data={this.state.notifications}
                    renderItem={this.renderNotifications}
                    keyExtractor={(notification) => notification._id.toString()}
                />
            </View>
        );
    }
}  

