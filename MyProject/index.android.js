/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {MyMovie,MyMovie2} from './src/movie.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ListView,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: '标题1', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
  {title: '标题2', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
  {title: '标题3', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
];

//var MOCKED_MOVIES_DATA = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';



class MyProject extends Component {

  constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };

  }

  componentDidMount() {
    //this.fetchData();
  }


  render() {

    if (!this.state.loaded) {
      return (
        <View>
        // <MyMovie></MyMovie>
        <MyMovie2></MyMovie2>
        </View>
        );
    }

    //var movie=MOCKED_MOVIES_DATA[0];
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderMovie}
     />
      )

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
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>

      )
  }

   //getRows(): Array {
    //var data = [];
    //for (var i = 0; i < 100; i++) {
      //var pressedText = "this is item :" +i;
      //data.push(pressedText);
    //}
    //return data;
  //}

  fetchData() {
    //fetch(MOCKED_MOVIES_DATA)
      //.then((response) => response.json())
      //.then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(MOCKED_MOVIES_DATA),

          loaded: true,

        });
      //})
      //.done();
  }
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 100,
    height: 80,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('MyProject', () => MyProject);
