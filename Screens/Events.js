import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';

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
    render(){
        return(
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

export default Events;