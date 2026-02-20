import { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import BottomBar from '../Components/bottomBar';

export default function PartDataShow({ navigation, route }) {
  const { data, className, homeFolder, Part } = route.params;
  return (
    <>
      <View style={{ height: '94%', paddingBottom: 5 }}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderWidth: 3,
                margin: 2,
                borderRadius: 5,
                gap: 2,
                borderColor: '#051f84',
              }}
              onPress={() =>
                navigation.navigate('PDFViewer', {
                  className,
                  homeFolder,
                  Part,
                  id: item.id,
                  fileName: item.fileId,
                  title: 'Class ' + className + ' ' + item.id,
                })
              }
            >
              <Text
                style={{
                  backgroundColor: '#456643',
                  padding: 5,
                  fontSize: 18,
                  color: '#fff',
                }}
              >
                {item.id}
              </Text>
              <Text style={{ padding: 4, fontSize: 18 }}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <BottomBar />
    </>
  );
}
