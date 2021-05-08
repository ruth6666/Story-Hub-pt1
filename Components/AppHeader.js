import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeader extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Story Hub</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      color:'darkblue',
      fontWeight:'bold',
      fontSize:20,
  },
});