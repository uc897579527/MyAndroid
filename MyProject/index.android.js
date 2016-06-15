/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
];

class MyProject extends Component {

constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      movies: null,  //这里放你自己定义的state变量及初始值
    };
  }

  componentDidMount() {
    //this.fetchData();
  }

  render() {

    if (!this.state.movies) {
      return this.renderLoadingView();
    }

    var movie=MOCKED_MOVIES_DATA[0];
    return this.renderMovie(movie);

    
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  renderMovie(movie){
    return(
      <View style={styles.container}>
      <Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
         <Text>{movie.title}</Text>
         <Text>{movie.year}</Text>
        </View> 
      </View> 
      )
  }
}

  //fetchData() {
    //fetch(MOCKED_MOVIES_DATA)
      //.then((response) => response.json())
      //.then((responseData) => {
        //this.setState({
          //movies: responseData.movies,
        //});
      //})
      //.done();
  //}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item:{
    backgroundColor:'#333333',
  },
  thumbnail:{
    width:100,
    height:100,
  },
  rightContainer: {
    backgroundColor:'red',
    flex: 1,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
