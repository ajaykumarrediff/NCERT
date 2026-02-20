import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BottomBar from '../Components/bottomBar';

export default function ClassFolder({ navigation, route }) {
  const { Section } = route.params;

  if (Section === 'Solutions') {
    return (
      <>
        <View
          style={{
            shadowRadius: 5,
            shadowOffset: 5,
            shadowColor: '#7c7878',
            width: '95%',
            height: '90%',
            borderRadius: 8,
            borderWidth: 1,
            margin: 10,
            padding: 4,
            gap: 8,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 12,
                homeFolder: Section,
                Examplar: false,
                title: Section + ' : Class 12',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>Class XII</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 11,
                homeFolder: Section,
                Examplar: false,
                title: Section + ' : Class 11',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>Class XI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 10,
                homeFolder: Section,
                Examplar: false,
                title: Section + ' : Class 10',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>Class X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 9,
                homeFolder: Section,
                Examplar: false,
                title: Section + ' : Class 9',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>Class IX</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 12,
                Examplar: true,
                homeFolder: Section,
                title: Section + ' : Examplar Class 12',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>
              Examplar Class XII
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 11,
                Examplar: true,
                homeFolder: Section,
                title: Section + ' : Examplar Class 11',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>
              Examplar Class XI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 10,
                Examplar: true,
                homeFolder: Section,
                title: Section + ' : Examplar Class 10',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>
              Examplar Class X
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#001f54',
              margin: 2,
              marginHorizontal: 8,
              paddingHorizontal: 15,
              padding: 10,
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate('PDFfolder', {
                className: 9,
                Examplar: true,
                homeFolder: Section,
                title: Section + ' : Examplar Class 9',
              })
            }
          >
            <Text style={{ color: '#fff', fontSize: 24 }}>
              Examplar Class IX
            </Text>
          </TouchableOpacity>
        </View>
        <BottomBar />
      </>
    );
  }

  return (
    <>
      <View
        style={{
          shadowRadius: 5,
          shadowOffset: 5,
          shadowColor: '#7c7878',
          width: '95%',
          height: '90%',
          borderRadius: 8,
          borderWidth: 1,
          margin: 10,
          padding: 4,
          gap: 8,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#001f54',
            margin: 2,
            marginHorizontal: 8,
            paddingHorizontal: 15,
            padding: 10,
            borderRadius: 8,
          }}
          onPress={() =>
            navigation.navigate('PDFfolder', {
              className: 12,
              homeFolder: Section,
              title: Section + ' : Class 12',
            })
          }
        >
          <Text style={{ color: '#fff', fontSize: 24 }}>Class XII</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#001f54',
            margin: 2,
            marginHorizontal: 8,
            paddingHorizontal: 15,
            padding: 10,
            borderRadius: 8,
          }}
          onPress={() =>
            navigation.navigate('PDFfolder', {
              className: 11,
              homeFolder: Section,
              title: Section + ' : Class 11',
            })
          }
        >
          <Text style={{ color: '#fff', fontSize: 24 }}>Class XI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#001f54',
            margin: 2,
            marginHorizontal: 8,
            paddingHorizontal: 15,
            padding: 10,
            borderRadius: 8,
          }}
          onPress={() =>
            navigation.navigate('PDFfolder', {
              className: 10,
              homeFolder: Section,
              title: Section + ' : Class 10',
            })
          }
        >
          <Text style={{ color: '#fff', fontSize: 24 }}>Class X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#001f54',
            margin: 2,
            marginHorizontal: 8,
            paddingHorizontal: 15,
            padding: 10,
            borderRadius: 8,
          }}
          onPress={() =>
            navigation.navigate('PDFfolder', {
              className: 9,
              homeFolder: Section,
              title: Section + ' : Class 9',
            })
          }
        >
          <Text style={{ color: '#fff', fontSize: 24 }}>Class IX</Text>
        </TouchableOpacity>
      </View>
      <BottomBar />
    </>
  );
}
