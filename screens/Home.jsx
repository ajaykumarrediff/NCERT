import { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BottomBar from '../Components/bottomBar';

export default function HomeScreens({ navigation }) {
  useEffect(() => {
    if (navigation.canGoBack()) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      });
    }
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <TouchableOpacity
        style={{
          width: '45%',
          borderWidth: 2,
          borderRadius: 4,
          margin: 8,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('Class', { Section: 'Books', title: 'Books' })
        }
      >
        <Image
          source={require('../Assets/books.png')}
          style={{ height: 150, width: 150 }}
        />
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Books</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '45%',
          borderWidth: 2,
          borderRadius: 4,
          margin: 8,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('Class', {
            Section: 'Examplar',
            title: 'Examplar',
          })
        }
      >
        <Image
          source={require('../Assets/examplar.png')}
          style={{ height: 150, width: 150 }}
        />
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Examplar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '45%',
          borderWidth: 2,
          borderRadius: 4,
          margin: 8,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('Class', {
            Section: 'Solutions',
            title: 'Solutions',
          })
        }
      >
        <Image
          source={require('../Assets/solutions.png')}
          style={{ height: 150, width: 150 }}
        />
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Solutions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '45%',
          borderWidth: 2,
          borderRadius: 4,
          margin: 8,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('Class', { Section: 'Notes', title: 'Notes' })
        }
      >
        <Image
          source={require('../Assets/notes.png')}
          style={{ height: 150, width: 150 }}
        />
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Notes</Text>
      </TouchableOpacity>
      <BottomBar navigation={navigation} />
    </View>
  );
}
