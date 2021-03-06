import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 

//Importação das páginas 
import HomeScreen from '../HomeScreen';
import MovieScreen from '../MovieScreen';
import SerieScreen from '../SerieScreen';
import SharedScreen from '../SharedScreen';

import ConfigContext from '../../contexts/config';

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
    const { theme } = useContext(ConfigContext);

    return (
        <>
            <StatusBar barStyle={theme.statusBarStyle} backgroundColor={theme.statusBarColor}/>
                <Tab.Navigator
                    initialRouteName='Home'
                    activeColor='#FFF'
                    barStyle={{
                        backgroundColor: '#333842'
                    }}
                >
                    <Tab.Screen 
                        name='Home' 
                        component={HomeScreen} 
                        options={{
                            title: 'Home',
                            tabBarIcon: ({ focused }) => (
                                <View style={styles.circle}>
                                    <MaterialCommunityIcons name={focused ? 'play' : 'play-outline'} color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26: 23}/>
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen 
                        name='Movies' 
                        component={MovieScreen}
                        options={{
                            title: 'Filmes',
                            tabBarIcon: ({ focused }) => (
                                <View style={styles.circle}>
                                    <MaterialCommunityIcons name={focused ? 'movie-open' : 'movie-outline'} color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26 : 23}/>
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen 
                        name='Series' 
                        component={SerieScreen}
                        options={{
                            title: 'Séries',
                            tabBarIcon: ({ focused }) => (
                                <View style={styles.circle}>
                                    <MaterialCommunityIcons name='movie-roll' color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26: 23}/>
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen 
                        name='Shared' 
                        component={SharedScreen}
                        options={{
                            title: 'Indicados',
                            tabBarIcon: ({ focused }) => (
                                <View style={styles.circle}>
                                    <MaterialCommunityIcons name={ focused ? 'play-box-multiple' : 'play-box-multiple-outline'} color={ focused ? '#D800FF' : 'rgba(250,250,250,0.5)'} size={ focused ? 26: 23}/>
                                </View>
                            )
                        }}
                    />
                </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    circle: {
        // width: 50,
        // height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 50,
        // backgroundColor: '#FFF',
        // elevation: 4,
        // top: -20
    },

    icon: {
        paddingHorizontal: 5,
    }
});