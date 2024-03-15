import { View } from 'react-native';
import Iframe from './src/components/Iframe';
import InternetConnection from './src/components/InternetConnection';

const App=()=>{

  return(
<View style={{flex:1}}>
  <Iframe/>
  <InternetConnection/>
</View>
  )
}

export default App;