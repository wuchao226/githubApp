/**
 * @author       wuchao226
 * @date         2018/10/17
 * @Description:
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import PopularPage from "./PopularPage";
import MyPage from "./MyPage";
import TrendingPage from "./TrendingPage";
import FavoritePage from "./FavoritePage";

const BottomTabBar = TabNavigator(
    {
        PopularPage: {
            screen: PopularPage,
            navigationOptions: {
                tabBarLabel: '最热',
                tabBarIcon: (isFocused, tintColor) => {
                    <Image style={[styles.image, {tintColor: tintColor}]}
                           source={require('../../res/images/ic_polular.png')}/>
                }
            }
        },
        TrendingPage: {
            screen: TrendingPage,
        },
        FavoritePage: {
            screen: FavoritePage,
        },
        MyPage: {
            screen: MyPage,
        },
    },
    {
        initialRouteName: 'PopularPage',
        tabBarOptions: {
            tabBarOptions: 'bottom',
        }
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 26,
        width: 26,
    }
});

module.exports = BottomTabBar
