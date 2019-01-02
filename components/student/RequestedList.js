import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import Requested from './Requested'
import { getMyRequested }  from '../../helpers/http'

export default class RequestedList extends Component {

    state = { requested: [], refreshing: true, error: false}; 

    componentWillMount() {
        this.makeRequest();
    }
    
    handleRefresh = () => {
        this.setState({refreshing: true});
        this.makeRequest();
    }

    makeRequest = () => {
        getMyRequested()
        .then(response => this.setState({
             requested: response.data ,
             refreshing: false,
             error: false
            }))
        .catch(err => {
            this.setState({refreshing: false, error: true});
            console.log(err)
        })
    }

    renderRequested(request) {
        return <Requested requestInstance={request.item} />
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
                    data={this.state.requested}
                    renderItem={this.renderRequested}
                    keyExtractor={(request) => request._id.toString()}
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

