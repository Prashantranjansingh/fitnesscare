import { StyleSheet} from 'react-native';
import Webview from 'react-native-webview';

export default function Iframe() {
  
  return (
      <Webview
        source={{
          uri: 'https://fitnesscare.com.au/users/sign_in',
        }}
        style={styles.webview}
      />
  );
}
 
const styles = StyleSheet.create({
  webview: {
    borderColor: 'red',
    borderWidth: 10,
  },
});