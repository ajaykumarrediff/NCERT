import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ClassFolder({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          gap: 8,
          shadowRadius: 5,
          shadowOffset: 5,
          shadowColor: '#7c7878',
          borderRadius: 8,
          borderWidth: 1,
          margin: 10,
          // marginBottom: 58,
          padding: 2,
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
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
            navigation.navigate('Subject', {
              className: 'class12',
              // homeFolder: Section,
              title: 'Class 12',
            })
          }
        >
          <Image
            source={require('../Assets/twelve.png')}
            style={{ height: 150, width: 150 }}
          />
          <Text style={{ color: '#0e0e0e', fontSize: 24, fontWeight: '700' }}>
            Class XII
          </Text>
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
            navigation.navigate('Subject', {
              className: 'class11',
              // homeFolder: Section,
              title: 'Class 11',
            })
          }
        >
          <Image
            source={require('../Assets/eleven.png')}
            style={{ height: 150, width: 150 }}
          />
          <Text style={{ color: '#0e0e0e', fontSize: 24, fontWeight: '700' }}>
            Class XI
          </Text>
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
            navigation.navigate('Subject', {
              className: 'class10',
              // homeFolder: Section,
              title: 'Class 10',
            })
          }
        >
          <Image
            source={require('../Assets/ten.png')}
            style={{ height: 150, width: 150 }}
          />
          <Text style={{ color: '#0e0e0e', fontSize: 24, fontWeight: '700' }}>
            Class X
          </Text>
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
            navigation.navigate('Subject', {
              className: 'class9',
              // homeFolder: Section,
              title: 'Class 9',
            })
          }
        >
          <Image
            source={require('../Assets/nine.png')}
            style={{ height: 150, width: 150 }}
          />
          <Text style={{ color: '#0e0e0e', fontSize: 24, fontWeight: '700' }}>
            Class IX
          </Text>
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
            navigation.navigate('Subject', {
              className: 'class8',
              // homeFolder: Section,
              title: 'Class 8',
            })
          }
        >
          <Image
            source={require('../Assets/eight.png')}
            style={{ height: 150, width: 150 }}
          />
          <Text style={{ color: '#0e0e0e', fontSize: 24, fontWeight: '700' }}>
            Class VIII
          </Text>
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
            navigation.navigate('Subject', {
              className: 'class7',
              // homeFolder: Section,
              title: 'Class 7',
            })
          }
        >
          <Image
            source={require('../Assets/seven.png')}
            style={{ height: 150, width: 150 }}
          />
          <Text style={{ color: '#0e0e0e', fontSize: 24, fontWeight: '700' }}>
            Class VII
          </Text>
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
            navigation.navigate('Subject', {
              className: 'class6',
              // homeFolder: Section,
              title: 'Class 6',
            })
          }
        >
          <Image
            source={require('../Assets/six.png')}
            style={{ height: 150, width: 150 }}
          />
          <Text style={{ color: '#0e0e0e', fontSize: 24, fontWeight: '700' }}>
            Class VI
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
