import React from 'react';
import { Image, View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const themeColor = 'maroon';

const DATA = [
    {
      id: '1',
      name: 'Name One',
      description: 'description',
      imageUrl: 'url'
    },
    {
      id: '2',
      name: 'Name Two',
      description: 'description',
      imageUrl: 'url'
    },
    {
      id: '3',
      name: 'Name Three',
      description: 'description',
      imageUrl: 'url'
    },
    {
        id: '4',
        name: 'Name Four',
        description: 'description',
        imageUrl: 'url'
    },
    {
        id: '5',
        name: 'Name Five',
        description: 'description',
        imageUrl: 'url'
    },
  ];

class Consultants extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Consultants',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-briefcase' size={30}/>
        ),
      };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Ionicons name='ios-menu' size={40}
                style={styles.icon}
                onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
                <View style={styles.bigContainer}>
                    <Text style={styles.bigTitle}>Re-Entry Consultants</Text>
                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <ConsultantComp imageUrl={item.imageUrl} name={item.name} description={item.description}/>}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </View>
            </View>
        );
    }
}

 ConsultantComp = ({imageUrl, name, description}) => {
    return(
        <View style={styles.item}>
            <Image 
                style={styles.image}
                source={require('../assets/stock-profile.jpg')}
            />
            <View style={styles.previewText}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.smallTitle}>{description}</Text>
            </View>
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
        marginVertical: 8,
        marginHorizontal: 8,
        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 20,
        flexDirection: 'row'
    },
    previewText: {
        padding: 10,
    },
    smallTitle: {
        fontSize: 16
    },
    title: {
    fontSize: 32
    },
})

export default Consultants;