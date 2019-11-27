import React, { Fragment } from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import Events from './Screens/Events';
import Resources from './Screens/Resources';
import Consultants from './Screens/Consultants';
import Profile from './Screens/Profile';

const themeColor = 'maroon'

/*
Screens:
  Events
  Resources
  Consultants
  Profile
  About Us
*/


class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
    drawerLabel: 'Events',
    drawerIcon: () => (
      <Ionicons  name='ios-calendar' size={32}
      />
    )
  };
  render() {
    return (
      <Fragment>
      <StatusBar
        backgroundColor="#fff"
        barStyle="light-content" // Here is where you change the font-color
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name='ios-menu' size={40}
          style={styles.icon}
          onPress={() => this.props.navigation.toggleDrawer()} />
        </View>
        <Events />
      </View>
      </Fragment>
    );
  }
}

class ResourcesScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Resources',
    drawerIcon: () => (
      <Ionicons name='ios-clipboard' size={30}
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
        <Resources />
      </View>
    );
  }
}

class ConsultantsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Consultants',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name='ios-briefcase' size={30}
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
        <Consultants />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name='ios-contact' size={30}
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
        <Profile />
      </View>
    );
  }
}

class AboutUsScreen extends React.Component {
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

const MyDrawerNavigator = createDrawerNavigator(
  {
    Events: {
      screen: EventsScreen,
    },
    Resources: {
      screen: ResourcesScreen,
    },
    Consultants: {
      screen: ConsultantsScreen,
    },
    Profile: {
      screen: ProfileScreen
    },
    AboutUs: {
      screen: AboutUsScreen
    }
  },
  {
    //this is marron at a lighter opacity
    overlayColor: 'rgba(128,0,0,.7)',
    hideStatusBar: true,
    contentOptions: {
      activeTintColor: themeColor
    }
  }
);

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
    backgroundColor: themeColor,
    height: 90
  },
  icon: {
    paddingLeft: 20,
    color: 'white'
  }
});

const AppContainer = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
  render(){
    return (   
        <AppContainer />
    );
  }
}
export default App;
