import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import Lesson from './Lesson'

import { getClasses }  from '../../helpers/http'
export default class LessonList extends Component {
    state = { lessons: [] };

    componentWillMount() {
        getClasses()
        .then(response => this.setState({ lessons: response.data }))
        .catch(err => {
            console.log(err)
        })

    }
    
    renderLessons(lesson) {
        return <Lesson lessonInstance={lesson.item} />
    }

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList 
                    data={this.state.lessons}
                    renderItem={this.renderLessons}
                    keyExtractor={(lesson) => lesson._id.toString()}
                />
            </View>
        );
    }
}  