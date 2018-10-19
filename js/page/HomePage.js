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

export default class HomePage extends Component{

    render(){
        const BottomTabBar = TabNavigator({
                PopularPage: {
                    screen: PopularPage,
                    navigationOptions: {//配置TabNavigator的属性
                        tabBarLabel: '最热',//标签栏title
                        //设置标签栏图标
                        tabBarIcon: (isFocused, tintColor) => {
                            <Image style={[styles.icon, {tintColor: tintColor}]}
                                   source={require('../../res/images/ic_polular.png')}/>
                        }
                    }
                },
                TrendingPage: {
                    screen: TrendingPage,
                    navigationOptions: {
                        tabBarLabel: '趋势',
                        tabBarIcon: (isFocused, tintColor) => {
                            <Image style={[styles.icon, {tintColor: tintColor}]}
                                   source={require('../../res/images/ic_trending.png')}/>
                        }
                    }

                },
                FavoritePage: {
                    screen: FavoritePage,
                    navigationOptions: {
                        tabBarLabel: '收藏',
                        tabBarIcon: (isFocused, tintColor) => {
                            <Image style={[styles.icon, {tintColor: tintColor}]}
                                   source={require('../../res/images/ic_favorite.png')}/>
                        }
                    }
                },
                MyPage: {
                    screen: MyPage,
                    navigationOptions: {
                        tabBarLabel: '我的',
                        tabBarIcon: (isFocused, tintColor) => {
                            <Image style={[styles.icon, {tintColor: tintColor}]}
                                   source={require('../../res/images/ic_my.png')}/>
                        }
                    }
                },
            },
            {
                initialRouteName: 'PopularPage',
                tabBarPosition: 'bottom',//显示在底部
                swipeEnabled: false,//禁止左右滑动
                tabBarOptions: {//配置标签栏的属性
                    activeTintColor: 'orange',//文字和图片选中的颜色
                    inactiveTintColor: '#666666',//文字和图片默认颜色
                    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
                    indicatorStyle: {height: 0},// android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了 暂时解决这个问题
                    style: {
                        backgroundColor: '#F5FCFF', // TabBar 背景色
                        paddingBottom: 0,
                    },
                    labelStyle: {
                        fontSize: 12,
                    }
                }
            }
        );
        return <BottomTabBar/>
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        height: 26,
        width: 26,
    }
});

