import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import Request from './Request'
import { getRequests }  from '../../helpers/http'
export default class RequestList extends Component {
    state = { requests: [], refreshing: true, error: false}; 

    componentWillMount() {
        this.makeRequest();
    }
    
    handleRefresh = () => {
        this.setState({refreshing: true});
        this.makeRequest();
    }

    makeRequest = () => {
        getRequests()
        .then(response => this.setState({
            requests: response.data ,
            refreshing: false,
            error: false
            }))
        .catch(err => {
            this.setState({refreshing: false, error: true});
            console.log(err)
        })
    }

    renderRequests(request) {
        return <Request requestInstance={request.item} />
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
                    data={this.state.requests}
                    renderItem={this.renderRequests}
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

