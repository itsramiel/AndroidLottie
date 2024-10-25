import LottieView from 'lottie-react-native';
import {Alert, Button, SafeAreaView, StyleSheet, View} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Button title="Press Me" onPress={() => Alert.alert('Hey!')} />
      <LottieView
        style={styles.lottie}
        source={require('./assets/Animation - 1729763779569.json')}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lottie: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: 'none',
  },
});

export default App;
