import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, RefreshControl,TouchableOpacity } from 'react-native';
import MyLesson from './MyLesson'
import axios from 'axios';
import { getMyClasses }  from '../../helpers/http'
import { clearStore } from '../../helpers/localStore';import { getKey } from '../../helpers/localStore';
export default class LessonList extends Component {

    state = { lessons: [], refreshing: true, error: false}; 

    componentWillMount() {
        this.makeRequest();
    }
    
    handleRefresh = () => {
        this.setState({refreshing: true});
        this.makeRequest();
    }

    makeRequest = () => {
        getMyClasses()
        .then(response => this.setState({
             lessons: response.data ,
             refreshing: false,
             error: false
            }))
        .catch(err => {
            this.setState({refreshing: false, error: true});
            console.log(err)
        })
    }

    renderLessons(lesson) {
        return <MyLesson lessonInstance={lesson.item} />
    }

    errorMessage = () => {
        if(this.state.error)
        return(
            <Text style={{color:'#e53935', fontSize: 22, alignSelf: 'center', margin: 15, fontWeight:'bold'}}>Ağ Hatası!</Text>
        );
    }

    logout = () => {
        clearStore();
    }


    render() {
        return (
            <View style={{flex:1, backgroundColor: '#01579b'}}>
                {this.errorMessage()}
                <FlatList 
                    data={this.state.lessons}
                    renderItem={this.renderLessons}
                    keyExtractor={(lesson) => lesson._id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.handleRefresh.bind(this)}
                            tintColor="#fff"
                            titleColor="#fff"
                         />
                    }
                />
                <TouchableOpacity onPress={this.logout}>
                    <Text>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}  

