/**
 * @author       wuchao226
 * @date         2018/10/18
 * @Description: 最热
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

export default class PopularPage extends Component {

    render() {
        return <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                <Text style={{color: 'white'}}>首页</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});