import { FlatList, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';

export default function MovieList(props) {
  const [movies,setMovies]= useState([])
  
  useEffect(()=>{
    fetch('http://192.168.101.6:8000/api/movies/',{
    method: "GET",

   })
  .then(res=> res.json())
  .then(jsonRes=> setMovies(jsonRes))
  .catch(error => console.log(error))
  
  },[])
  console.log(movies)
  const movieClicked= (movie)=>{
    props.navigation.navigate('Detail',{movie:movie,title:movie.title})
  }
  return (
    <View>
      <Image source={require('../assets/movierater.jpg')}
        style={{width:'100%',height:135,paddingTop:30}}
        resizeMode='contain'
      />
      <FlatList
        data={movies}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=> movieClicked(item)}>
            <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>

          </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item,index)=>index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  }
});
