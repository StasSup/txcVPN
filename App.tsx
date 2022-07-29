import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';

const uri = 'https://popartblog.ru/wp-content/uploads/2021/09/killua-min.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
      <Button label="Connect" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 900,
  },
});
