import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import Notification from './Notification'
import { getMyNotifications }  from '../../helpers/http'

export default class NotificationList extends Component {

    state = { notifications: [], refreshing: true, error: false}; 

    componentWillMount() {
        this.makeRequest();
    }
    
    handleRefresh = () => {
        this.setState({refreshing: true});
        this.makeRequest();
    }

    makeRequest = () => {
      getMyNotifications()
        .then(response => this.setState({
          notifications: response.data ,
          refreshing: false,
          error: false
            }))
        .catch(err => {
            this.setState({refreshing: false, error: true});
            console.log(err)
        })
    }

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
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh.bind(this)}
                            tintColor="#fff"
                            titleColor="#fff"
                         />
                    }
                />
            </View>
        );
    }
}  

