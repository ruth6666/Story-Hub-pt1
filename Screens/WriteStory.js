import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppHeader from '../Components/AppHeader'
export default class WriteStory extends React.Component {
    constructor(){
        super()
        this.state = {Title:'', Author:'', StoryText:''}
    }
    render(){
    return (
      <View>
        <AppHeader/>
        <TextInput style={{borderWidth:4, height:30, width:100}}
        placeholder = 'Title of your story'
        onChangeText = {(text)=>{this.setState({Title:text})}}
        value = {this.state.Title}
        placeholderTextColor = 'blue'/>

        <TextInput style={{borderWidth:4, height:30, width:100}}
        placeholder = 'Author'
        onChangeText = {(text)=>{this.setState({Author:text})}}
        value = {this.state.Author}
        placeholderTextColor = 'blue'/>

        <TextInput style={{borderWidth:4, height:300, width:200}}
        placeholder = 'Write your story'
        onChangeText = {(text)=>{this.setState({StoryText:text})}}
        value = {this.state.StoryText}
        multiline={true}
        placeholderTextColor = 'blue'/>

        <TouchableOpacity style={{backgroundColor:'pink', width:200, height:50}}>
            <Text style={{color:'blue', fontWeight:'bold'}}>Submit your story</Text>
        </TouchableOpacity>
      </View>
    );
  }
  }