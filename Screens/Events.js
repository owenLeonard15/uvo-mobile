import React, {Fragment} from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment } from '../actions/testAction';


const themeColor = 'maroon';

const DATA = [
    {
      id: '1',
      title: 'First Item',
      date: 'mm/dd/yy'
    },
    {
      id: '2',
      title: 'Second Item',
      date: 'mm/dd/yy'
    },
    {
      id: '3',
      title: 'Third Item',
      date: 'mm/dd/yy'
    },
    {
    id: '4',
    title: 'Fourth Item',
    date: 'mm/dd/yy'
    },
    {
    id: '5',
    title: 'Fifth Item',
    date: 'mm/dd/yy'
    },
  ];


class Events extends React.Component {
  static navigationOptions = {
    title: 'Events',
    drawerLabel: 'Events',
    drawerIcon: () => (
      <Ionicons  name='ios-calendar' size={32}
      />
    )
  };

    render(){
        return(
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

              {/* <Events /> */}
              <TouchableOpacity onPress={() => this.props.increment()}>
                <Text>count: {this.props.testR.count}</Text>
              </TouchableOpacity>
              <View style={styles.bigContainer}>
                <Text style={styles.bigTitle}>Events</Text>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <EventComp title={item.title} date={item.date}/>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
              </View>

            </View>
          </Fragment>
        );
    }
}

 EventComp = ({title, date}) => {
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.smallTitle}>{date}</Text>
        </View>
            
    );
}

const mapStateToProps = (state) => {
  const { testR } = state
  return { testR }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    increment,
  }, dispatch)
);


const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    bigTitle: {
        fontSize: 30,
        paddingBottom: 10,
        backgroundColor: themeColor,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: 'white'
    },
    container: {
        flex: 1,
        alignSelf: 'stretch'
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
    },
    item: {
      backgroundColor: 'gray',
      padding: 50,
      marginVertical: 8,
      marginHorizontal: 8,
    },
    smallTitle: {
        fontSize: 16
    },
    title: {
      fontSize: 32
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Events);