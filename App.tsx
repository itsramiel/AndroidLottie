import LottieView from 'lottie-react-native';
import {useRef} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  const ref = useRef<LottieView>(null);

  return (
    <SafeAreaView style={styles.screen}>
      <Button title="play" onPress={() => ref.current?.play()} />
      <LottieView
        ref={ref}
        style={styles.lottie}
        source={require('./assets/Animation - 1729763779569.json')}
        autoPlay={false}
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
    flex: 1,
  },
});

export default App;
