import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return ( //minute 30 ca für nativewind
    <View className="flex-1 items-center justify-center align-center bg-white">
      <Text className="text-3xl">Hallo Schnucks!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}
