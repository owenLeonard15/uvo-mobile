import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';

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
    render(){
        return(
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