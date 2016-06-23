/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MyMovie from './src/movie.js';
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



//var MOCKED_MOVIES_DATA = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MyProject extends Component{
render() {
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
}
}
/*--  首页页面组件 --*/
class HomeScene extends Component{
// getInitialState() {
//   return {
//     id: 'AXIBA001',
//     flag: null
//   };
// }
constructor(props){
  super(props);
  this.state={
    id: 'AXIBA001',
    flag: null
 }
}

render() {
  return (
    <View style={styles.home}>
      <TouchableHighlight onPress={this.onPress1.bind(this)}>
         <Text>push me!{this.state.flag && ' I \'m ' + this.state.flag + ', i come from second page'}</Text>
      </TouchableHighlight>
    </View>
  );
}
onPress1() {
  var _me = this;
   const navigator = this.props.navigator;
  //const { navigator } = this.props;
  if(navigator)
  {
      navigator.push({
          name: 'touch View',
          component: MyMovie,
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
}
/*--  push后的页面组件 --*/
class SecondScene extends Component{
render() {
  return (
    <View style={styles.home}>
      <TouchableHighlight onPress={this.onPress2.bind(this)}>
        <Text>push sucess!I get {this.props.id},i want back!</Text>
      </TouchableHighlight>
    </View>
  );
}
onPress2() {
   const navigator = this.props.navigator;
  //const { navigator } = this.props;
  if(this.props.getSomething) {
    var flag = 'Axiba002'
    this.props.getSomething(flag);
  }
  if(navigator) {
    navigator.pop();
  }
}
};
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