import React, { Fragment } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const themeColor = 'maroon';

const DATA = [
    {
      id: '1',
      title: 'First Item',
      description: 'description'
    },
    {
      id: '2',
      title: 'Second Item',
      description: 'description'
    },
    {
      id: '3',
      title: 'Third Item',
      description: 'description'
    },
    {
    id: '4',
    title: 'Fourth Item',
    description: 'description'
    },
    {
    id: '5',
    title: 'Fifth Item',
    description: 'description'
    },
  ];


class Resources extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Resources',
    drawerIcon: () => (
      <Ionicons name='ios-clipboard' size={30}
      />
    ),
  };

    render(){
        return(
          <Fragment>
            <View style={styles.header}>
              <Ionicons name='ios-menu' size={40}
              style={styles.icon}
              onPress={() => this.props.navigation.toggleDrawer()} />
            </View>
            <View style={styles.bigContainer}>
                <Text style={styles.bigTitle}>Resources</Text>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <ResourceComp title={item.title} description={item.description}/>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
          </Fragment>
        );
    }
}

 ResourceComp = ({title, description}) => {
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.smallTitle}>{description}</Text>
        </View>
            
    );
}

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

export default Resources;