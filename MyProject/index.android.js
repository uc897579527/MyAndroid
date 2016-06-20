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

class NavButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

class NavMenu extends Component {
  render() {
    return (
      <View style={styles.scene}>
        <Text style={styles.messageText}>{this.props.message}</Text>
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: '向右拖拽关闭页面',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            });
          }}
          text="从右边向左切入页面(带有透明度变化)"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: '向下拖拽关闭页面',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            });
          }}
          text="从下往上切入页面(带有透明度变化)"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          }}
          text="页面弹出(回退一页)"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.popToTop();
          }}
          text="页面弹出(回退到最后一页)"
        />
      </View>
    );
  }
}

class MyProject extends Component  {

  // constructor(props) {
  //   super(props);   //这一句不能省略，照抄即可
  //   this.state = {
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2,
  //     }),
  //     loaded: false,
  //   };
// constructor(props: any) {
//     super(props);
//     this.state = {
//       bounceValue: new Animated.Value(0),
//     };

//   }
  

  render()  {

    // if (!this.state.loaded) {
    //   return (
    //       this.renderLoadingView()
    //     );
    // }

    // //var movie=MOCKED_MOVIES_DATA[0];
    // return (
    //   <ListView
    //   dataSource={this.state.dataSource}
    //   renderRow={this.renderMovie}
    //  />
    //   )

    return (
      <Navigator
        style={styles.container}
        initialRoute={{ message: '初始页面', }}
        renderScene={ (route, navigator) => <NavMenu
            message={route.message}
            navigator={navigator}
          />}
         configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
    );
  }

  // renderLoadingView() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>
  //         正在加载电影数据……
  //       </Text>
  //     </View>
  //   );
  // }

  // renderMovie(movie){
  //   return(
  //     <View style={styles.container}>
  //       <Image
  //         source={{uri: movie.posters.thumbnail}}
  //         style={styles.thumbnail}
  //       />
  //       <View style={styles.rightContainer}>
  //         <Text style={styles.title}>{movie.title}</Text>
  //         <Text style={styles.year}>{movie.year}</Text>
  //       </View>
  //     </View>

  //     )
  // }

   //getRows(): Array {
    //var data = [];
    //for (var i = 0; i < 100; i++) {
      //var pressedText = "this is item :" +i;
      //data.push(pressedText);
    //}
    //return data;
  //}

  // fetchData() {
  //   //fetch(MOCKED_MOVIES_DATA)
  //     //.then((response) => response.json())
  //     //.then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(MOCKED_MOVIES_DATA),

  //         loaded: true,

  //       });
  //     //})
  //     //.done();
  // }
  // componentDidMount() {
  //   //this.fetchData();
  //   this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
  //   Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
  //     this.state.bounceValue,                 // 将`bounceValue`值动画化
  //     {
  //       toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
  //       friction: 1,                          // Bouncier spring
  //     }
  //   ).start();        
  // }

}

const styles = StyleSheet.create({
   container: {
    flex: 1,
   },
   messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },


});

AppRegistry.registerComponent('MyProject', () => MyProject);
