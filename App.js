import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './Components/AppHeader';
import WriteStory from './Screens/WriteStory';
import ReadStory from './Screens/ReadStory';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
  return (
  <AppContainer/>
  );
}
}

const tabNavigator = createBottomTabNavigator({
  writestory:WriteStory,
  readstory:ReadStory,
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName === 'Write Story'){
        return(
          <Image source={require('./assets/writestory.png')} style = {{width:40,height:40}} />
        )
      }
      else if(routeName === 'Read Story'){
        return(
          <Image source={require('./assets/readstory.png')} style = {{width:40,height:40}} />
        )
      }
    }
  })
})

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
