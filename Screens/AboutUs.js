import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class AboutUs extends React.Component {
    static navigationOptions = {
      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name='ios-information-circle-outline' size={30}
        />
      ),
    };
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name='ios-menu' size={40}
            style={styles.icon}
            onPress={() => this.props.navigation.toggleDrawer()} />
          </View>
          <Text>About Us Screen</Text>
        </View>
      );
    }
  }
  

  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start'
      },
    header: {
      alignSelf: 'stretch',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      backgroundColor: 'maroon',
      height: 90
    },
    icon: {
      paddingLeft: 20,
      color: 'white'
    }
  });


  export default AboutUs;
