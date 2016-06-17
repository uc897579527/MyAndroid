import React, { Component } from 'react';
import {
Text,
 View,

} from 'react-native';
 class MyMovie extends Component{
  render() {
    return (
      <View>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }
}

class MyMovie2 extends Component{
  render() {
    return (
      <View>
        <Text>
          正在加载电影数据……2
        </Text>
      </View>
    );
  }
}

export default {MyMovie,MyMovie2};
//module.exports = MyMovie;