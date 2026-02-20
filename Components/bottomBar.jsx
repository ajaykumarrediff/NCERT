import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function BottomBar() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        backgroundColor: '#bdbdbd',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../Assets/home.png')}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Class', { Section: 'Books', title: 'Books' })
        }
      >
        <Image
          source={require('../Assets/books.png')}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Class', {
            Section: 'Examplar',
            title: 'Examplar',
          })
        }
      >
        <Image
          source={require('../Assets/examplar.png')}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Class', {
            Section: 'Solutions',
            title: 'Solutions',
          })
        }
      >
        <Image
          source={require('../Assets/solutions.png')}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Class', { Section: 'Notes', title: 'Notes' })
        }
      >
        <Image
          source={require('../Assets/notes.png')}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}
