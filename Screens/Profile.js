import React, { Fragment } from 'react';
import { Image, View, Text, StyleSheet, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const themeColor = 'maroon';

class Profile extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name='ios-contact' size={30}
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
                <View style={styles.container}>
                    <Image 
                    style={styles.image}
                    source={require('../assets/stock-profile.jpg')}
                    />
                    <View style={styles.middleContainer}>
                        <View>
                            <Text style={styles.title}>Name</Text>
                            <Text style={styles.smallTitle}>Hometown:</Text>
                            <Text style={styles.smallTitle}>Age:</Text>
                        </View>
                        <Button title='Request To Contact' />
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.title}>Biography:</Text>
                        <Text style={styles.smallTitle}>biography text text text</Text>
                    </View>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    bottomContainer: {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 30,
        paddingTop: 30
    },
    container: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 30
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
    middleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    smallTitle: {
        fontSize: 16
    },
    title: {
        fontSize: 32
    },
})

export default Profile;