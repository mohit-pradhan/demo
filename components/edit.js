import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {useState} from 'react';

export default function Edit(props) {

    const movie= props.navigation.getParam('movie',null)

    const [title,setTitle]= useState(movie.title)
    const[description,setDescription]= useState(movie.description)

    const saveMovie = ()=>{
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, description: description})

        })
        .then(res=>res.json())
        .then(movie=> {
            props.navigation.navigate('Detail',{movie: movie, title:movie.title})
        })
        .catch(error=>console.log(error))
    }

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Edit {movie.title}</Text>
        <TextInput 
            style={styles.input}
            placeholder='title'
            onChangeText={ text=>  setTitle(text)}
            value={title}
        />
        <Text style={styles.label}>Edit {movie.title}</Text>
        <TextInput 
            style={styles.input}
            placeholder='Description'
            onChangeText={ text=>  setDescription(text)}
            value={description}
        />
        <Button onPress={()=> saveMovie()} title='Save' />
    </View>
  );
}

Edit.navigationOptions= screenProps=>({
  title: screenProps.navigation.getParam('title'),
  headerStyle: {
    backgroundColor:'orange'
  },
  headerTintColor:'#fff',
  headerTitleStyle:{
    fontWeight:'bold',
    fontSize:24
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  description:{
    fontSize:20,
    color:'white',
  },
  input:{
    fontSize:24,
    backgroundColor:'white',
    padding: 10,
    margin:10
  },
  label:{
    fontSize:24,
    color:'white',
    padding:10,
    margin:10,
  },
});
