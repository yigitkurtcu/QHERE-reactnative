import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import MyLesson from './MyLesson'
import axios from 'axios';
import { getMyClasses }  from '../../helpers/http'

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
            </View>
        );
    }
}  

