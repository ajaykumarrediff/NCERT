import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StackNavigations from './navigation/folderNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={{ flex: 1 }}>
        <StackNavigations />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
