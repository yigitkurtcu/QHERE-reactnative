import React, { PureComponent } from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import MyLesson from './MyLesson'
import { getManagerClasses }  from '../../helpers/http'

export default class LessonList extends PureComponent {

    state = { lessons: [], refreshing: true, error: false}; 

    constructor(props) {
        super(props)
        this.renderLessons = this.renderLessons.bind(this)
    }

    componentWillMount() {
        this.makeRequest();
    }
    
    handleRefresh = () => {
        this.setState({refreshing: true});
        this.makeRequest();
    }

    makeRequest = () => {
        getManagerClasses()
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
        return <MyLesson navigation={this.props.navigation} lessonInstance={lesson.item} />
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
                    extraData={{navigation: this.props.navigation}}
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

