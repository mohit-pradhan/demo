import MovieList from './components/list';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Detail from './components/detail';
import Edit from './components/edit';
import {Text} from 'react-native';

const AppNavigator=createStackNavigator({
  MovieList:{screen:MovieList},
  Detail:{screen:Detail},
  Edit:{screen:Edit},
})



const App= createAppContainer(AppNavigator);

// function App(){
//   return(
//     <Text>
//       ghjkl
//     </Text>
//   )
// }

export default App;