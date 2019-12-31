import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import AboutUs from './Screens/AboutUs';
import Events from './Screens/Events';
import Resources from './Screens/Resources';
import Consultants from './Screens/Consultants';
import Profile from './Screens/Profile';
const themeColor = 'maroon';
// Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import testReducer from './reducers/testReducer';

const store = createStore(testReducer);

// This object lists all of the screens and references to their class objects
//
// For example, the Events navigation object has property screen which has value Events
// In this case, the value Events is a reference to the imported Events class object form './Screens/Events.js'
const MyDrawerNavigator = createDrawerNavigator(
  {
    Events: {
      screen: Events,
    },
    Resources: {
      screen: Resources,
    },
    Consultants: {
      screen: Consultants,
    },
    Profile: {
      screen: Profile,
    },
    AboutUs: {
      screen: AboutUs,
    }
  },
  {
    // this is maroon at a lighter opacity
    // creates a semi-transparent overlay when the drawer is toggled
    overlayColor: 'rgba(128,0,0,.7)',
    hideStatusBar: true,
    contentOptions: {
      activeTintColor: themeColor
    }
  }
);

const AppContainer = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>   
    );
  }
}
export default App;
