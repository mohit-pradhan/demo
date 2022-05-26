import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Detail(props) {

    const movie= props.navigation.getParam('movie',null)


  return (
    <View style={styles.container}>
        <View style={styles.starContainer}>
          <FontAwesomeIcon style={movie.average_rating>0? styles.orange: styles.white} icon={faStar}/>
          <FontAwesomeIcon style={movie.average_rating>1? styles.orange: styles.white} icon={faStar}/>
          <FontAwesomeIcon style={movie.average_rating>2? styles.orange:styles.white} icon={faStar}/>
          <FontAwesomeIcon style={movie.average_rating>3? styles.orange:styles.white} icon={faStar}/>
          <FontAwesomeIcon style={movie.average_rating>4? styles.orange:styles.white} icon={faStar}/>
          <Text style={styles.white}>({movie.no_of_ratings})</Text>
        </View>
        
      <View style={{borderBottomColor:'white',borderBottomWidth:2}}>
      <Text style={styles.description}>{movie.description}</Text>
      </View>
        <Text style={styles.description}>Rate</Text>
        
        <View style={styles.starContainer}>
            <FontAwesomeIcon style={movie.average_rating>0? styles.purple: styles.grey} icon={faStar}/>
            <FontAwesomeIcon style={movie.average_rating>1? styles.purple: styles.grey} icon={faStar}/>
            <FontAwesomeIcon style={movie.average_rating>2? styles.purple:styles.grey} icon={faStar}/>
            <FontAwesomeIcon style={movie.average_rating>3? styles.purple:styles.grey} icon={faStar}/>
            <FontAwesomeIcon style={movie.average_rating>4? styles.purple:styles.grey} icon={faStar}/>
        </View>
      
    </View>
  );
}

Detail.navigationOptions= screenProps=>({
  title: screenProps.navigation.getParam('title'),
  headerStyle: {
    backgroundColor:'orange'
  },
  headerTintColor:'#fff',
  headerTitleStyle:{
    fontWeight:'bold',
    fontSize:24
  },
  headerRight:(
    <Button title='Edit' color={'black'}
      onPress={()=>screenProps.navigation.navigate('Edit',{movie: screenProps.navigation.getParam('movie')})}
    />
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex:1,
    padding:10,
    height: 50,
    backgroundColor:'#282C35',
  },
  itemText:{
    color:'#fff',
    fontSize:24,

  },
  starContainer:{
    alignItems:"center",
    justifyContent:'center',
    flexDirection:'row'
  },
  orange:{
    color: 'orange',
  },
  white:{
    color:'white',
  },
  description:{
    fontSize:20,
    color:'white',
  },
});
