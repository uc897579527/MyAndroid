/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import {MyMovie,MyMovie2} from './src/movie.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ListView,
  Animated,
  TouchableHighlight,
  Navigator,

} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: '标题1', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
  {title: '标题2', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
  {title: '标题3', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
];

//var MOCKED_MOVIES_DATA = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MyProject = React.createClass({
render: function() {
  //component这里设置的是这个组件启动的时候显示的第一个子组件
  return (
    <Navigator
        style= {styles.container}
        initialRoute= {{
          component: HomeScene,
          name: 'home'
        }}
        configureScene={() => {
            return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          if(route.component) {
            return <Component {...route.params} navigator={navigator} />
          }
        }} >
    </Navigator>
  );
},
});
/*--  首页页面组件 --*/
var HomeScene = React.createClass({
getInitialState:function () {
  return {
    id: 'AXIBA001',
    flag: null
  };
},
render: function() {
  return (
    <View style={styles.home}>
      <TouchableHighlight onPress={this.onPress}>
        <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
      </TouchableHighlight>
    </View>
  );
},
onPress: function() {
  var _me = this;
  //或者写成 const navigator = this.props.navigator;
  const { navigator } = this.props;
  if(navigator)
  {
      navigator.push({
          name: 'touch View',
          component: SecondScene,
          params: {
              id: this.state.id,
              getSomething:function(flag) {
                _me.setState({
                  flag: flag
                });
              }
          }
       })
  }
}
});
/*--  push后的页面组件 --*/
var SecondScene = React.createClass({
render: function() {
  return (
    <View style={styles.home}>
      <TouchableHighlight onPress={this.onPress}>
        <Text>push sucess!I get {this.props.id},i want back!</Text>
      </TouchableHighlight>
    </View>
  );
},
onPress: function() {
  //或者写成 const navigator = this.props.navigator;
  const { navigator } = this.props;
  if(this.props.getSomething) {
    var flag = 'Axiba002'
    this.props.getSomething(flag);
  }
  if(navigator) {
    navigator.pop();
  }
}
});
/*布局样式*/
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  home: {
    paddingTop:74,
  },
});


AppRegistry.registerComponent('MyProject', () => MyProject);

//http://www.lcode.org/%E3%80%90react-native%E5%BC%80%E5%8F%91%E3%80%91react-native%E6%8E%A7%E4%BB%B6%E4%B9%8Bnavigator%E7%BB%84%E4%BB%B6%E8%AF%A6%E8%A7%A3%E4%BB%A5%E5%8F%8A%E5%AE%9E%E4%BE%8B23/