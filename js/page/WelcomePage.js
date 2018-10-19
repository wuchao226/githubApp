/**
 * @author       wuchao226
 * @date         2018/10/17
 * @Description: 欢迎页轮播图
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import HomePage from './BottomTabBar'

export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            const resetAction=NavigationActions.reset({
                actions:[
                    NavigationActions.navigate({routeName:'HomePage'}),
                ]
            });
            this.props.navigation.dispatch(resetAction);
        }, 2000)
    }

    componentWillUnMount() {
        //如果存在this.timer，则使用clearTimeout清空。
        //如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return <View>
            <Text>欢迎</Text>
        </View>
    }
}