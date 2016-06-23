import React, { Component } from 'react';
var MOCKED_MOVIES_DATA = [
  {title: '标题1', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
  {title: '标题2', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
  {title: '标题3', year: '2015', posters: {thumbnail: 'http://www.baidu.com/img/bd_logo1.png'}},
];
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ListView,
  TouchableHighlight,
} from 'react-native';

 class MyMovie extends Component{
   constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };

}

  render() {
    // let  dataSourcea= new ListView.DataSource({
    //    rowHasChanged: (row1, row2) => row1 !== row2,
    //   });
    return (
        <ListView 
       dataSource={dataSourcea.cloneWithRows(MOCKED_MOVIES_DATA)} 
       renderRow={this.renderMovie} 
       />
    )
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

export default MyMovie;
//module.exports = MyMovie;